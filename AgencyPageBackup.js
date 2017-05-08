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
  Slider,
  ScrollView
} from 'react-native';
import Swiper from 'react-native-swiper';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },

    swiperStyle:{
      marginTop:10,
    },

    swiperPicStyle: {
        width: ScreenWidth,
        height:ScreenHeight*0.25
    },

    titleFrameStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 5,
        // backgroundColor:'red'
    },

    commonFrameStyle:{
        marginTop:5,
    },

    bigFrameStyle:{
        width:ScreenWidth*0.9,
        marginTop:0,
        borderBottomWidth:0.5,
    }


});

export default class AgencyPage extends Component {
  render() {
    return (


        <View style={styles.container}>
            <ScrollView>
                <View style={styles.container}>

                  {/*图片轮播*/}
                <Swiper
                    style={styles.swiperStyle}
                    height={180}
                >
                  <Image source={require('./img/1.png')} style={styles.swiperPicStyle}/>
                  <Image source={require('./img/2.png')} style={styles.swiperPicStyle}/>
                </Swiper>


                <View style={styles.bigFrameStyle}>
                  {/*标题界面*/}
                    <View style={styles.commonFrameStyle}>

                        <View style={styles.titleFrameStyle}>
                            <View>
                                <Text style={{fontFamily:'Source Han Sans CN',fontWeight: 'bold', fontSize: 27}}>
                                    上海交大教育集团
                                </Text>

                                <Text>
                                    上海市徐汇区番禺路677号三楼A座
                                </Text>
                            </View>

                            {/*是否验证*/}
                            <View style={{justifyContent:'space-between',alignItems: 'center'}}>
                                <Text>
                                    已验证
                                </Text>
                                <Image source={require('./img/Agconfirm.png')} style={{height:20,width:20}}/>
                            </View>

                        </View>

                    </View>

                  {/*机构描述*/}
                    <View style={styles.commonFrameStyle}>
                        <Text style={{marginBottom:25,fontFamily:'Avenir-Light'}}>
                            Proin malesuada ipsum ac convallis dignissim. Mauris quis tempus velit, ut gravida justo. In imperdiet odio malesuada tortor placerat pulvinar. Praesent dignissim tortor sit amet urna porta, ac efficitur odio efficitur. 

                        </Text>

                    </View>


                </View>

            <View style={styles.bigFrameStyle}>
                <Text style={{marginBottom:10,marginTop:20}}>
                    课程活动
                </Text>



                <View>

                    <View>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{marginBottom:10}}>长期课程</Text>
                            <Text>more</Text>
                        </View>

                        <Swiper

                            height={200}
                        >
                            <Image source={require('./img/1.png')} style={styles.swiperPicStyle}/>
                            <Image source={require('./img/2.png')} style={styles.swiperPicStyle}/>
                        </Swiper>

                    </View>


                </View>



            </View>

            </View>
          </ScrollView>
        </View>

    );
  }
}


//输出类
module.exports = AgencyPage;



