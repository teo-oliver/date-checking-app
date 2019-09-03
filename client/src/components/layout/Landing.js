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
          <h2 className="title">Date Checking</h2>
          <h3 className="lead">
            Keep track of expiry dates, reduce shrinkage and organize your stock
          </h3>
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
