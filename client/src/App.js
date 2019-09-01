import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Table from './components/table/Table';
import ItemInputForm from './components/itemInputForm/ItemInputForm';
import Landing from './components/layout/Landing';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <main>
          <Route exact path="/" component={Landing} />
          <Route exact path="/table" component={Navbar} />
          <Route exact path="/table" component={ItemInputForm} />
          <Route exact path="/table" component={Table} />
        </main>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
