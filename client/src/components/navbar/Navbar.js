import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          <a href="/">Inventory - Date Checking</a>
        </div>
        {/* <div className="toolbar__navigation-items">
          <ul>
            <li>
              <a href="/" />
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
