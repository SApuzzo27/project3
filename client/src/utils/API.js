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
  getUserByName: function (username) {
    return axios.get("/api/user/" + username);
  },
  addUserGroup: function (username, group) {
    return axios.post("/api/user/addgroup/" + username, group);
  },
  saveMovie: function (username, movieData) {
    return axios.post("/api/movie/create/" + username, movieData);
  },
  addMovieUser: function (username, movieData) {
    return axios.post("/api/movie/adduser/" + username, movieData);
  },
  removeMovieUser: function (username, movieData) {
    return axios.delete("/api/movie/removeuser/" + username, movieData);
  },
  getSavedMoviesByUser: function (username) {
    return axios.get("/api/movie/user/" + username);
  },
  getGroups: function () {
    return axios.get("/api/group");
  },
  getGroupById: function (groupId) {
    return axios.get("/api/group/" + groupId);
  },
  addGroupUser: function (username, groupData) {
    return axios.post("/api/group/adduser/" + username, groupData);
  },
  getUserByName: function (username) {
    return axios.get("/api/clubuser/" + username);
  },
};
