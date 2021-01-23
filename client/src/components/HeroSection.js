import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { ButtonL } from "./HeroButton";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/popcorn.mp4" autoPlay loop muted />
      <h1>Welcome All Couch Potatoes</h1>
      <p>
        Create an Account Where You Can Be the True Movie Critic You Are - Save Movies, Review Movies, Join Groups, and Link with Link Minded Potatoes. 
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
