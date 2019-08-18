import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Table from './components/table/Table';
import ItemInputForm from './components/itemInputForm/ItemInputForm';

//TEST COMPONENT
import TestCompAPI from './components/tests/TestCompApi';
import TestComp from './components/tests/TestComp';

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
        <main>
          <Route exact path="/" component={ItemInputForm} />
          <Route exact path="/" component={Table} />
          <Route exact path="/testAPI" component={TestCompAPI} />
          <Route exact path="/test" component={TestComp} />
        </main>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
