import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './app.tsx';

import reducers from './redux/index';

const reduxDevtools = window.devToolsExtension
  ? window.devToolsExtension()
  : () => {};

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    reduxDevtools
  )
);

console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept();
}
