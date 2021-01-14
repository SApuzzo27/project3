import React, { useState, useEffect } from "react";
import _ from "lodash";

//import OmdbContainer from "../components/OmdbContainer";
import Container from "../components/Container";
import Card from "../components/Card";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchForm from "../components/SearchForm";
import Movie from "../components/Movie";
//import MovieListItem from "../components/MovieListItem";
import "../App.css";
import API from "../utils/API";

function User() {
  //const [currentUser, setCurrentUser] = useState({});
  const [searchResult, setSearchResult] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [userMovies, setUserMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (_.isEmpty(userMovies)) {
      getAllMovies();
    }
  });

  // function loadUserByName(userName) {
  //   console.log("loadUserByName");
  //   API.getUserByName(userName)
  //     .then((res) => setCurrentUser(res.data))
  //     .catch((err) => {
  //       console.log(err);
  //       return 1;
  //     });
  // }

  function getAllMovies() {
    API.getAllSavedMovies()
      .then((res) => {
        setUserMovies(res.data);
      })
      .catch((err) => {
        setErrorMessage(err);
        console.log(errorMessage);
      });
  }

  function searchMovies() {
    API.search(searchTerm)
      .then((res) => {
        console.log(res.data);
        setSearchResult(res.data);
      })
      .catch((err) => {
        setErrorMessage(err);
        console.log(errorMessage);
      });
  }

  function saveMovie() {
    const movieData = {
      title: searchResult.Title,
      year: searchResult.Year,
      rated: searchResult.Rated,
      genre: searchResult.Genre,
      runtime: searchResult.Runtime,
      director: searchResult.Director,
      actors: searchResult.Actors,
      plot: searchResult.Plot,
      poster: searchResult.Poster,
      type: searchResult.Type,
      imdbID: searchResult.imdbID,
    };
    API.saveMovie(movieData)
      .then((res) => console.log(res))
      .then(getAllMovies())
      .catch((err) => {
        setErrorMessage(err);
        console.log(errorMessage);
      });
  }

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchMovies();
  };

  // function loadUserMovies({ movies }) {
  //   setUserMovies(movies);
  // }
  return (
    <Container fluid="true">
      <Row>
        <Col size="md-3">
          <SearchForm
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            q={searchTerm}
          />
        </Col>
        <Col size="md-9">
          {searchResult.Title ? (
            <Movie
              title={searchResult.Title}
              year={searchResult.Year}
              rated={searchResult.Rated}
              genre={searchResult.Genre}
              runtime={searchResult.Runtime}
              director={searchResult.Director}
              actors={searchResult.Actors}
              plot={searchResult.Plot}
              poster={searchResult.Poster}
              type={searchResult.Type}
              imdbID={searchResult.imdbID}
              saveMovie={saveMovie}
            />
          ) : (
            <span className="badge badge-secondary"></span>
          )}
        </Col>
      </Row>
      <Row>
        <h3>Saved Movies</h3>
        <div className="card-group">
          {userMovies.length !== 0 ? (
            userMovies.map((item, index) => {
              return (
                <div className="col-md-2" key={index}>
                  <div className="card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://imdb.com/title/${item.imdbID}`}
                    >
                      <img
                        className="card-img-top"
                        src={item.poster}
                        alt={item.title}
                      />
                    </a>
                    <div className="card-body">
                      <p className="card-text">{item.title}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h3>No Movies in the List</h3>
          )}
        </div>
      </Row>
    </Container>
  );
}

export default User;
