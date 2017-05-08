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
        backgroundColor: '#F5FCFF',
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
    },

    commonFrameStyle:{
        marginTop:10,
    },

    bigFrameStyle:{
        width:ScreenWidth*0.9,
        marginTop:20,
        borderBottomWidth:0.5,
    }


});

export default class AgencyPage extends Component {
  render() {
    return (
      <ScrollView>
            <View style={styles.container}>

          {/*图片轮播*/}
        <Swiper
            style={styles.swiperStyle}
            height={200}
        >
          <Image source={require('./img/1.png')} style={styles.swiperPicStyle}/>
          <Image source={require('./img/2.png')} style={styles.swiperPicStyle}/>
        </Swiper>


        <View style={styles.bigFrameStyle}>
          {/*标题界面*/}
            <View style={styles.commonFrameStyle}>

                <View style={styles.titleFrameStyle}>
                    <View>
                        <Text>
                            上海交大教育集团
                        </Text>

                        <Text>
                            上海市徐汇区番禺路677号三楼A座
                        </Text>
                    </View>

                    {/*是否验证*/}
                    <View>
                        <Text>
                            已验证
                        </Text>
                    </View>

                </View>

            </View>

          {/*机构描述*/}
            <View style={styles.commonFrameStyle}>
                <Text>
                    Proin malesuada ipsum ac convallis dignissim. Mauris quis tempus velit, ut gravida justo. In imperdiet odio malesuada tortor placerat pulvinar. Praesent dignissim tortor sit amet urna porta, ac efficitur odio efficitur. Maecenas posuere vestibulum rhoncus. Proin consequat convallis risus nec condimentum. Ut aliquam, turpis ac efficitur fringilla, odio velit volutpat ipsum, id facilisis lorem dolor bibendum orci. Quisque consectetur justo vitae maximus consequat.

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

    );
  }
}


//输出类
module.exports = AgencyPage;



