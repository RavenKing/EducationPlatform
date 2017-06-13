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
    
    navbarStyle:{

        height: 55,
        width: ScreenWidth,
        //borderBottomWidth:0.5,
        //borderBottomColor:'#909090',
        justifyContent:'center',
        backgroundColor:'white',
    },

    scrollViewStyle:{

    },

    scrollContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection:'column',
        //backgroundColor:'blue',
        //height:100
    },

    swiperPicStyle: {
        width: ScreenWidth,
        height:ScreenHeight*0.35,
    },

    titleFrameStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 5,
        // backgroundColor:'red'
    },

    rowFrameStyle:{
        flexDirection:'row',
        alignItems:'flex-end',
        //backgroundColor:'yellow',
    },

    bigFrameStyle:{
        width:ScreenWidth*0.85,
        marginTop:18,
        //borderBottomWidth:0.5,
        //backgroundColor:'red'
        // borderBottomWidth:1,
        // borderBottomColor:'#707070',

    },


    cellRowStyle:{
        flexDirection:'row',
        justifyContent:'space-between',

    },

});

export default class AgencyPage1 extends Component {
    
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.agency}`,
    });

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            eventDataSource: ds.cloneWithRows([
                {"title": "华侨班","imagesrc":"./img/oversea.jpg"},{"title":"语言村"}
            ]),

            schoolDataSource: ds.cloneWithRows([
                {"title":"上海帕丁顿双语学校"},{"title": "上海交大南洋中学","imagesrc":"./img/oversea.jpg"}
            ])
        };
    }

    //第三方组件：文本展开跟多的方法
    renderViewMore(onPress){
        return(
            <Text onPress={onPress} style={{color:'#F37298',fontSize: 13}}>...了解更多</Text>
        )
    }

    renderViewLess(onPress){
        return(
            <Text onPress={onPress} style={{color:'#F37298',fontSize: 13}}>隐藏</Text>
        )
    }


  render() {
        return (
            <View style={{flex:1}}>
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
                        dot={<View 
                            style={{backgroundColor:'grey', 
                            width: 5, 
                            height: 5,
                            borderRadius: 4, 
                            marginLeft: 3, 
                            marginRight: 3, 
                            marginTop: 3, 
                            marginBottom: 0,}} 
                        />}
                        activeDot={
                            <View style={{backgroundColor: 'white', 
                            width: 5, 
                            height: 5, 
                            borderRadius: 4, 
                            marginLeft: 3, 
                            marginRight: 3, 
                            marginTop: 3, 
                            marginBottom: 0,}} 
                        />}

                    >
                        <Image source={require('../../../img/5.jpeg')} style={styles.swiperPicStyle}/>
                        <Image source={require('../../../img/6.jpeg')} style={styles.swiperPicStyle}/>
                        <Image source={require('../../../img/7.jpeg')} style={styles.swiperPicStyle}/>
                    </Swiper>

                    
                    {/*标题框*/}
                    <View style={styles.bigFrameStyle}>
                        {/*大标题*/}
                        <Text style={{fontWeight: 'bold', color:'#2d2d2d',fontSize: 26, marginBottom:6,}}>
                            上海交大教育集团
                        </Text>
                        {/*地点信息*/}
                        <View style={styles.rowFrameStyle}>
                            <Image source={require('../../../img/location4.png')} style={{height:18,width:18,marginRight:12}}/>
                            <Text style={{fontSize: 13, color:'#707070'}}>
                                上海市徐汇区番禺路677号三楼A座
                            </Text>
                        </View>
                        
                        {/*分割线*/}
                        <Image source={require('../../../img/string.png')} style={{height:1,width:ScreenWidth*0.85,marginTop:18}}/>
                    </View>


                    
                    {/*简介框*/}
                    <View style={styles.bigFrameStyle}>
                        <Text style={{color:'#3c3c3c',fontSize: 16, marginBottom:14}}>
                            机构简介：
                        </Text>
                        <ViewMoreText
                            numberOfLines={6}
                            renderViewMore={this.renderViewMore}
                            renderViewLess={this.renderViewLess}
                        >
                            <Text style={{fontSize: 13, color:'#707070', lineHeight: 20}}>
                                为打造社会化教育企业平台，充分发挥百年交大在教育、人才、技术及信息方面的资源和优势服务于社会，
                                上海交大产业集团和上海交大南洋股份有限公司于1999年8月4日合资成立上海交通大学教育（集团）有限公司，
                                公司注册资本1亿5千万元，是上海交通大学对外发展终身教育事业的独立法人经济实体。
                                教育集团现有总资产3亿3千万元；净资产1亿7千万元。
                            </Text>
                        </ViewMoreText>
                        {/*分割线*/}
                        <Image source={require('../../../img/string.png')} style={{height:1,width:ScreenWidth*0.85,marginTop:18}}/>
                    </View>


                    {/*精选课程活动*/}
                    <View style={styles.bigFrameStyle}>
                        <Text style={{color:'#3c3c3c',fontSize: 16, marginBottom:20,}}>
                            精选课程活动：
                        </Text>


                        <View style={styles.container}>
                            <ListView
                                dataSource={this.state.eventDataSource}
                                renderRow={this.renderEventRow}
                                horizontal={true}
                            />
                        </View>
                        {/*分割线*/}
                        <Image source={require('../../../img/string.png')} style={{height:1,width:ScreenWidth*0.85,marginTop:18}}/>
                    </View>

                    {/*下属学校*/}
                    <View style={styles.bigFrameStyle}>
                        <Text style={{color:'#3c3c3c',fontSize: 16, marginBottom:20,}}>
                            下属学校：
                        </Text>

                        <View style={styles.container}>
                            <ListView
                                dataSource={this.state.schoolDataSource}
                                renderRow={this.renderEventRow}
                                horizontal={true}
                            />
                        </View>
                        {/*分割线*/}
                        <Image source={require('../../../img/string.png')} style={{height:1,width:ScreenWidth*0.85,marginTop:18}}/>
                    </View>


                    {/*网站*/}
                    <TouchableOpacity>
                        <View style={styles.bigFrameStyle}>
                            <View style={styles.cellRowStyle}>
                                <Text style={{color:'#3c3c3c',fontSize: 16}}>官方网站</Text>
                                <Text style={{color:'#F37298',fontSize: 16}}>查看</Text>
                            </View>
                            
                            <Text style={{fontSize: 13, color:'#707070', lineHeight: 20}}>
                                http://www.edu-sjtu.cn
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/*分割线*/}
                    <Image source={require('../../../img/string.png')} style={{height:1,width:ScreenWidth*0.85,marginTop:18}}/>

                    {/*电话号码*/}
                    <TouchableOpacity>
                        <View style={styles.bigFrameStyle}>
                            <View style={styles.cellRowStyle}>
                                <Text style={{color:'#3c3c3c',fontSize: 16}}>联系电话</Text>
                                <Text style={{color:'#F37298',fontSize: 16}}>致电</Text>
                            </View>
                            
                            <Text style={{fontSize: 13, color:'#707070', lineHeight: 20}}>
                                021-66666666
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/*分割线*/}
                    <Image source={require('../../../img/string.png')} style={{height:1,width:ScreenWidth*0.85,marginTop:18}}/>
                    


                    {/*垫底View，为了让最后的组件和底部导航栏有一些间隙，是个笨办法*/}
                    <View style={{height:25,width:ScreenWidth}}/>

                </ScrollView>
            </View>

                 
        );
    }

    renderEventRow(rowData,sectionID,rowID,highlightID){
        return(
          <View>
            <Image source={require('../../../img/Activities/oversea.jpg')} style={{width:80,height:120, marginBottom:5, marginRight:20}}/>
            <Text style={{fontWeight: 'bold', color:'#3c3c3c',fontSize: 13,width:80,}}>
                {rowData.title}
            </Text>

          </View>
        );

    }


}


//输出类
module.exports = AgencyPage1;



