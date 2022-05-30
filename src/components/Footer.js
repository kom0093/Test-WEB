import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css'

function Footer() {
  return <div className='footer-container'>
      <section className="footer-subscription" id="footer">
          <p className="footer-subscription-heading">
              Join the adventure newsletter to receive our best
          </p>
          <p className="footer-subscription-text">
              You can unsubscribe any time.
          </p>
          <div className="input-areas">
              <form>
                  <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                  <Button buttonStyle='btn--outline' className="subs">Subscribe</Button>
              </form>
          </div>
      </section>
      <div className="footer-links">
          <div className="footer-link-wrapper">
            <div class='footer-link-items'>
                <h2>About Us</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/'>Testimonials</Link>
                <Link to='/'>Careers</Link>
                <Link to='/'>Investors</Link>
                <Link to='/'>Terms of Service</Link>
            </div>
            <div class='footer-link-items'>
                <h2>Contact Us</h2>
                <Link to='/'>Contact</Link>
                <Link to='/'>Support</Link>
                <Link to='/'>Destinations</Link>
                <Link to='/'>Sponsorships</Link>
            </div>
          </div>
            <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
                <h2>Videos</h2>
                <Link to='/'>Submit Video</Link>
                <Link to='/'>Ambassadors</Link>
                <Link to='/'>Agency</Link>
                <Link to='/'>Influencer</Link>
            </div>
            <div class='footer-link-items'>
                <h2>Social Media</h2>
                <Link to='/'>Instagram</Link>
                <Link to='/'>Facebook</Link>
                <Link to='/'>Youtube</Link>
                <Link to='/'>Twitter</Link>
            </div>
            </div>
      </div>
      <section className="social-media">
          <div className="social-media-wrap">
              <div className="footer-logo">
                  <Link to='/' className="social-logo">
                      TEST <i className="fab fa-typo3"></i>
                  </Link>
              </div>
              <small className="website-rights">TEST © 2022</small>
              <div class="social-icons">
              <a href ='https://www.facebook.com/dkominek' target='blank' aria-label='Facebook' className="social-icon-link-facebook">
                  <i className="fab fa-facebook-f"></i>
              </a>
              <a href ='https://www.instagram.com/daniel_kominek/?hl=cs' target='blank' aria-label='Instagram' className="social-icon-link-instagram">
                  <i className="fab fa-instagram"></i>
              </a>
              <a href ='https://twitter.com/KominekDaniel' target='blank' aria-label='Twitter' className="social-icon-link-twitter">
                  <i className="fab fa-twitter"></i>
              </a>
              <a href ='https://www.youtube.com/channel/UCi4X5SEsgViedPZ5rXZ3mZQ' target='blank' aria-label='Youtube' className="social-icon-link-youtube">
                  <i className="fab fa-youtube"></i>
              </a>
              <a href ='https://open.spotify.com/user/21dnao3xtrwfrfw5fvhm2nzcq' target='blank' aria-label='Spotify' className="social-icon-link-spotify">
                  <i className="fab fa-spotify"></i>
              </a>
              </div>
          </div>
      </section>
    </div>;
}

export default Footer;
