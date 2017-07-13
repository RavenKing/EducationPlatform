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
  Image,
  TextInput,
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

export default class SearchPage extends Component {





  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.bigFrame}>
          <View
            style={{
              width:0.95*ScreenWidth,
              height:0.5*ScreenWidth,
              //backgroundColor:'red',
            }}
          >

        {/*----------------搜索栏第一行--------------------*/}
                        <View
                          style={{
                            flex:1,
                            //backgroundColor:'red',
                            //justifyContent:'center',
                            alignItems:'center',
                            flexDirection:'row',
                          }}
                        >
                          <Image
                            source={require('../../../img/cross.png')}
                            style={{
                              width:ScreenWidth*0.08,
                              height:ScreenWidth*0.08,
                              marginRight:0.02*ScreenWidth,
                            }}
                          />

                          <View
                            style={{
                              //backgroundColor:'#e8eaec',
                              width:ScreenWidth*0.95-ScreenWidth*0.1-ScreenWidth*0.2,
                              height:ScreenWidth*0.10,
                              borderRadius:4,                
                            }}
                          >
                            <TextInput
                              style={{
                                //backgroundColor:'#e8eaec',
                                //width:ScreenWidth*0.95-ScreenWidth*0.08,
                                height:ScreenWidth*0.10,
                                //borderBottomWidth:0.1
                                //borderRadius:4,                  
                              }}
                              placeholder="活动名称或任意关键字"
                              ref={'searchingText'}
                            >
                            </TextInput>  
                          </View>
                          
                          <TouchableOpacity
                            onPress={()=> this.refs.searchingText.value='null'}
                          >
                          <View
                            style={{
                              marginLeft:0.02*ScreenWidth,
                              width:ScreenWidth*0.18,
                              height:ScreenWidth*0.10,
                              justifyContent:'center',
                              alignItems:'center',
                            }}
                          >
                            <Text
                              style={{
                                fontSize:17,
                                //color:'#c8c7cc'
                              }}
                            >
                              清除
                            </Text>
                          </View>              
                          </TouchableOpacity>
                        </View>          
        

        {/*----------------搜索栏第二行--------------------*/}
            <View
              style={{
                flex:1,
                //backgroundColor:'red',
                justifyContent:'center'
              }}
            >
              <View
                style={{
                  backgroundColor:'#e8eaec',
                  width:ScreenWidth*0.95,
                  height:ScreenWidth*0.10,
                  borderRadius:4,                  
                }}
              >
              </View>
            </View>



            <View
              style={{
                flex:1,
                //backgroundColor:'blue',
                justifyContent:'center'
              }}
            >
              <View
                style={{
                  backgroundColor:'#e8eaec',
                  width:ScreenWidth*0.95,
                  height:ScreenWidth*0.10,
                  borderRadius:4,                  
                }}
              >
              </View>
            </View>

        

        {/*----------------搜索栏第三行--------------------*/}
            <View
              style={{
                flex:1,
                //backgroundColor:'yellow',
                justifyContent:'center'
              }}
            >
              <View
                style={{
                  backgroundColor:'#e8eaec',
                  width:ScreenWidth*0.95,
                  height:ScreenWidth*0.10,
                  borderRadius:4,                  
                }}
              >
              </View>
            </View>


          </View>

          
          <View
            style={{
              flex:1,
              backgroundColor:'blue',
            }}
          >

          </View>
        </View>  
      </View>
    );
  }
}

//输出组件类
module.exports = SearchPage;
