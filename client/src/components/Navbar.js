import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          <a href="/">DateCheck</a>
        </div>
        <div className="toolbar__navigation-items">
          <ul>
            <li>
              <a href="/">January</a>
            </li>

            <li>
              <a href="/">February</a>
            </li>

            <li>
              <a href="/">March</a>
            </li>

            <li>
              <a href="/">April</a>
            </li>

            <li>
              <a href="/">May</a>
            </li>

            <li>
              <a href="/">June</a>
            </li>

            <li>
              <a href="/">July</a>
            </li>

            <li>
              <a href="/">August</a>
            </li>

            <li>
              <a href="/">September</a>
            </li>

            <li>
              <a href="/">October</a>
            </li>

            <li>
              <a href="/">November</a>
            </li>

            <li>
              <a href="/">December</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
