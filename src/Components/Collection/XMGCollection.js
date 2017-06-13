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
  TouchableOpacity,
  Image,
} from 'react-native';


import PopupDialog, { SlideAnimation,ScaleAnimation, DefaultAnimation }from 'react-native-popup-dialog';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default class Collection extends Component {
  static navigationOptions = {
      headerStyle:{backgroundColor:'white'},
      title:'我的收藏',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../../img/tabIcon/home.png')}
          style={[styles.icon, {tintColor: tintColor}],{width:20,height:20}}
        />
      ),
    };

    constructor(props) {
      super(props);
      this.state = {
      };
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Collection
        </Text>

        <Button
          title="Show Dialog"
          onPress={() => {
            this.popupDialog.show();
          }}
        />

        <PopupDialog
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
          dialogAnimation = { new SlideAnimation({ slideFrom: 'bottom'})}
          animationDuration = {200}
          overlayOpacity = {0.4}
          dialogStyle={{
            borderRadius:0,
            height:ScreenHeight*0.3,
            //marginBottom:-(ScreenHeight*0.66-ScreenHeight*0.3),
            alignItems:'center',
          }}
        >

          <View
            style={{
              width:ScreenWidth*0.9,
              //backgroundColor:'red',
              marginTop:20
            }}
          >
            <View
            style={{
              flexDirection:'row',
              justifyContent:'space-between',
            }}
            >

            <Text
              style={{
                fontSize:16,
              }}
            >选择一个收藏夹
            </Text>

            <Image 
              source={require('../../../img/Buttons/plus.png')}
              style={{
                height:16,
                width:16,
              }}
            />

          </View>
        </View>
        </PopupDialog>

      </View>
    );
  }
}


//输出组件类
module.exports = Collection;
