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
  Image,
  ScrollView,
  ListView,
  TouchableOpacity,
} from 'react-native';

import PopupDialog, { SlideAnimation,ScaleAnimation, DefaultAnimation }from 'react-native-popup-dialog';
import StarRating from 'react-native-star-rating';
import Button from 'apsl-react-native-button';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
  
/*-------------------框框-----------------------*/
  rootFrame:{
      flex:1,
      backgroundColor:'white',
      alignItems:'center',
  },

  scrollContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    //flexDirection:'column',
  },
  scrollViewStyle:{
    backgroundColor: 'transparent',
    flex:1,
  },


});


//信息卡颜色
var regInfo_COLORS = [
  '#2679bf',
  '#2e96b3',
  '#ed283c',
  '#f09137',
  '#7395c2',
  '#df4a4c',
  '#cd274d',

]

export default class Mypage extends Component {
      

      constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            regInfo: ds.cloneWithRows([
                {"name": "Harvey Sheng","height":"180","weight":"78","IDNo":"310***********0618" },
                {"name": "王小宝", "height":"173","weight":"60","IDNo":"310***********0619" },
                {"name": "王宝宝", "height":"173","weight":"60","IDNo":"310***********0628" },
                {"name": "王宝宝", "height":"173","weight":"60","IDNo":"310***********0628" },
                {"name": "王宝宝", "height":"173","weight":"60","IDNo":"310***********0628" },
                {"name": "王宝宝", "height":"173","weight":"60","IDNo":"310***********0628" },
                {"name": "王宝宝", "height":"173","weight":"60","IDNo":"310***********0628" },
                {"name": "王宝宝", "height":"173","weight":"60","IDNo":"310***********0628" },

            ]),
        };
      }

      renderRegInfo(rowData,sectionID,rowID,highlightID){
        var x = (parseInt(rowID)+1)%7
        var color = regInfo_COLORS[x]
        console.log(x)
        return(
            <View
              style={{
                marginTop:ScreenWidth*0.01,
                marginBottom:ScreenWidth*0.01,
                width:ScreenWidth*0.9,
                height:ScreenWidth*0.3,
                backgroundColor:color,
                borderRadius:ScreenWidth*0.28/10,
                alignItems:'center',
                justifyContent:'center',
              }}
            >
              <View
                style={{
                  width:ScreenWidth*0.8,
                  height:ScreenWidth*0.3,
                  //backgroundColor:'#f09137',
                  //borderRadius:ScreenWidth*0.28/10,
                  //alignItems:'center',
                  //justifyContent:'center',
                  flexDirection:'row'
                }}              
              >


                <View
                  style={{
                    width:ScreenWidth*0.8/3,
                    height:ScreenWidth*0.3,
                    //backgroundColor:'blue',
                    //borderRadius:ScreenWidth*0.28/10,
                    //alignItems:'center',
                    //justifyContent:'center',
                  }}              
                >
              {/*--------------头像---------------*/}
                  <View
                    style={{
                      width:ScreenWidth*0.8/3,
                      height:ScreenWidth*0.22,
                      //backgroundColor:'red',
                      alignItems:'center',
                      justifyContent:'center',

                    }}
                  >
                    <Image
                      source={require('../../../img/personalInfo/face.jpg')}
                      style={{
                        height:0.2*ScreenWidth,
                        width:0.2*ScreenWidth,
                        borderRadius:0.2*ScreenWidth/2,
                      }}
                    />                  
                  </View>

              {/*--------------姓名---------------*/}
                  <View
                    style={{
                      width:ScreenWidth*0.8/3,
                      height:ScreenWidth*0.08,
                      //backgroundColor:'yellow',
                      alignItems:'center',
                      justifyContent:'center',

                    }}
                  >
                    <Text
                      style={{
                        color:'white',
                        fontSize:ScreenWidth*0.08/1.8,
                        fontWeight:'bold'
                      }}
                      numberOfLines={1}
                    >
                      {rowData.name}
                    </Text>                 
                  </View>
                </View>



              {/*--------------身高体重身份栏---------------*/}
                <View
                  style={{
                    width:ScreenWidth*0.8/3,
                    height:ScreenWidth*0.3,
                    //backgroundColor:'blue',
                    //borderRadius:ScreenWidth*0.28/10,
                    //alignItems:'center',
                    //justifyContent:'center',
                  }}              
                >
              {/*--------------身高体重---------------*/}
                  <View
                    style={{
                      width:ScreenWidth*0.8/3*2,
                      height:ScreenWidth*0.22,
                      //backgroundColor:'red',
                      alignItems:'center',
                      justifyContent:'center',

                    }}
                  >
                    <Text
                      style={{
                        color:'white',
                        fontSize:ScreenWidth*0.085,
                        fontWeight:'100',
                      }}
                      numberOfLines={1}
                    >
                      {rowData.height}cm | {rowData.weight}kg
                    </Text>                  
                  </View>

              {/*--------------身份证---------------*/}
                  <View
                    style={{
                      width:ScreenWidth*0.8/3*2,
                      height:ScreenWidth*0.08,
                      //backgroundColor:'yellow',
                      alignItems:'center',
                      justifyContent:'center',

                    }}
                  >
                    <Text
                      style={{
                        color:'white',
                        fontSize:ScreenWidth*0.08/3*2,
                        fontWeight:'100',
                      }}
                      numberOfLines={1}
                    >
                      {rowData.IDNo}
                    </Text>                 
                  </View>

                </View>

              </View>

            </View>
        );
      }






  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.rootFrame}>

    
  {/*--------------------头像姓名性别----------------*/}
          <View
            style={{
              width: ScreenWidth,
              height:ScreenWidth*1/2,
              //backgroundColor:'red',
              alignItems:'center',
            }}
          >     
            <View
              style={{
                height:1/4*ScreenWidth,
                width:ScreenWidth,
                //backgroundColor:'blue',
                alignItems:'center',
                justifyContent:'center',
              }}
            >
              <Image 
                source = {require('../../../img/personalInfo/face.jpg')}
                style = {{
                  width:0.2*ScreenWidth,
                  height:0.2*ScreenWidth,
                  borderRadius:0.2*ScreenWidth/2,
                }}
              />

            </View>  

                <View
                  style={{
                    height:1/8*ScreenWidth,
                    width:ScreenWidth,
                    alignItems:'center',
                    justifyContent:'center',
                    //backgroundColor:'red',
                  }}
                >
                  <Text
                    style={{
                      fontSize:30,
                      fontWeight:'200',
                    }}
                  >
                    Harvey
                  </Text>
                </View>


                <View
                  style={{
                    height:1/8*ScreenWidth,
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center',
                    //backgroundColor:'blue',
                  }}
                >
                  <Text
                    style={{
                      fontSize:20,
                      fontWeight:'100',
                      color:'#8d8d8d',
                    }}
                  >
                      性别
                  </Text>
                  <Image 
                    source = {require('../../../img/personalInfo/male.png')}
                    style = {{
                      width:0.06*ScreenWidth,
                      height:0.06*ScreenWidth,
                      marginLeft:5,
                    }}
                  />
                </View>                
          </View>



 {/*--------------------课程年龄偏好----------------*/}  

          <View
            style={{
              height:1/6*ScreenWidth,
              width:ScreenWidth,
              //backgroundColor:'red',
              alignItems:'center',
              marginTop:ScreenWidth/20,
            }}
          >
            <View
              style={{
                height:1/12*ScreenWidth,
                width:ScreenWidth*0.5,
                //backgroundColor:'blue',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'row',             
              }}
            >
              <Text
                style={{
                  fontSize:20,
                  fontWeight:'200',
                }}
              >
                课程年龄偏好
              </Text>
              <TouchableOpacity>
                <Image 
                  source={require('../../../img/Buttons/edit.png')}
                  style={{
                    height:0.05*ScreenWidth,
                    width:0.05*ScreenWidth,
                    marginLeft:10,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                height:1/12*ScreenWidth,
                width:ScreenWidth*0.5,
                //backgroundColor:'red',
                //borderBottomWidth:3,
                alignItems:'center',
                justifyContent:'center',               
              }}
            >
              <Text
                style={{
                  fontSize:20,
                  fontWeight:'100',
                  color:'#8d8d8d',
                }}
              >
                12-15周岁
              </Text>
            </View>
          </View>
            
{/*----------------------常用报名信息----------------------*/}
          <View
            style={{
              height:1/12*ScreenWidth,
              width:ScreenWidth*0.9,
              marginTop:ScreenWidth/20,
              //backgroundColor:'blue',
              alignItems:'center',
              justifyContent:'center',
              flexDirection:'row',             
            }}
          >
            <Text
              style={{
                fontSize:20,
                fontWeight:'200',
              }}
            >
              常用报名信息
            </Text>

            <TouchableOpacity>
              <Image 
                source={require('../../../img/Buttons/plus2.png')}
                style={{
                  height:0.05*ScreenWidth,
                  width:0.05*ScreenWidth,
                  marginLeft:10,
                }}
              />
            </TouchableOpacity>
          </View>
        

          <ListView
            dataSource={this.state.regInfo}
            renderRow={this.renderRegInfo}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
          />
        </View>
    );
  }
}


//输出组件类
module.exports = Mypage;
