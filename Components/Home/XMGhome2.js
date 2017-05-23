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
  TextInput,
  Button,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import {connect} from 'react-redux'
import HomeDetail from './XMGHomeDetail'
import {fetchAgency} from '../actions/AgencyAction'
import AgencyPage1 from '../Agency/AgencyPage1.js'
import AgencyPage2 from '../Agency/AgencyPage2.js'
import Activity from '../Agency/Activity.js'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});

 class Home2 extends Component {

  static navigationOptions = {
    title: '首页',
  };

  render() {

    return (
      <View style={styles.container}>
          <Text>
            Home
          </Text>

        <TouchableOpacity
          onPress={() => {this.pushToDetail(AgencyPage1)}}
        >
          <Text>
            AgencyPage1
          </Text>
        </TouchableOpacity> 

        <TouchableOpacity
          onPress={() => {this.pushToDetail(AgencyPage2)}}
        >
          <Text>
            AgencyPage2
          </Text>
        </TouchableOpacity> 

        <TouchableOpacity
          onPress={() => {this.pushToDetail(Activity)}}
        >
          <Text>
            Activity
          </Text>
        </TouchableOpacity>  


      </View>
    );
  }
  
  //跳转的二级界面
  pushToDetail(page){
    this.props.navigator.push({
      component:page
    })
  }

}


//输出组件类
module.exports = Home2;