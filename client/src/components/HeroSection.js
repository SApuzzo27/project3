import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { ButtonL } from "./HeroButton";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Couch Potatos</h1>
      <p>
        Welcome to the best movie club where you can find new interest in movies
        and more.
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Sign up
        </Button>
        <ButtonL
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          Login <i className="far fa-play-circle" />
        </ButtonL>
      </div>
    </div>
  );
}

export default HeroSection;
