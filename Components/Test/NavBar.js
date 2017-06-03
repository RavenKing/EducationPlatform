


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Alert
} from 'react-native';

import {NativeRouter,Route,Link} from 'react-router-native';

 class Message extends Component {

  render() {
   
    return (
    
<View id="nav bar" style={styles.nav}>
        <Link to="/" style={styles.container}> 
        <Text>Home Page</Text>
        </Link>
   	  <Link to="/about" style={styles.container}> 
        <Text>Good Page</Text>
        </Link>    
         <Link to="/good" style={styles.container}> 
        <Text>about Page</Text>
        </Link>
       	</View>
    )
    ;
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

export default Message;
