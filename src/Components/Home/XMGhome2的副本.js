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
  ListView
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import {connect} from 'react-redux'
import HomeDetail from './XMGHomeDetail'
import {fetchAgency} from '../../actions/AgencyAction'

import Collection from '../Collection/XMGCollection.js'
import Message from '../Message/XMGMessage.js' 
import Mypage from '../Mypage/XMGMypage.js' 

import AgencyPage1 from '../Agency/AgencyPage1.js' 
import AgencyPage2 from '../Agency/AgencyPage2.js'
import Activity from '../Agency/Activity.js'

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
});

 class Home2 extends Component {

static navigationOptions = {
    tabBarLabel: 'Home',
    headerStyle:{backgroundColor:'white'}

  };


      constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            selectedActivities: ds.cloneWithRows([
                {"title": "华侨班","imagesrc":"./img/oversea.jpg"},{"title":"语言村"}
            ]),
        };
      }


  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>

          <Text>
            Home
          </Text>
      
        <TouchableOpacity
          onPress={() => navigate('AgencyPage1',{agency:'上海交大教育集团'})}
        >
          <Text>
            AgencyPage1
          </Text>
        </TouchableOpacity> 


        <TouchableOpacity
          onPress={() => navigate('AgencyPage2')}
        >
          <Text>
            AgencyPage2
          </Text>
        </TouchableOpacity> 

        <TouchableOpacity
          onPress={() => navigate('Activity')}
        >
          <Text>
            Activity
          </Text>
        </TouchableOpacity>  

      </View>
    );
  }


}


const TabbarNavigator = TabNavigator({
    Home: { screen: Home2 },
    Collection: { screen: Collection },
    Message: { screen: Message },
    Mypage: { screen: Mypage }
}, {
    initialRouteName: 'Home'
});


const AppNav = StackNavigator({
  Home: { screen: TabbarNavigator },
  AgencyPage1:{screen: AgencyPage1},
  AgencyPage2:{screen: AgencyPage2},
  Activity:{screen: Activity},
});

//输出组件类
module.exports = Home2;

AppRegistry.registerComponent('EducationMobile', () => AppNav);