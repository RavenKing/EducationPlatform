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
  TouchableOpacity,
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bigFrame:{
    width:ScreenWidth*0.95,
    flex:1,
    //backgroundColor: 'red',
  },
});

export default class Contacts extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.bigFrame}>
          <Text
            style={{
              fontSize:25,
              marginTop:40,
              fontWeight:'600',
            }}
          >
            联系方式：
          </Text>
          
          <Text
            style={{
              fontSize:17,
              marginTop:30,
            }}
          >
            哈维老师：
            
          </Text>

          <Text
            style={{
              fontSize:12,
              marginTop:20,
            }}
          >
            手机：15601111111
          </Text>


          <Text
            style={{
              fontSize:12,
              marginTop:20,
            }}
          >
            微信：15601111111
          </Text>

        </View>  
      </View>
    );
  }
}

//输出组件类
module.exports = Contacts;
