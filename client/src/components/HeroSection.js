import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import signup from '../pages/Signup'
import login from '../pages/Login'

function HeroSection() {
  return (
  
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Couch Potatoes</h1>
      <p>Welcome to the best movie club where you can find new interest in movies and more.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick component={signup}
        >
          Sign Up
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick component={login}
        >
          Log In <i className='far fa-play-circle' />
        </Button> 
      
      </div>
    </div>
  );
}

export default HeroSection;
