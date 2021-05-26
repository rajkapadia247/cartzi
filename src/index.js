import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import configureStore from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}

