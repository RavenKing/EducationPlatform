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
      backgroundColor:'white'
  },
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  scrollContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    //flexDirection:'column',
  },
  scrollViewStyle:{
    backgroundColor: 'white',
    flex:1,
  },


/*---学校信息框----*/
  mainInfoFrame1:{
    marginTop:20,
    backgroundColor:'#eaf6f6',
    borderRadius:5,
  },


  mainInfoRowFrame:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:8,
    //marginBottom:8,
  },
  mainInfoLastRowFrame:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:8,
    marginBottom:8,
  },

  mainInfoTextFrame:{
    marginLeft:12,
    flexDirection:'row',
  },


/*---授课信息信息框---*/
  mainInfoFrame2:{
    marginTop:20,
    backgroundColor:'#f2f2f2',
    borderRadius:5,
  },
  
  contentTitleFrame:{
    borderLeftWidth:3,
    borderLeftColor:'#ff4081',
    marginTop:20,
  },
  bigRegistryFrameStyle:{
    //backgroundColor:'yellow',
    width:ScreenWidth,
    height:65,
    alignItems:'center',
  },

  innerRegistryFrameStyle:{
      justifyContent:'space-between',
      alignItems:'center',
      //backgroundColor:'red',
      height:64,
      flexDirection:'row',
      width:ScreenWidth*0.85,
  },

  ratingmoneyFrameStyle:{
      height:40,
  },

/*-------------------图片-----------------------*/
  mainInfoIcon:{
    width:18,
    height:18,
    marginLeft:8,
  },

/*-------------------文字-----------------------*/
  mainInfoTitle:{
    fontSize:14,
    fontWeight:'400',
    color:'#26a69a',
  },
  mainInfoContent:{
    fontSize:14,
    fontWeight:'200',
    color:'#74c6bf'
  },

  mainInfoTitle2:{
    fontSize:14,
    fontWeight:'400',
  },
  mainInfoContent2:{
    fontSize:14,
    fontWeight:'200',
    marginRight:5,
  },

  contentTitle:{
    fontSize:15,
    fontWeight:'400',
    marginLeft:4,
  },

  contentText:{
    fontSize:14,
    fontWeight:'200',
    textAlign:'justify',
    marginTop:5,
  },

/*------------------------分割线Style-------------------------*/  
    lineStyle:{
        height:1,
        width:ScreenWidth*0.9,
        marginTop:20,
        marginBottom:20,
    },

});


var otherPics_URLS = [
  require('../../../img/personalInfo/otherPics/1.jpg'),
  require('../../../img/personalInfo/otherPics/2.jpg'),
  require('../../../img/personalInfo/otherPics/3.jpg'),
  require('../../../img/personalInfo/otherPics/4.jpg'),

]

export default class Mypage extends Component {
  
  constructor(props) {
    super(props);
    thes = this;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
        otherPics: ds.cloneWithRows([
            {"img":"0"},
            {"img":"1"},
            {"img":"2"},
            {"img":"3"},
        ]),
    };
  }

   renderOtherpIcs(rowData,sectionID,rowID,highlightID){
    var imgSource = otherPics_URLS[rowData.img]
    return(
      <Image 
        source={imgSource} 
        style={{
          width:ScreenWidth*0.55,
          height:ScreenWidth*0.55/4*3, 
          borderRadius:10,
          marginRight:ScreenWidth*0.025,
          marginTop:5,
        }}
      />
    )
  } 

  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.rootFrame}>
        <ScrollView
          style={styles.scrollViewStyle}
          contentContainerStyle={styles.scrollContainer}
        >
    
  {/*--------------------背景图片----------------*/}
          <Image
            source={require('../../../img/personalInfo/mianPic.jpg')}
            style={{
              width: ScreenWidth,
              height:ScreenWidth/16*9,
            }}
          />
          <View
            style={{
              width:ScreenWidth*0.9,
            }}
          >

    {/*--------------------昵称头像信息栏----------------*/}
            <View
              style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                marginTop:20,
              }}
            >
              <View
                style={{
                  flexDirection:'column',
                }}
              >
                <Text
                  style={{
                    fontSize:30,
                    fontWeight:'500',
                    marginBottom:5
                  }}
                >
                  Harvey
                </Text>
                
                <View
                  style={{
                    flexDirection:'row',
                    alignItems:'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize:13,
                      fontWeight:'100',
                    }}
                  >
                      90后金牛座
                  </Text>
                  <Image 
                    source = {require('../../../img/personalInfo/male.png')}
                    style = {{
                      width:13,
                      height:13,
                      marginLeft:5,
                    }}
                  />
                </View>

              </View>

              <Image 
                source = {require('../../../img/personalInfo/face.jpg')}
                style = {{
                  width:60,
                  height:60,
                  borderRadius:20,
                }}
              />
            </View>

        {/*---------------------------关注与粉丝------------------------------*/}
            <View>
              
            </View>             

        {/*---------------------------照片展示------------------------------*/} 
              <View style={styles.contentTitleFrame}>
                <Text style={styles.contentTitle}>照片展示：</Text>
              </View>
                <ListView
                  dataSource={this.state.otherPics}
                  renderRow={this.renderOtherpIcs}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              
              {/*------------------分割线------------------*/}
              <Image source={require('../../../img/string.png')} style={styles.lineStyle}/>

            </View>

          </ScrollView>          
        </View>
    );
  }
}


//输出组件类
module.exports = Mypage;
