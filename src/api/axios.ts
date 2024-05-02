import axiosPkg from "axios";

export const axios = axiosPkg.create({
  baseURL: "http://www.omdbapi.com/?apikey=922db138&",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
