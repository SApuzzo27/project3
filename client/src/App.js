import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./pages/User";
import Groups from "./pages/Groups";
import Other from "./pages/Other";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/user" exact component={User} />
            <Route path="/groups" component={Groups} />
            <Route path="/other" component={Other} />
          </Switch>
          <Footer/>
        </Router>
      </div>
    </>
  );
}

export default App;
