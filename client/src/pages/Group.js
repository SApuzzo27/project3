import React, { useEffect, useState } from "react";
import _ from "lodash";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
//import API from "../utils/API";
import "../App.css";

function Group() {
  return (
    <Container>
      <Row>
        <Col size="md-6">A Column</Col>
        <Col size="md-6">Another Column</Col>
      </Row>
    </Container>
  );
}

export default Group;
