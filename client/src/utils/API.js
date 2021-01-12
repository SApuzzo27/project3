import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = process.env.REACT_APP_API_KEY;

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
