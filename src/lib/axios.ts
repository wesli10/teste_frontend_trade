import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-football-v1.p.rapidapi.com/v3/",
  headers: {
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
});
