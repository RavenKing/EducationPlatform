/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Home2 from './Components/Home/XMGhome2'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
//导入外部组件
import Root from './Components/Root'



export default class EducationMobile extends Component {
	
  render() {
    return (
    		<Root></Root>
      );
  }
}


AppRegistry.registerComponent('EducationMobile', () => EducationMobile);    