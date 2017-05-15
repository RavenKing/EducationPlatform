import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Slider,
  ScrollView,
  ListView,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper2';
import ViewMoreText from 'react-native-view-more-text';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

/*---------------框框Style--------------------*/
    rootFrameStyle:{
        flex:1,
        backgroundColor:'white'
    },

    navbarStyle:{

        height: 55,
        width: ScreenWidth,
        //borderBottomWidth:0.5,
        //borderBottomColor:'#909090',
        justifyContent:'center',
        backgroundColor:'white',
    },

    scrollContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection:'column',
    },

    titleFrameStyle:{
        width:ScreenWidth*0.85,
        marginTop:18,
        //backgroundColor:'red',

    },

    bigFrameStyle:{
        width:ScreenWidth*0.85,

    },

    mainInfoRowFrameStyle:{
        flexDirection:'row',
        width:ScreenWidth*0.85,
        alignItems:'center',
        marginBottom:12,
    },

    mainInfoTitleFrameStyle:{
        width:ScreenWidth*0.85,
    },



/*------------------------分割线Style-------------------------*/  
    lineStyle:{
        height:1,
        width:ScreenWidth*0.85,
        marginTop:20,
        marginBottom:20,
    },

/*------------------------文本Style-------------------------*/

    bigTitleStyle:{
        fontWeight: 'bold', 
        color:'#2d2d2d',
        fontSize: 26, 
        marginBottom:8,
        //backgroundColor:'blue',
    },

    subTitleStyle:{
        fontSize: 14, 
        color:'#656565',
    },
    
    mainInfoTextStyle:{
        marginLeft:12,
        fontSize: 14, 
        color:'#656565', 
    },


/*------------------------图片Style-------------------------*/

    swiperPicStyle: {
        width: ScreenWidth,
        height:ScreenHeight*0.35,
    },

    mainInfoIconStyle:{
        height:15,
        width:15,
    },


/*------------------新旧Style分割线----------------------*/
    cellRowStyle:{
        flexDirection:'row',
        justifyContent:'space-between',

    },

});



export default class Activity extends Component {

  render() {
    return (
	    <View style={styles.rootFrameStyle}>
            {/*导航栏*/}
            <View style={styles.navbarStyle}>
                <TouchableOpacity
                    onPress={() => {this.props.navigator.pop()}}
                >
                    <Image 
                    source={require('../../img/tabIcon/back.png')} 
                    style={{
                        height:20,
                        width:20,
                        marginLeft:10,
                        marginTop:15
                        }}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView 
                    contentContainerStyle={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}
                    style={styles.scrollViewStyle}
                >

                {/*图片轮播*/}
                    <Swiper
                        style={styles.swiperStyle}
                        height={ScreenHeight*0.35}
                        autoplay={true}
                        autoplayTimeout={2.6}
                        dot={
                            <View style={{
                                backgroundColor:'grey', 
                                width: 5, 
                                height: 5,
                                borderRadius: 4, 
                                marginLeft: 3, 
                                marginRight: 3, 
                                marginTop: 3, 
                                marginBottom: 0,}} 
                        />}
                        activeDot={
                            <View style={{
                                backgroundColor: 'white', 
                                width: 5, 
                                height: 5, 
                                borderRadius: 4, 
                                marginLeft: 3, 
                                marginRight: 3, 
                                marginTop: 3, 
                                marginBottom: 0,}} 
                        />}
                    >

                         <Image source={require('../../img/Activities/1.jpg')} style={styles.swiperPicStyle}/>
                         <Image source={require('../../img/Activities/2.jpg')} style={styles.swiperPicStyle}/>
                         <Image source={require('../../img/Activities/3.jpg')} style={styles.swiperPicStyle}/>
                         <Image source={require('../../img/Activities/4.jpg')} style={styles.swiperPicStyle}/>
                    </Swiper>


                    {/*----------------------------标题框---------------------------*/}
                    <View style={styles.titleFrameStyle}>
                        {/*大标题*/}
                        <Text style={styles.bigTitleStyle}>
                            上海交大教育集团英语体验夏令营
                        </Text>
                        {/*副标题*/}
                        <View>
                            <Text style={styles.subTitleStyle}>
                                让您的孩子体验全封闭式外教课程，让您的孩子爱上英语
                            </Text>
                        </View>
                    </View>

                    {/*---------------------------分割线------------------------------*/}
                    <Image source={require('../../img/string.png')} style={styles.lineStyle}/>

                    {/*---------------------------重要信息框---------------------------*/}
                    <View style={styles.bigFrameStyle}>
                        <View style={styles.mainInfoTitleFrameStyle}>
                            <Text>夏令营活动</Text>
                            <View style={styles.mainInfoRowFrameStyle}>
                                <Text>主办方：</Text>
                                <Text>上海交大教育集团</Text>
                            </View>   
                        </View>                        

                        <View style={styles.mainInfoRowFrameStyle}>
                            <Image source={require('../../img/actIcon/appointment.png')} style={styles.mainInfoIconStyle}/>
                            <Text style={styles.mainInfoTextStyle}>2017年5月14——2017年5月24</Text>
                        </View>

                        <View style={styles.mainInfoRowFrameStyle}>
                            <Image source={require('../../img/actIcon/time.png')} style={styles.mainInfoIconStyle}/>
                            <Text style={styles.mainInfoTextStyle}>7天封闭寄宿制</Text>
                        </View>

                        <View style={styles.mainInfoRowFrameStyle}>
                            <Image source={require('../../img/actIcon/page.png')} style={styles.mainInfoIconStyle}/>
                            <Text style={styles.mainInfoTextStyle}>提供3餐以及住宿，不包含来回交通</Text>
                        </View>
                        <View style={styles.mainInfoRowFrameStyle}>
                            <Image source={require('../../img/actIcon/dialogue.png')} style={styles.mainInfoIconStyle}/>
                            <Text style={styles.mainInfoTextStyle}>提供全英语语言环境</Text>
                        </View>
                    </View>
                    
                    {/*---------------------------分割线------------------------------*/}
                    <Image source={require('../../img/string.png')} style={styles.lineStyle}/>

            </ScrollView>    
	    </View>
    );
  }
}

//输出类
module.exports = Activity;