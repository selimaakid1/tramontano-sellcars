import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './Store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
