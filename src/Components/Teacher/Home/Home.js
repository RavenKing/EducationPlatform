

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Thome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          我是新界面
        </Text>

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
module.exports = Thome;
