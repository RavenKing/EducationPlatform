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
  ListView,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';
import StarRating from 'react-native-star-rating';

import Swiper from 'react-native-swiper2';

import {connect} from 'react-redux'
import HomeDetail from './XMGHomeDetail'
import {fetchAgency} from '../../actions/AgencyAction'

import AgencyCollection from '../Collection/AgencyCollection.js'
import ActivityCollection from '../Collection/ActivityCollection.js'


import Message from '../Message/XMGMessage.js' 
import Mypage from '../Mypage/XMGMypage.js' 



import AgencyPage from '../Agency/AgencyPage.js'
import Activity from '../Agency/Activity.js'
import Activity2 from '../Agency/Activity2.js'
import Contacts from '../Agency/Contacts.js'
import SearchPage from '../Search/SearchPage.js'



var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

/*---------------框框Style--------------------*/
  container: {
   flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  scrollContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection:'column',
  },
  scrollViewStyle:{
    backgroundColor: 'white',
  },

  bigFrameStyle:{
    width:ScreenWidth,
    backgroundColor:'white',
    marginTop:20,
    marginBottom:30,
  },

  titleFrameStyle:{
    marginLeft:ScreenWidth*0.025,
    marginBottom:10,
    justifyContent:'space-between',
    flexDirection:'row',
  },
/*-------------------图片-----------------------*/
  swiperPicStyle: {
    width: ScreenWidth,
    height:ScreenWidth/16*9,
  },
/*------------------------文本Style-------------------------*/

  titleStyle:{
    fontSize:18,
  },

  moretitleStyle:{
    fontSize:13,
    color:'#707070',
    marginRight:ScreenWidth*0.025,
  },

});


var activity_URLS = [
  require('../../../img/Activities/a1.jpg'),
  require('../../../img/Activities/a2.jpg'),
  require('../../../img/Activities/a3.jpg'),
  require('../../../img/Activities/a4.jpg'),
  require('../../../img/Activities/a5.jpg'),
  require('../../../img/Activities/a6.jpg'),
  require('../../../img/Activities/a7.jpg'),
  require('../../../img/Activities/a8.jpg'),
  require('../../../img/Activities/a9.jpg'),
  require('../../../img/Activities/a10.jpg'),
  require('../../../img/Activities/a11.jpg'),
  require('../../../img/Activities/a12.jpg'),
  require('../../../img/Activities/a13.jpg'),
  require('../../../img/Activities/a14.jpg'),
  require('../../../img/Activities/a15.jpg'),
  require('../../../img/Activities/a16.jpg'),
  require('../../../img/Activities/a17.jpg'),
  require('../../../img/Activities/a18.jpg'),
  require('../../../img/Activities/a19.jpg'),
  require('../../../img/Activities/a20.jpg'),
  require('../../../img/Activities/a21.jpg'),
]


class Home2 extends Component {


static navigationOptions = {
    tabBarLabel: 'Home',
    headerStyle:{backgroundColor:'white'},
    headerRight:
            <View
                style={{flexDirection:'row'}}
            >
                <TouchableOpacity
                  onPress={() => navigate('SearchPage')}
                >
              {/*-----------------------搜索图标------------------------*/}
                    <Image 
                        source={require('../../../img/Buttons/search3.png')}
                        style={{
                            height:21,
                            width:21,
                            marginRight:0.05*ScreenWidth,
                        }}
                    />
                </TouchableOpacity>
            </View>,
    

    headerLeft:
            <View
                style={{flexDirection:'row'}}
            >
                <TouchableOpacity

                >
                    <Text
                      style={{
                        //color:'black',
                        fontSize:16,
                        marginLeft:0.03*ScreenWidth,
                      }}
                    >
                      上海
                    </Text>
                </TouchableOpacity>
            </View>
  };


      constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            selectedActivities: ds.cloneWithRows([
                {"title": "上海交大教育集团英语体验夏令营", "img":"1","location":"长宁区","age":"15-20岁"},
                {"title": "上海交大教育集团英语体验夏令营", "img":"2","age":"15-20岁","location":"长宁区"},
                {"title": "上海交大教育集团英语体验夏令营", "img":"3","age":"15-20岁","location":"长宁区"},
                {"title": "上海交大教育集团英语体验夏令营", "img":"4","age":"15-20岁","location":"长宁区"},
                {"title": "上海交大教育集团英语体验夏令营", "img":"5","age":"15-20岁","location":"长宁区"},
                {"title": "上海交大教育集团英语体验夏令营", "img":"6","age":"15-20岁","location":"长宁区"},
            ]),
            tutorings:ds.cloneWithRows([
                {"title": "上海交大教育集团英语体验夏令营", "img":"7","age":"15-20岁","location":"长宁区"},
                {"title": "上海交大教育集团英语体验夏令营", "img":"8","age":"15-20岁","location":"长宁区"},
                {"title": "上海交大教育集团英语体验夏令营", "img":"9","age":"15-20岁","location":"长宁区"},
                {"title": "上海交大教育集团英语体验夏令营", "img":"10","age":"15-20岁","location":"长宁区"},
                {"title": "上海交大教育集团英语体验夏令营", "img":"11","age":"15-20岁","location":"长宁区"},
                {"title": "上海交大教育集团英语体验夏令营", "img":"12","age":"15-20岁","location":"长宁区"},
            ]),
            selectedAgencies:ds.cloneWithRows([
                {"title": "上海交大教育集团", "img":"13","location":"长宁区"},
                {"title": "上海交大教育集团", "img":"14","location":"长宁区"},
                {"title": "上海交大教育集团", "img":"15","location":"长宁区"},
                {"title": "上海交大教育集团", "img":"16","location":"长宁区"},
                {"title": "上海交大教育集团", "img":"17","location":"长宁区"},
            ]),
        };
      }

      renderActivitiesRow(rowData,sectionID,rowID,highlightID){
        var imgSource = activity_URLS[rowData.img]
        const {navigate} = this.props.navigation
        return(
          <View
            style={{
              marginLeft:ScreenWidth*0.025,
              marginTop:0,
            }}
          >
          <TouchableWithoutFeedback
            onPress={() => navigate('Activity2')}
          >
            <Image 
              source={imgSource} 
              style={{
                width:ScreenWidth*0.7,
                height:ScreenWidth*0.7/4*3, 
                borderRadius:5,
              }}
            />
            </TouchableWithoutFeedback>
            <Text 
              numberOfLines={1}
              style={{fontWeight: 'bold', color:'#3c3c3c',fontSize: 13,width:ScreenWidth*0.7,marginTop:5,}}
            >
                {rowData.title}
            </Text>
            
            <View
              style={{flexDirection:'row',marginTop:5,alignItems:'flex-end',justifyContent:'space-between',width:ScreenWidth*0.5}}

            >
              <Text
                numberOfLines={1}
                style={{color:'#707070',fontSize: 11}}
              >
                年龄段：
                <Text

                >
                  {rowData.age}
                </Text>
              </Text>

              {/*---地区---*/}
              <Text
                numberOfLines={1}
                style={{color:'#707070',fontSize: 11}}
              >
                {rowData.location}
              </Text>
            </View>

          </View>
        );

      }


      renderAgenciesRow(rowData,sectionID,rowID,highlightID){
        var imgSource = activity_URLS[rowData.img]
        const {navigate} = this.props.navigation
        return(
          <View
            style={{
              marginLeft:ScreenWidth*0.025,
            }}
          >
          <TouchableWithoutFeedback
            onPress={() => navigate('AgencyPage')}
          >
            <Image 
              source={imgSource}
              style={{
                width:ScreenWidth*0.6,
                height:ScreenWidth*0.6/3*4, 
                marginBottom:5,
                borderRadius:5,
                resizeMode: 'cover',
              }}
            >
            </Image>
            </TouchableWithoutFeedback>
            <Text 
              numberOfLines={1}
              style={{fontWeight: 'bold', color:'#3c3c3c',fontSize: 13,width:ScreenWidth*0.4,}}
            >
                {rowData.title}
            </Text>
          </View>
        );

      }


  render() {
    const { navigate } = this.props.navigation;
    return (

      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        style={styles.scrollViewStyle}
      >
  
  {/*--------------------图片轮播----------------*/}
          <Swiper
              height={ScreenWidth/16*9}
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
                      marginTop: 0, 
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
                      marginTop: 0, 
                      marginBottom: 0,}} 
              />}
          >
               <Image source={require('../../../img/Activities/a16.jpg')} style={styles.swiperPicStyle}/>
               <Image source={require('../../../img/Activities/a17.jpg')} style={styles.swiperPicStyle}/>
               <Image source={require('../../../img/Activities/a20.jpg')} style={styles.swiperPicStyle}/>
          </Swiper>

