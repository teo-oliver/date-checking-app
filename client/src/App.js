import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';
import ItemInputForm from './components/ItemInputForm';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={ItemInputForm} />
      <Route exact path="/" component={Table} />
    </Fragment>
  </Router>
);

export default App;
