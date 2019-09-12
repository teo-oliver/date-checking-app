import React, { useEffect } from 'react';
import './Navbar.css';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user';

const Navbar = props => {
  useEffect(() => {
    props.fetchUser();
  }, []);

  console.log(props.auth);

  const renderContent = () => {
    switch (props.auth) {
      case null:
        //Return a spinner on the main app
        return;
      case false:
        return <a href="/api/auth/google">Login with Google</a>;
      default:
        return <a href="/api/auth/logout">Logout</a>;
    }
  };

  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          <a href="/">Date Checking</a>
        </div>
        <div className="toolbar__navigation-items">
          <ul>
            <li>
              <a href="/" />
            </li>
            <li>{renderContent()}</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(Navbar);
