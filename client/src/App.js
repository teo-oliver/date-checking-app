import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Table from './components/table/Table';
import ItemInputForm from './components/itemInputForm/ItemInputForm';

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
        <Navbar />
        <main style={{ marginTop: '64px' }}>
          <Route exact path="/" component={ItemInputForm} />
          <Route exact path="/" component={Table} />
        </main>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
