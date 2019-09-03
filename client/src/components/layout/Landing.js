import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import './Landing.css';

const Landing = () => {
  return (
    <section className="landing">
      <div className="unsplash-badge">
        <a
          className="unsplash-link"
          href="https://unsplash.com/@kimbroughdaniels?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
          target="_blank"
          rel="noopener noreferrer"
          title="Download free do whatever you want high-resolution photos from Kim Daniels"
        >
          <span className="unsplash-span-link">
            <svg
              className="unsplash-svg-style"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <title>unsplash-logo</title>
              <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
            </svg>
          </span>
          <span className="unsplash-author">Kim Daniels</span>
        </a>
      </div>
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="title">Date Checking App</h1>
          <h2 className="lead">
            Keep track of expiry dates, reduce shrinkage and organize your stock
          </h2>
          <div className="organize-buttons">
            <Link to="/table" className="button-big">
              Try it now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
