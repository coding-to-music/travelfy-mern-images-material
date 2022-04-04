const path = require("path");

// We reuse this import in order to have access to the `body` property in requests
const express = require("express");

// ℹ️ Responsible for the messages you see in the terminal as requests are coming in
// https://www.npmjs.com/package/morgan
const logger = require("morgan");

// ℹ️ Needed when we deal with cookies (we will when dealing with authentication)
// https://www.npmjs.com/package/cookie-parser
const cookieParser = require("cookie-parser");

// ℹ️ Needed to accept from requests from 'the outside'. CORS stands for cross origin resource sharing
// unless the request if from the same domain, by default express wont accept POST requests
const cors = require("cors");

// dotenv config
require("dotenv").config();

// console.log("NODE_ENV", process.env.NODE_ENV);

// console.log("REACT_APP_GOOGLE_MAP_ID", process.env.REACT_APP_GOOGLE_MAP_ID);

// console.log(
//   "REACT_APP_GOOGLE_MAP_API_KEY",
//   process.env.REACT_APP_GOOGLE_MAP_API_KEY
// );

console.log("REACT_APP_ENVIRONMENT", process.env.REACT_APP_ENVIRONMENT);

// app and port config
const app = express();
const port = process.env.PORT || 4000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "../react-ui/build")));

// Answer API requests.
app.get("/api", function (req, res) {
  res.set("Content-Type", "application/json");
  res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../react-ui/build", "index.html"));
});

// Middleware configuration
module.exports = (app) => {
  // Because this is a server that will accept requests from outside and it will be hosted ona server with a `proxy`, express needs to know that it should trust that setting.
  // Services like heroku use something called a proxy and you need to add this to your server
  app.set("trust proxy", 1);

  // origin: ["https://travelfy.netlify.app", "http://localhost:3000", "*" ]

  // controls a very specific header to pass headers from the frontend
  app.use(
    cors({
      credentials: true,
      origin: [
        "https://travelfy-mern-images-material.herokuapp.com",
        "https://still-sands-27981.herokuapp.com",
        "https://guarded-dusk-08830.herokuapp.com",
        "https://radiant-gorge-70504.herokuapp.com/explore",
        "http://localhost:3000",
        "*",
      ],
    })
  );

  // In development environment the app logs
  app.use(logger("dev"));
  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};
