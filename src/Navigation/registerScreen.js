/*
This allowws for scalling as screens get to grow

*/
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import store from '../Redux/Store/index';
import App from '../../App';
import Home from '../Container/Home/index';
import Login from '../Container/Auth/login';
import RootComponent from './root';

export const screensRegistartion = () => {
  Navigation.registerComponent(
    'App',
    () => props =>
      (
        <Provider store={store}>
          <RootComponent PassedComponent={App} componentProps={props} />
        </Provider>
      ),
    () => App,
  );

  Navigation.registerComponent(
    'Home',
    () => props =>
      (
        <Provider store={store}>
          <RootComponent PassedComponent={Home} componentProps={props} />
        </Provider>
      ),
    () => Home,
  );

  Navigation.registerComponent(
    'Login',
    () => props =>
      (
        <Provider store={store}>
          <RootComponent PassedComponent={Login} componentProps={props} />
        </Provider>
      ),
    () => Login,
  );
};
