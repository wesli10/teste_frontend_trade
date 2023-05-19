import axios from "axios";
import { setupCache } from "axios-cache-adapter";

const cache = setupCache({
  maxAge: 20 * 60 * 1000,
});

export const api = axios.create({
  baseURL: "https://api-football-v1.p.rapidapi.com/v3/",
  headers: {
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
});
