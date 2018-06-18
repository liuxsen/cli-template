import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';

render(<App />, document.getElementById('app'));

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept();
}
