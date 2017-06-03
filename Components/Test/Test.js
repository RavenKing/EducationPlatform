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

import {Redirect,withRouter} from "react-router-native";
 class Message extends Component {

  login(){



  }


  render() {
    console.log(this.props);
     const ShitButton =      <TouchableHighlight onPress={
                ()=> {
                 this.props.history.push("/about")
                  }
            }>
                <Text>Button</Text>
            </TouchableHighlight>
      

    return (
      <View>
        <Text >
          Tgkl;s
        </Text>
        {ShitButton}
      </View>
    )
    ;
  }
}



export default withRouter(Message);