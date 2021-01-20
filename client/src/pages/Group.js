import React, { useEffect, useState } from "react";
import _ from "lodash";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import GroupCard from "../components/GroupCard";
import API from "../utils/API";
import "../App.css";

function Group({ username }) {
  const [movies, setMovies] = useState([]);
  //const [users, setUsers] = useState([]);
  //const [userMovies, setUserMovies] = useState([]);
  const [groups, setGroups] = useState([]);
  const [currentGroup, setCurrentGroup] = "";
  //const [groupMovies, setGroupMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (_.isEmpty(movies)) {
      getAllMovies();
    }
    if (_.isEmpty(groups)) {
      getAllGroups();
    }
  }, [movies]);

  function getAllGroups() {
    API.getGroups()
      .then((res) => {
        setGroups(res.data);
      })
      .catch((err) => {
        setErrorMessage(err);
        console.log(errorMessage);
      });
  }

  function joinGroup(username, group) {
    API.addGroupUser(username, group)
      .then((res) => {
        setCurrentGroup(res.data);
      })
      .catch((err) => {
        setErrorMessage(err);
        console.log(errorMessage);
      });
  }

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

  const handleJoinGroup = (e) => {
    joinGroup(username, e);
  };

  return (
    <Container>
      <Row>
        <h2>Hello, {username}</h2>
      </Row>
      <Row>
        {currentGroup ? (
          <h3>No groups loaded !</h3>
        ) : (
          groups.map((item, index) => {
            return (
              <GroupCard group={item} key={index} joinGroup={handleJoinGroup} />
            );
          })
        )}
      </Row>
      <Row>
        <Col size="md-6">A Column</Col>
        <Col size="md-6">Another Column</Col>
      </Row>
    </Container>
  );
}

export default Group;
