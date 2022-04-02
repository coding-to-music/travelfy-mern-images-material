import axios from "axios";

const isProduction = process.env.NODE_ENV === "production";

export const baseURL = isProduction
  ? "https://travelfy-mern-images-material.herokuapp.com/api"
  : "http://localhost:5005/api";

export const apiServer = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 7500,
});
