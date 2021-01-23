import "./App.css";
import "./components/Login.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Container } from "./components/Grid";
import Home from "./pages/Home";
//import Groups from "./pages/Groups";

import Footer from "./components/Footer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import User from "./pages/User";
import Group from "./pages/Group";
import Movie from "./pages/MovieSearch";
import userAPI from "./utils/userAPI";
import ProtectedRoute from "./components/ProtectedRoute";
// import Comments from "./pages/Comments";
// import Comment from "./pages/Comment";
import Navbar from "./components/Navbar";
// import SignUp from "./components/SignUpComponents";

function App() {
  const [userState, setUserState] = useState({});

  useEffect(() => {
    // auth user on first render
    authenticate();
  }, []);

  const handleLogoutSubmit = event => {
    // event.preventDefault();
    try {
        if (userState) {
            setUserState({});
            return <Redirect to="/login" />
        }
    } catch (e) { console.log(e) }
};

  //user authentication
  function authenticate() {
    return userAPI
      .authenticateUser()
      .then(({ data }) => {
        console.log("user:", data);
        setUserState(data);
      })
      .catch((err) => console.log("registered user:", err.response));
  }

  return (
    <Router>
      <Navbar handleLogoutSubmit={handleLogoutSubmit}/>
      <Container>
        <Switch>
          <Route exact path={["/"]}>
            <Home />
          </Route>
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login
                {...props}
                userState={userState}
                setUserState={setUserState}
              />
            )}
          />

          <Route
            exact
            path="/signup"
            render={(props) => (
              <Signup {...props} authenticate={authenticate} user={userState} />
            )}
          />
          <ProtectedRoute exact path={["/", "/user"]}>
            <User {...userState} />
          </ProtectedRoute>
          {/* <ProtectedRoute exact path={["/user/:id"]}>
            <User {...userState} />
          </ProtectedRoute> */}

          <ProtectedRoute exact path={["/", "/movies/:id"]}>
            <Movie {...userState} />
          </ProtectedRoute>
          <ProtectedRoute exact path={["/group"]}>
            <Group {...userState} />
          </ProtectedRoute>
          <Route component={NoMatch} />
        </Switch>
      </Container>
      {userState.email ? <Redirect to="/user" /> : <></>}
      <Footer />
    </Router>
  );
}

export default App;
