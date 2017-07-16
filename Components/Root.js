import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/Store';
import {NativeRouter,Route,Link} from 'react-router-native';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Home from './Home/Home';
import Login from './Login/Login';
import About from './Message/Message';
import Good from './Test/Test';
import Register from './Login/Register'
import requireAuth from './requireAuth';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
      <NativeRouter>
      <View style={{marginTop:25,height:640}}>
     	<Route  exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
     	<Route path="/about" component={About}/>
      </View>
      </NativeRouter>
      </Provider>
    );
  }
}