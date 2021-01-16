import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './helper'
import { Router, Route, Switch } from 'react-router-dom';
import {history}  from './helper';

ReactDOM.render(
  <React.StrictMode>
    <Router  history={history}>
        <Provider store={store}>
           <Route path="/" component={App} />
      </Provider>
  </Router>
  
  
  </React.StrictMode>,
  document.getElementById('root')
);


