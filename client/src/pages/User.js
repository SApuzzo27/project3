import React, { useState, useEffect } from "react";
import _ from "lodash";

//import OmdbContainer from "../components/OmdbContainer";
import Container from "../components/Container";
import Card from "../components/Card";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchForm from "../components/SearchForm";
import Movie from "../components/Movie";
import MovieCard from "../components/MovieCard";
import "../App.css";
import API from "../utils/API";

//function User() {
function User({ username }) {
  //const [currentUser, setCurrentUser] = useState({});
  const [searchResult, setSearchResult] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [userMovies, setUserMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (_.isEmpty(movies)) {
      getAllMovies();
    }
    if (_.isEmpty(userMovies)) {
      getUserMovies();
    }
  }, [movies]);

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
        setMovies(res.data);
      })
      .catch((err) => {
        setErrorMessage(err);
        console.log(errorMessage);
      });
  }

  function getUserMovies() {
    API.getSavedMoviesByUser(username)
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
    API.saveMovie(username, movieData)
      .then(() => {
        API.addMovieUser(username, movieData);
      })
      .then(() => {
        getUserMovies();
        getAllMovies();
      })
      .catch((err) => {
        setErrorMessage(err);
        console.log(errorMessage);
      });
  }

  function saveUserMovie(movie) {
    API.addMovieUser(username, movie)
      .then(() => {
        getUserMovies();
      })
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
          <h3>Hello {username} </h3>
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
        <Col size="md-12">
          <h3>{username} Movies</h3>
        </Col>
        <Col size="md-12">
          <div className="card-group scroller">
            {userMovies.length !== 0 ? (
              userMovies.map((item, index) => {
                return <MovieCard movie={item} index={index} key={index} />;
              })
            ) : (
              <div>
                <hr />

                <h3>No Movies Saved by {username}</h3>
              </div>
            )}
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <h3>All Saved Movies</h3>
        </Col>
        <Col size="md-12">
          <div className="card-group scroller">
            {movies.length !== 0 ? (
              movies.map((item, index) => {
                return <MovieCard movie={item} index={index} key={index} />;
              })
            ) : (
              <h3>No Movies in the List</h3>

      
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default User;
