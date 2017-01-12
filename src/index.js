import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Router, browserHistory } from 'react-router';
import reducers from './reducers';

import FileReader from '../middleware/fileReader';
import Api from '../middleware/api';
import Redirect from '../middleware/redirect';

import routes from './routes';
import promise from 'redux-promise';

const createStoreWithMiddleware = createStore(
  reducers,
  {},
  applyMiddleware(thunk, promise, FileReader, Api, Redirect)
);

render(
  <Provider store={createStoreWithMiddleware}>
      <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.querySelector('.container')
);
