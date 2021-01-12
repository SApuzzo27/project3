import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Thank you for joining the couch potatoe family.
        </p>
        <div className='input-areas'>

        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Wilmar S.</h2>

          </div>
          <div class='footer-link-items'>
            <h2>Samantha A.</h2>

          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Cielle C.</h2>

          </div>
          <div class='footer-link-items'>
            <h2>Carlos O.</h2>

          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              CPC
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>CPC © 2020</small>
          <div class='social-icons'>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
