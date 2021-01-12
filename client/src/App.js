import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "./components/Login.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Groups from "./pages/Groups";
import Other from "./pages/Other";
import SignUp from "./components/SignUpComponents";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Groups" component={Groups} />
          <Route path="/Other" component={Other} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
