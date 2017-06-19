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
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';
import StarRating from 'react-native-star-rating';

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

/*------------------------文本Style-------------------------*/

  titleStyle:{
    fontSize:16,
  },

  moretitleStyle:{
    fontSize:11,
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
    headerStyle:{backgroundColor:'white'}

  };


      constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            selectedActivities: ds.cloneWithRows([
                {"title": "上海交大教育集团英语体验夏令营", "img":"1",starCount:5,"age":"15-20岁"},
                {"title": "上海交大教育集团英语体验夏令营", "img":"2",starCount:2.5,"age":"15-20岁"},
                {"title": "上海交大教育集团英语体验夏令营", "img":"3",starCount:3.5,"age":"15-20岁"},
                {"title": "上海交大教育集团英语体验夏令营", "img":"4",starCount:4,"age":"15-20岁"},
                {"title": "上海交大教育集团英语体验夏令营", "img":"5",starCount:3.5,"age":"15-20岁"},
                {"title": "上海交大教育集团英语体验夏令营", "img":"6",starCount:3.5,"age":"15-20岁"},
            ]),
            tutorings:ds.cloneWithRows([
                {"title": "上海交大教育集团英语体验夏令营", "img":"7",starCount:3.5,"age":"15-20岁"},
                {"title": "上海交大教育集团英语体验夏令营", "img":"8",starCount:3.5,"age":"15-20岁"},
                {"title": "上海交大教育集团英语体验夏令营", "img":"9",starCount:3.5,"age":"15-20岁"},
                {"title": "上海交大教育集团英语体验夏令营", "img":"10",starCount:3.5,"age":"15-20岁"},
                {"title": "上海交大教育集团英语体验夏令营", "img":"11",starCount:3.5,"age":"15-20岁"},
                {"title": "上海交大教育集团英语体验夏令营", "img":"12",starCount:3.5,"age":"15-20岁"},
            ]),
            selectedAgencies:ds.cloneWithRows([
                {"title": "上海交大教育集团", "img":"13",starCount:3.5},
                {"title": "上海交大教育集团", "img":"14",starCount:3.5},
                {"title": "上海交大教育集团", "img":"15",starCount:3.5},
                {"title": "上海交大教育集团", "img":"16",starCount:3.5},
                {"title": "上海交大教育集团", "img":"17",starCount:3.5},
            ]),
        };
      }

      renderActivitiesRow(rowData,sectionID,rowID,highlightID){
        var imgSource = activity_URLS[rowData.img]
        return(
          <View
            style={{
              marginLeft:ScreenWidth*0.025,
            }}
          >
            <Image 
              source={imgSource} 
              style={{
                width:ScreenWidth*0.55,
                height:ScreenWidth*0.55/4*3, 
                borderRadius:10,
              }}
            />
            <Text 
              numberOfLines={1}
              style={{fontWeight: 'bold', color:'#3c3c3c',fontSize: 13,width:ScreenWidth*0.5,marginTop:5,}}
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
              {/*---星星---*/}
              <StarRating
                starStyle={{
                  marginTop:5,
                  //backgroundColor:'red'
                }}
                disabled={true}
                maxStars={5}
                rating={rowData.starCount}
                //selectedStar={(rating) => this.onStarRatingPress(rating)}
                starSize={12}
              />  
            </View>

          </View>
        );

      }


      renderAgenciesRow(rowData,sectionID,rowID,highlightID){
        var imgSource = activity_URLS[rowData.img]
        return(
          <View
            style={{
              marginLeft:ScreenWidth*0.025,
            }}
          >
            <Image 
              source={imgSource}
              style={{
                width:ScreenWidth*0.4,
                height:ScreenWidth*0.4/9*16, 
                marginBottom:5,
                borderRadius:5,
                resizeMode: 'cover',
              }}
            >
            </Image>
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
        <View style={styles.container}>
      {/*-------------------国内精选板块--------------------*/}
          <View style={styles.bigFrameStyle}>
            <View style={styles.titleFrameStyle}>
              <Text style={styles.titleStyle}>
                精选课程活动
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
                dataSource={this.state.selectedActivities}
                renderRow={this.renderActivitiesRow}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
          </View>

      {/*-------------------补习板块--------------------*/}
          <View style={styles.bigFrameStyle}>
            <View style={styles.titleFrameStyle}>
              <Text style={styles.titleStyle}>
                补习精选
              </Text>

              <Text style={styles.moretitleStyle}>
                查看更多>
              </Text>
            </View>
              <ListView
                dataSource={this.state.tutorings}
                renderRow={this.renderActivitiesRow}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
          </View>

      {/*-------------------机构板块--------------------*/}
          <View style={styles.bigFrameStyle}>
            <View style={styles.titleFrameStyle}>
              <Text style={styles.titleStyle}>
                今日机构精选
              </Text>

              <Text style={styles.moretitleStyle}>
                查看更多>
              </Text>
            </View>
              <ListView
                dataSource={this.state.selectedAgencies}
                renderRow={this.renderAgenciesRow}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
          </View>

        </View>
    </ScrollView>

    );
  }


}

const TabbarNavigator = TabNavigator({
    Home: { screen: Home2 },
    Collection: { screen: Collection },
    Message: { screen: Message },
    Mypage: { screen: Mypage }
  }, 
  {
    initialRouteName: 'Home'
  },
  {
    tabBarOptions: {
      activeTintColor: '#e91e63',
      showLabel:'true',
      style:{backgroundColor: 'blue',},
    },
  }
);


const AppNav = StackNavigator({
  Home: { screen: TabbarNavigator },
  AgencyPage1:{screen: AgencyPage1},
  AgencyPage2:{screen: AgencyPage2},
  Activity:{screen: Activity},
});


//输出组件类
module.exports = Home2;

AppRegistry.registerComponent('EducationMobile', () => AppNav);