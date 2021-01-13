import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = process.env.REACT_APP_API_KEY;

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};


// export default {
//   // Gets all comments
//   getComments: function() {
//     return axios.get("/api/comments");
//   },
//   // Gets the comment with the given id
//   getComment: function(id) {
//     return axios.get("/api/comments/" + id);
//   },
//   // Deletes the comment with the given id
//   deleteComment: function(id) {
//     return axios.delete("/api/comments/" + id);
//   },
//   // Saves a comment to the database
//   saveComment: function(commentData) {
//     return axios.post("/api/comments", commentData);
//   }
// };