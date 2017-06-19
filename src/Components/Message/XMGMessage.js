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


export default class Thome extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigate('Thome')}
        >
          <Text style={styles.welcome}>
          Message
        </Text>
        </TouchableOpacity>
        <View style = {styles.test1}>
          <Text style={{backgroundColor:'yellow'}}>hahahh</Text>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  test1:{
    width:ScreenWidth*0.8,
    backgroundColor:'red',
  }
});

//输出组件类
module.exports = Thome;
