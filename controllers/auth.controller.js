const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const saltRounds = 10;
const { createJWT, clearRes } = require("../utils/jwt");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Signup process

exports.signupProcess = async (req, res, next) => {
  const { email, password, confirmPassword, ...rest } = req.body;

  if (!email) {
    return res.status(400).json({ errorMessage: "Email is required" });
  }

  if (password.length < 6) {
    return res.status(400).json({
      errorMessage: "Password must be at least 6 characters long",
    });
  }

  if (password != confirmPassword) {
    return res
      .status(400)
      .json({ errorMessage: "Your passwords doesn't match" });
  }

  try {
    const found = await User.findOne({ email });
    if (found) {
      return res
        .status(400)
        .json({ errorMessage: "Your email is already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      email,
      password: hashedPassword,
    });

    const [header, payload, signature] = createJWT(user);

    res.cookie("headload", `${header}.${payload}`, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      sameSite: true,
      secure: false,
    });

    res.cookie("signature", signature, {
      httpOnly: true,
      sameSite: true,
      secure: false,
    });

    const newUser = clearRes(user.toObject());
    res.status(201).json({ user: newUser });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ errorMessage: error.message });
    }
    if (error.code === 11000) {
      return res.status(400).json({
        errorMessage:
          "Username need to be unique. The username you chose is already in use.",
      });
    }
    return res.status(500).json({ errorMessage: error.message });
  }
};

// Login Process

exports.loginProcess = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ errorMessage: "Your credentials are wrong" });
    }
    const match = await bcrypt.compareSync(password, user.password);
    if (match) {
      const [header, payload, signature] = createJWT(user);

      res.cookie("headload", `${header}.${payload}`, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        sameSite: true,
        secure: false,
      });

      res.cookie("signature", signature, {
        httpOnly: true,
        sameSite: true,
        secure: false,
      });
      const newUser = clearRes(user.toObject());
      res.status(200).json({ user: newUser });
    } else {
      res.status(400).json({ errorMessage: "Your credentials are wrong" });
    }
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ errorMessage: error.message });
    }
    if (error.code === 11000) {
      return res.status(400).json({
        errorMessage:
          "Username need to be unique. The username you chose is already in use.",
      });
    }
    return res.status(500).json({ errorMessage: error.message });
  }
};

// Logout Process

exports.logoutProcess = async (req, res, next) => {
  try {
    res.clearCookie("headload");
    res.clearCookie("signature");
    res.status(200).json({ message: "You have been logged out" });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

// Get User Logged

exports.getUserLogged = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const user = await User.findById(_id);
    const newUser = clearRes(user.toObject());
    res.status(200).json({ user: newUser });
  } catch (error) {
    res.status(400).json({ erroMessage: error });
  }
};

// Google Login Signup Process
exports.googleProcess = async (req, res, next) => {
  try {
    const { tokenId } = req.body;
    const response = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { email_verified, email, sub } = response.payload;
    if (!email_verified) {
      return res.status(400).json({ errorMessage: "Email not verified" });
    }
    const user = await User.findOne({ email });
    if (user) {
      const [header, payload, signature] = createJWT(user);

      res.cookie("headload", `${header}.${payload}`, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        sameSite: true,
        secure: false,
      });

      res.cookie("signature", signature, {
        httpOnly: true,
        sameSite: true,
        secure: false,
      });
      const userLogged = clearRes(user.toObject());
      res.status(200).json({ user: userLogged });
    } else {
      const hashedPassword = await bcrypt.hash(email, saltRounds);
      const newUser = await User.create({
        email,
        password: hashedPassword,
        googleId: sub,
      });
      const [header, payload, signature] = createJWT(newUser);

      res.cookie("headload", `${header}.${payload}`, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        sameSite: true,
        secure: false,
      });

      res.cookie("signature", signature, {
        httpOnly: true,
        sameSite: true,
        secure: false,
      });
      const userCreated = clearRes(newUser.toObject());
      res.status(201).json({ user: userCreated });
    }
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};
