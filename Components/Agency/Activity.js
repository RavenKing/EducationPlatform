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
  Animated,
} from 'react-native';
import Swiper from 'react-native-swiper2';
import ViewMoreText from 'react-native-view-more-text';
import MapView from 'react-native-maps';

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
        //marginBottom:14,
    },



/*------------------------分割线Style-------------------------*/  
    lineStyle:{
        height:1,
        width:ScreenWidth*0.85,
        marginTop:20,
        marginBottom:20,
    },

/*------------------------文本Style-------------------------*/

    firstTitleStyle:{
        fontWeight: 'bold', 
        color:'#494948',
        fontSize: 30, 
        marginBottom:8,
        lineHeight:30,
        //backgroundColor:'blue',

    },

    subTitleStyle:{
        fontSize: 16, 
        color:'#484748',
        //lineHeight:18

    },

    secondTitleStyle:{
        fontSize: 17, 
        color:'#494948',
        marginBottom:12,
        //fontWeight:'bold',
    },
    
    mainInfoTextStyle:{
        marginLeft:12,
        fontSize: 14, 
        color:'#656565',
        //fontWeight:'bold', 
    },

    mainInfoTitleStyle:{
        fontSize: 16,
        marginBottom:10,
        //fontWeight:'bold',
        color:'#494948',
    },

    mainInfoLinkTitleStyle:{
        fontSize: 16,
        marginBottom:10,
        //fontWeight:'bold',
        color:'#49a398',
    },

    

    contentTextStyle:{
        fontSize: 13, 
        color:'#707070', 
        lineHeight: 20,
        //fontWeight:'bold',
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
    
    state: {
        xOffset: Animated,
      };

    constructor(props) {
        super(props);
        this.state = {
           yOffset: new Animated.Value(1.0)
        };
    }    

    //第三方组件：文本展开跟多的方法
    renderViewMore(onPress){
        return(
            <Text onPress={onPress} style={{color:'#F37298',fontSize: 13, lineHeight:20}}>...了解更多</Text>
        )
    }

    renderViewLess(onPress){
        return(
            <Text onPress={onPress} style={{color:'#F37298',fontSize: 13, lineHeight:20}}>...收起</Text>
        )
    }




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
                    onScroll={Animated.event(
                            [{nativeEvent: {contentOffset: {y: this.state.yOffset}}}]//把contentOffset.x绑定给this.state.xOffset
                            )}
                    scrollEventThrottle={100}//onScroll回调间隔
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
                        <Text style={styles.firstTitleStyle}>
                            上海交大教育集团英语体验夏令营
                        </Text>
                        
                        {/*----副标题不能超过18个字符----*/}
                        <Text style={styles.subTitleStyle}>
                            Shanghai 全封闭式外教课程体验
                        </Text>
                        

                    </View>

                    {/*---------------------------分割线------------------------------*/}
                    <Image source={require('../../img/string.png')} style={styles.lineStyle}/>

                    {/*---------------------------重要信息框---------------------------*/}
                    <View style={styles.bigFrameStyle}>
                        <View style={styles.mainInfoTitleFrameStyle}>
                            <View>
                                <Text style={styles.mainInfoTitleStyle}>夏令营活动</Text>
                            </View> 
                            <View style={styles.mainInfoRowFrameStyle}>
                                <Text style={styles.mainInfoTitleStyle}>主办方：</Text>
                                <Text style={styles.mainInfoLinkTitleStyle}>上海交大教育集团</Text>
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

                    



                    {/*--------------------------自定义信息----------------------------*/}
                    
                    {/*---活动内容---*/}
                    <View style={styles.bigFrameStyle}>
                        <Text style={styles.secondTitleStyle}>
                            活动内容
                        </Text>
                            
                            <ViewMoreText
                                numberOfLines={5}
                                renderViewMore={this.renderViewMore}
                                renderViewLess={this.renderViewLess}
                            >
                                <Text style={styles.contentTextStyle}>
                                    为迎接国际博物馆日，我馆将于5月16日举办“第四届少年儿童电影配音大赛暨京港澳台少年儿童电影夏令营”公益活动的启动仪式。
                                    启动仪式将邀请今年活动的指导、支持和协办单位，以及往届获奖小选手在现场展示才艺，一起拉开今年活动的序幕。
                                    少儿配音大赛面向全国的少年儿童，以电影配音的方式，搭建起少年儿童学习沟通的桥梁，重温那些喜闻乐见的电影，
                                    让影片中中华民族优秀的银幕形象深植于孩子们的心中。
                                    今年活动在前三届成功举办的基础上，将增加面向香港、澳门和台湾地区，开设电影大讲堂，发动港澳台小选手参与电影配音比赛,
                                    并选拔部分优秀港澳台小选手在北京度过电影夏令营,以增强向港澳台少年儿童传播中华民族优秀电影文化的力度。全部活动不向少年儿童收取任何费用。
                                </Text>
                        </ViewMoreText>
                    </View>

                    {/*---------------------------分割线------------------------------*/}
                    <Image source={require('../../img/string.png')} style={styles.lineStyle}/>

                        {/*---体验地点---*/}
                        <View style={styles.bigFrameStyle}>
                            <Text style={styles.secondTitleStyle}>
                                活动地点
                            </Text>

                            <ViewMoreText
                                numberOfLines={5}
                                renderViewMore={this.renderViewMore}
                                renderViewLess={this.renderViewLess}
                            >
                                <Text style={styles.contentTextStyle}>
                                    欢迎来到暑假兽医中心，我的工作室。
                                    这里，是我的梦想起飞的地方。你会看到一些我的获奖作品，和其他优秀作品的陈列。
                                    工作室位于“天山社区活动中心3楼”，可以乘坐地铁2号线到娄山关路，4号扣沿着娄山关路步行200米。
                                </Text>
                            </ViewMoreText>
                            
                            <MapView
                                style={{height:ScreenHeight*0.25,width:ScreenWidth*0.85, marginTop:10}}
                                initialRegion={{
                                  latitude: 30.89,
                                  longitude: 121.16,
                                  latitudeDelta: 0.45,
                                  longitudeDelta: 0.45,
                                }}
                            />
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