{/*-----------------------分类图标---------------------------*/}
        
      {/*--------隔离层----------*/}
        <View
          style={{
            width:ScreenWidth,
            height:8,
            backgroundColor:'#f7f7f7',
          }}
        />


        <View
          style={{
            width:ScreenWidth,
            height:ScreenWidth/16*4.5,
            backgroundColor:'white',
          }}
        >
        </View>

        <View
          style={{
            width:ScreenWidth,
            height:8,
            backgroundColor:'#f7f7f7',
          }}
        />       

        <View style={styles.container}>
      {/*-------------------国内精选板块--------------------*/}
          <View style={styles.bigFrameStyle}>
            <View style={styles.titleFrameStyle}>
              <Text style={styles.titleStyle}>
                精选课程活动
              </Text>
              <TouchableOpacity
                onPress={() => navigate('SearchPage')}
              >
                <Text style={styles.moretitleStyle}>
                  查看更多>
                </Text>
              </TouchableOpacity>

            </View>
              <ListView
                dataSource={this.state.selectedActivities}
                renderRow={this.renderActivitiesRow.bind(this)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                removeClippedSubviews={false}
                //renderScrollComponent={this.renderAgenciesRow.bind(this)}
              />
          </View>

      {/*-------------------补习板块--------------------*/}
          <View style={styles.bigFrameStyle}>
            <View style={styles.titleFrameStyle}>
              <Text style={styles.titleStyle}>
                补习精选
              </Text>

              <TouchableOpacity
                onPress={() => navigate('Activity')}
              >
                <Text style={styles.moretitleStyle}>
                  查看更多>
                </Text>
              </TouchableOpacity>

            </View>
              <ListView
                dataSource={this.state.tutorings}
                renderRow={this.renderActivitiesRow.bind(this)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                removeClippedSubviews={false}
              />
          </View>

      {/*-------------------机构板块--------------------*/}
          <View style={styles.bigFrameStyle}>
            <View style={styles.titleFrameStyle}>
              <Text style={styles.titleStyle}>
                今日机构精选
              </Text>

              <TouchableOpacity
                onPress={() => navigate('AgencyPage',{ agencyname: '上海交大教育集团' })}
              >
                <Text style={styles.moretitleStyle}>
                  查看更多>
                </Text>
              </TouchableOpacity>
            </View>
              <ListView
                dataSource={this.state.selectedAgencies}
                renderRow={this.renderAgenciesRow.bind(this)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                removeClippedSubviews={false}
              />
          </View>

        </View>
    </ScrollView>

    );
  }


}

const TabbarNavigator = TabNavigator({
    Home: { screen: Home2 },
    ActivityCollection:{screen:ActivityCollection},
    AgencyCollection:{screen:AgencyCollection},
    Mypage: { screen: Mypage },
  }, 
  {
    initialRouteName: 'Home'
  },
  {
    tabBarOptions: {
      activeTintColor:'#e91e63',
      showLabel:'true',
      style:{backgroundColor: 'blue',},
    },
  }
);

const CollectionTab = TabNavigator({
    ActivityCollection: { screen: ActivityCollection },
    AgencyCollection: { screen: AgencyCollection },
  }, 
  {
    initialRouteName: 'ActivityCollection'
  },
);

const AppNav = StackNavigator({
  Home: { screen: TabbarNavigator },
  AgencyPage:{screen: AgencyPage},
  Activity:{screen: Activity},
  Activity2:{screen: Activity2},
  SearchPage:{screen: SearchPage},
  Contacts:{screen:Contacts},
});




//输出组件类
module.exports = Home2;

AppRegistry.registerComponent('EducationMobile', () => AppNav);