import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './app';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const mountNode = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, mountNode);
registerServiceWorker();
