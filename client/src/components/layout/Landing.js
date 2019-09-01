import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import './Landing.css';

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>Date Checking App</h1>
          <h2 className="lead">
            Create tables to keep track of expire dates, reduce shrinkage and
            organize your stock
          </h2>
          <div className="buttons">
            <Link to="/register" className="button">
              Sign Up
            </Link>
            <Link to="/login" className="button">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
