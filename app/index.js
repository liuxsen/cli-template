import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/app.jsx';
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept();
}
