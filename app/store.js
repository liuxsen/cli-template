import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import reduxPromiseMiddleware from 'redux-promise-middleware';

import math from './reducers/mathReducer';
import user from './reducers/userReducer';

const store = createStore(
  combineReducers({ math, user }),
  applyMiddleware(createLogger(), reduxPromiseMiddleware())
);

export default store;
