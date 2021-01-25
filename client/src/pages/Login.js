import React, { useState } from "react";
import _ from "lodash";
import userAPI from "../utils/userAPI";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import "../components/Login.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      userAPI
        .loginUser({
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.status === 200) {
            props.setUserState(res.data);
          }
        })
        .catch((err) => {
          setErrorMessage(err);
        });
    }
  };
  const refreshPage = (event) => {
    event.preventDefault();
    window.location.reload();
  };

  return (
    <Container fluid>
      <Row>
        <Col size="12">
          <form className="loginForm">
            {errorMessage ? (
              <h4 className="text-danger">
                {" "}
                Login Error: Please try again...{" "}
              </h4>
            ) : (
              <h4 className="text-dark"> Please Login or SignUp!</h4>
            )}
            <Input
              value={email}
              onChange={handleEmailInputChange}
              name="email"
              placeholder="email (required)"
            />
            <Input
              value={password}
              onChange={handlePasswordInputChange}
              name="password"
              placeholder="(required)"
              type="password"
            />

            <FormBtn
              disabled={_.isEmpty(email) && _.isEmpty(password)}
              onClick={handleFormSubmit}
            >
              Log in
            </FormBtn>
            <Link to="/signup">
              <FormBtn> Signup </FormBtn>
            </Link>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
