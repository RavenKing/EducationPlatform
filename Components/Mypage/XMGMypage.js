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
import InputItem from 'antd-mobile/lib/input-item';

export default class Mypage extends Component {
  render() {
    return (
      <View style={styles.container}>
              <InputItem size='small' label="good"  type = "phone "placeholder="shit" title="nice"/>
              <Text>shwt</Text><InputItem size='small' label="good"  type = "phone "placeholder="shit" title="nice"/>
              <InputItem size='small' label="good"  type = "phone "placeholder="shit" title="nice"/>
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
