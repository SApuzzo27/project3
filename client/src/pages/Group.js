import React, { useEffect, useState } from "react";
import _ from "lodash";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import GroupCard from "../components/GroupCard";
import GroupJumbotron from "../components/GroupJumbotron";
import GroupUsers from "../components/GroupUsers";
import API from "../utils/API";
import "../App.css";

function Group({ username }) {
  const [movies, setMovies] = useState([]);
  //const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  //const [userMovies, setUserMovies] = useState([]);
  const [groups, setGroups] = useState([]);
  const [currentGroup, setCurrentGroup] = useState({});
  const [groupMembers, setGroupMembers] = useState([]);
  //const [groupMovies, setGroupMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    console.log("useEffect");
    if (_.isEmpty(movies)) {
      getAllMovies();
    }
    if (_.isEmpty(groups)) {
      getAllGroups();
    }
    if (_.isEmpty(user)) {
      getUserByName(username);
    }

    if (_.isEmpty(currentGroup)) {
      updateCurrentGroup();
    }
    console.log("useEffect currentGroup", currentGroup);
  }, [movies, user, currentGroup]);

  function getUserByName(username) {
    API.getUserByName(username).then((res) => {
      setUser(res.data);
      if (user.group) {
        updateCurrentGroup();
      }
    });
  }

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
      .then(() => {
        API.addUserGroup(username, group);
      })
      .then(() => {
        setCurrentGroup(group);
        setGroupMembers(group.username);
      })
      .catch((err) => {
        setErrorMessage(err);
        console.log(errorMessage);
      });
  }

  function leaveGroup(username, group) {
    API.removeGroupUser(username, group)
      .then(() => {
        API.removeUserGroup(username, group);
      })
      .then(() => {
        setCurrentGroup({});
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

  function updateCurrentGroup() {
    if (user.group) {
      API.getGroupById(user.group)
        .then((res) => {
          console.log("current group", res.data);
          setCurrentGroup(res.data);
          setGroupMembers(res.data.username);
          console.log("current group username", res.data.username);
        })
        .catch((err) => {
          setErrorMessage(err);
          console.log(errorMessage);
        });
    }
  }

  const handleJoinGroup = (e) => {
    joinGroup(username, e);
  };

  const handleLeaveGroup = (e) => {
    leaveGroup(username, e);
  };

  return (
    <Container>
      <Row>
        <h2>Hello, {username}</h2>
      </Row>
      {user.group ? (
        <>
          <Row>
            <GroupJumbotron
              group={currentGroup}
              handleLeaveGroup={handleLeaveGroup}
            />
          </Row>
          <Row>
            <GroupUsers members={groupMembers} />

            <Col size="md-6">Another Column</Col>
          </Row>
        </>
      ) : (
        <Row>
          {groups.map((item, index) => {
            return (
              <GroupCard group={item} key={index} joinGroup={handleJoinGroup} />
            );
          })}
        </Row>
      )}
    </Container>
  );
}

export default Group;
