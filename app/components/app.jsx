import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import Landing from './landing';
import NavBar from './navbar';
import Search from './search';
import Signup from './signup';
import Login from './login';
import Dashboard from './dashboard';
import store from '../store/store';

const App = () => (
  <Provider store={store}>
    <div>
      <NavBar />
      <Route exact path="/" component={Landing} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  </Provider >
);

export default App;
