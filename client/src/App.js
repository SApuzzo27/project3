import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Groups from "./pages/Groups";
import Other from "./pages/Other";


function App() {
  return (
    <>
    <div className="App"> 
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Groups" component={Groups} />
          <Route path="/Other" component={Other} />
          
        </Switch>
      </Router>
      </div>
    </>
  );
}

export default App;
