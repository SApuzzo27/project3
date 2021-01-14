import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = process.env.REACT_APP_API_KEY || "&apikey=trilogy";

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  getAllSavedMovies: function () {
    return axios.get("/api/movie");
  },
  saveMovie: function (movieData) {
    return axios.post("/api/movie/create", movieData);
  },
  getUserByName: function (username) {
    return axios.get("/api/clubuser/" + username);
  },
  logoutUser: function () {
  return axios.post("/api/user/logout")
    }
  
};
