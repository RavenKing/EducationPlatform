import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/Store';
import {NativeRouter,Route,Link} from 'react-router-native';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Layout from './Layout';

import About from './Message/Message';
import Good from './Test/Test';
import NavBar from './Test/NavBar'
const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
      <NativeRouter>
      <View style={{marginTop:25}}>

     	<Route path="/shit" component={Layout} />
        <Route path="/good" component={Good} />
     	<Route path="/about" component={About}/>
     	       	<NavBar />

</View>
      </NativeRouter>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
	nav:{
		flexDirection:'row'

	},
  container: {
  	flex:1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});