import React, { useState, useEffect } from "react";
import _ from "lodash";

//import OmdbContainer from "../components/OmdbContainer";
import Container from "../components/Container";
import Card from "../components/Card";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchForm from "../components/SearchForm";
// import MovieDetail from "../components/MovieDetail";
import "../App.css";
import API from "../utils/API";

function User() {
  const [currentUser, setCurrentUser] = useState({});
  const [searchResult, setSearchResult] = useState({});
  const [userMovies, setUserMovies] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    if (_.isEmpty(currentUser)) {
      loadUserByName("BobDobalina");
    }
    if (!_.isEmpty(currentUser)) {
      loadUserMovies(currentUser);
    }
  }, [userMovies]);

  function loadUserByName(userName) {
    API.getUserByName(userName)
      .then((res) => setCurrentUser(res.data))
      .catch((err) => {
        throw err;
      });
  }

  function handleInputChange(event) {
    const { value } = event.target;
    setSearchString(value);
  }

  function handleFormSubmit() {
    API.search(searchString)
      .then((res) => {
        console.log(res.data);
        setSearchResult(res.data);
      })
      .catch(() => {
        setSearchString("");
      });
  }

  function loadUserMovies({ movies }) {
    setUserMovies(movies);
  }
  return (
    <Container fluid="true">
      <Row>
        <Col size="md-12">
          <Card title="Movie Search">
            <SearchForm
                search={searchString}
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
            />
            </Card>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <span>{searchResult.title ? searchResult.title : `No Results`}</span>
        </Col>
      </Row>
    </Container>
  );
}

export default User;