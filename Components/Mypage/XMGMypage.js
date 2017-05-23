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
  View
} from 'react-native';
import Button from 'antd-mobile/lib/button';

export default class Mypage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          My Page
        </Text>
        <Button size='small' type='primary'> 点我 </Button>
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
});

//输出组件类
module.exports = Mypage;
