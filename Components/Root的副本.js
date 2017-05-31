import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/Store';
import { addNavigationHelpers } from "react-navigation";
import { AppNavigator } from './routers/index';
import App from './Main/XMGMain';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}