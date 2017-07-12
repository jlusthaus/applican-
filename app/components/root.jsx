import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import store from '../store/store';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider >
);

export default Root;
