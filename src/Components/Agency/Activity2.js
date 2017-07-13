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

import Swiper from 'react-native-swiper2';
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
    marginTop:5,
    backgroundColor:'#eaf6f6',
    borderRadius:5,
    width:ScreenWidth*0.95,
    marginBottom:10,
  },


  mainInfoRowFrame:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:4,
    marginBottom:4,
    justifyContent:'space-between',
  },
  mainInfoRowFrame2:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:0,
    justifyContent:'space-between',
    width:ScreenWidth*0.95,
    //backgroundColor:'yellow',
    height:22,
  },
  mainInfoLastRowFrame:{
    flexDirection:'row',
    alignItems:'flex-start',
    marginTop:6,
    marginBottom:6,
    justifyContent:'space-between',
  },

  mainInfoTextFrame:{
    marginLeft:5,
    flexDirection:'row',
    alignItems:'flex-start',
    //width:ScreenWidth*0.95,
  },


/*---授课信息信息框---*/
  mainInfoFrame2:{
    //marginTop:20,
   //backgroundColor:'#f37298',
    //borderRadius:5,
    //borderWidth:0.5,
    //borderColor:'#dedede',
    //shadowColor:'#f2f2f2',
    //shadowOffset:{width: 100, height: 100},
    //width:ScreenWidth*0.95,
    alignItems:'center',
    marginTop:10,
  },
  
  contentTitleFrame:{
    borderLeftWidth:3,
    borderLeftColor:'#ff4081',
    marginTop:20,
    marginBottom:20,
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
  
  mainInfoTitleFrame2:{
    //borderLeftWidth:2,
    //borderLeftColor:'#2c2c2c',
    marginRight:14,
  },

/*-------------------图片-----------------------*/
  mainInfoIcon:{
    width:18,
    height:18,
    marginLeft:8,
  },
  swiperPicStyle: {
    width: ScreenWidth,
    height:ScreenWidth/16*9,
  },
/*-------------------文字-----------------------*/
  mainInfoTitle:{
    fontSize:15,
    fontWeight:'400',
    color:'#26a69a',
  },
  mainInfoContent:{
    fontSize:14,
    fontWeight:'200',
    color:'#74c6bf',
    width:ScreenWidth*0.55,
    marginLeft:10,
  },

  mainInfoTitle2:{
    fontSize:13,
    fontWeight:'200',
    //marginLeft:2,
    color:'#8d8d8d',
    width:ScreenWidth*0.2
  },
  mainInfoContent2:{
    fontSize:13,
    fontWeight:'200',
    width:ScreenWidth*0.55,
    //backgroundColor:'red',
  },

  contentTitle:{
    fontSize:16,
    fontWeight:'500',
    marginLeft:4,


  },

  contentText:{
    fontSize:15,
    fontWeight:'200',
    textAlign:'justify',
    marginTop:5,
    lineHeight:30,
  },


/*------------------------分割线Style-------------------------*/  
    lineStyle:{
        height:1,
        width:ScreenWidth*0.95,
        marginTop:20,
        marginBottom:20,
    },
    
    mainInfoLineStyle:{
        height:1,
        width:ScreenWidth*0.95,
        marginTop:10,
        marginBottom:10,
    },

});


var otherPics_URLS = [
  require('../../../img/personalInfo/otherPics/1.jpg'),
  require('../../../img/personalInfo/otherPics/2.jpg'),
  require('../../../img/personalInfo/otherPics/3.jpg'),
  require('../../../img/personalInfo/otherPics/4.jpg'),

]

export default class Activity2 extends Component {
      
      constructor(props) {
        super(props);
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

      static navigationOptions = {
        headerTintColor:'grey',
        headerStyle:{backgroundColor:'white'},
        headerRight:
            <View
                style={{flexDirection:'row'}}
            >
                <Image 
                    source={require('../../../img/Buttons/share.png')}
                    style={{
                        height:23,
                        width:23,
                        marginRight:20,
                    }}
                />

                <TouchableOpacity

                >
                    <Image 
                        source={require('../../../img/Buttons/heart.png')}
                        style={{
                            height:23,
                            width:23,
                            marginRight:20,
                        }}
                    />
                </TouchableOpacity>
            </View>
      };

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

  {/*--------------------顶层图片----------------*/}

         <Image source={require('../../../img/Activities/a6.jpg')} 
            style={styles.swiperPicStyle}
            blurRadius={100}

          >
            <View
              style={{
                flex:1,
                alignItems:'center',
              }}
            >
                <View
                  style={{
                    flexDirection:'row',
                    marginTop:((ScreenWidth/16*9-ScreenWidth*0.45)*0.5),
                    //marginLeft:20, 
                    width:ScreenWidth*0.95,                   
                  }}
                >
                    <Image 
                      source={require('../../../img/Activities/a6.jpg')} 
                      //resizeMode='cover'
                      style={{
                        height:ScreenWidth*0.45,
                        width:ScreenWidth*0.45/4*3,
                        //flex:1,
                        //backgroundColor:'red',
                      }}
                    />

                    <View
                      style={{
                        //flex:2,
                        alignItems:'center',
                        //justifyContent:'center',
                        //backgroundColor:'blue',

                      }}
                    >
                      <View
                        style={{
                          //width:ScreenWidth/3*2-20,
                          //backgroundColor:'red',
                          //alignItems:'center',
                          marginLeft:0.0325*ScreenWidth,
                          height:0.45*ScreenWidth,
                          width:0.58*ScreenWidth,
                        }}
                      >
                        

                          <Text
                            style={{
                              fontSize:ScreenWidth*0.05,
                              fontWeight:'500',
                              color:'white',
                              height:1/3*0.45*ScreenWidth,
                              width:0.58*ScreenWidth,
                              backgroundColor:'transparent',
                              //width:ScreenWidth*0.45,
                            }}
                          >
                            哈维语言村双语体验营（不要超过22个字）
                          </Text>                        


                        
                          <Text
                            style={{
                              fontSize:ScreenWidth*0.04,
                              fontWeight:'300',
                              color:'white',
                              backgroundColor:'transparent',
                              height:2/3*0.4*0.45*ScreenWidth+0.02*ScreenWidth,
                              width:0.58*ScreenWidth,
                            }}
                          >
                            2017年5月14日-2017年5月20日{'\n'}
                            09:00-17:30
                          </Text>                        
                       
                          <Text
                            style={{
                              fontSize:14,
                              fontWeight:'600',
                              color:'white',
                              backgroundColor:'transparent',
                              height:2/3*0.4*0.45*ScreenWidth-0.02*ScreenWidth,
                              width:0.58*ScreenWidth,
                            }}
                          >
                            ￥200-￥500/次
                          </Text> 

                       
                        <View
                          style={{
                            height:2/3*0.2*0.45*ScreenWidth,
                            flexDirection:'row',
                            alignItems:'flex-end',
                            width:0.58*ScreenWidth,
                            flexWrap:'wrap',
                            backgroundColor:'transparent'
                          }}
                        >
                          <View
                            style={{
                              borderWidth:1.5,
                              borderRadius:5,
                              borderColor:'#e64955',
                            }}
                          >
                            <Text
                              style={{
                                fontSize:12,
                                fontWeight:'900',
                                color:'white',
                                backgroundColor:'transparent',
                                //marginTop:20,
                                color:'#e64955',
                              }}
                            >
                              12-15周岁                          
                            </Text>
                          </View>
                        </View> 


                      </View>
                    </View>
                </View>


            </View>
          </Image>
    {/*---------------------------主办单位信息框---------------------------
            <TouchableOpacity
              onPress={() => navigate('AgencyPage3')}
            >
              <View style={styles.mainInfoFrame1}>                       
                <View style={styles.mainInfoRowFrame}>

                  <View style={styles.mainInfoTextFrame}>
                    <Text style={styles.mainInfoTitle}>主办单位：</Text>
                    <Text 
                      style={styles.mainInfoContent}
                      numberOfLines={1}
                    >
                      上海哈维教育机构（哈哈哈哈哈哈哈）
                    </Text>
                  </View>

                  <Image 
                    source = {require('../../../img/AgencyIcon/forward_green.png')}
                    style = {{
                      width:22,
                      height:22,
                    }}
                  />

                </View>
              </View>
            </TouchableOpacity>*/}
    {/*---------------------------重要信息框---------------------------*/}
              <View style={styles.mainInfoFrame2}>
                <TouchableOpacity
                  onPress={() => navigate('AgencyPage')}
                >
                  <View style={styles.mainInfoRowFrame2}>                
                    
                    <View style={styles.mainInfoTextFrame}>                 
                      <View style={styles.mainInfoTitleFrame2}>
                        <Text style={styles.mainInfoTitle2}>主办者</Text>
                      </View>
                      <Text 
                        style={styles.mainInfoContent2}
                        numberOfLines={1}
                      >
                        上海哈维教育机构（哈哈哈哈哈哈哈)  
                      </Text>
                    </View>

                  <Image 
                    source = {require('../../../img/AgencyIcon/forward.png')}
                    style = {{
                      width:18,
                      height:18,
                    }}
                  />
                  </View>
                </TouchableOpacity>
                {/*------------------分割线------------------*/}
                <Image source={require('../../../img/string.png')} style={styles.mainInfoLineStyle}/>


                <TouchableOpacity
                  onPress={() => navigate('Contacts')}
                >
                  <View style={styles.mainInfoRowFrame2}>                
                    
                    <View style={styles.mainInfoTextFrame}>                 
                      <View style={styles.mainInfoTitleFrame2}>
                        <Text style={styles.mainInfoTitle2}>活动地点</Text>
                      </View>
                      <Text style={styles.mainInfoContent2}>上海市金山区蒙山路100号</Text>
                    </View>

                  <Image 
                    source = {require('../../../img/AgencyIcon/forward.png')}
                    style = {{
                      width:18,
                      height:18,
                    }}
                  />
                  </View>
                </TouchableOpacity>
                {/*------------------分割线------------------*/}
                <Image source={require('../../../img/string.png')} style={styles.mainInfoLineStyle}/>

                <TouchableOpacity
                  onPress={() => navigate('Contacts')}
                >
                  <View style={styles.mainInfoRowFrame2}>                
                    
                    <View style={styles.mainInfoTextFrame}>                 
                      <View style={styles.mainInfoTitleFrame2}>
                        <Text style={styles.mainInfoTitle2}>联系方式</Text>
                      </View>
                      <Text style={styles.mainInfoContent2}>哈维老师</Text>
                    </View>

                  <Image 
                    source = {require('../../../img/AgencyIcon/forward.png')}
                    style = {{
                      width:18,
                      height:18,
                    }}
                  />
                  </View>
                </TouchableOpacity>
              </View>
            {/*---------------------------裁剪线------------------------------*/}
            <Image source={require('../../../img/laceshadow2.png')} style={{width:ScreenWidth,height:5,marginTop:10,}}/>
{/*---------------------------------主内容框----------------------------*/}
          




{/*-------------------------------------内容框架--------------------------------------*/}
          <View
            style={{
              width:ScreenWidth*0.95,
            }}
          >
        {/*---------------------------介绍文字------------------------------*/} 
              <View style={styles.contentTitleFrame}>
                <Text style={styles.contentTitle}>活动介绍：</Text>
              </View>
              <Text style={styles.contentText}>
                {'    '}复旦大学研究生兼职家教，复旦大学研究生在读，15岁考入985高校，后报送复旦研究生。在教育机构有两年经验，带过不下60名学生，
                备课认真负责，不是混课时的老师，学生提分明显，评价很好。擅长数学英语，可辅导小学初中全科。线上教学100元每小时，上门教学不接太远的，
                时间宝贵，价格根据路程计算。可接一对一或多对一，最多三人，每增加一名学生每人减少20元。有意者私聊，问单身，说垃圾话的打广告的一律
                拉黑举报删除。
              </Text>

        {/*--------------------活动图片----------------*/}
              <Image
                source={require('../../../img/Activities/a1.jpg')}
                style={{
                  width: ScreenWidth*0.95,
                  height:ScreenWidth/16*9*0.95,
                }}
              />

        {/*---------------------------介绍文字------------------------------*/} 
              <Text style={styles.contentText}>
                {'    '}复旦大学研究生兼职家教，复旦大学研究生在读，15岁考入985高校，后报送复旦研究生。在教育机构有两年经验，带过不下60名学生，
                备课认真负责，不是混课时的老师，学生提分明显，评价很好。
              </Text>

              {/*------------------分割线------------------*/}
              <Image source={require('../../../img/string.png')} style={styles.lineStyle}/>

        

        {/*---------------------------照片展示------------------------------*/} 
              <View style={styles.contentTitleFrame}>
                <Text style={styles.contentTitle}>更多照片：</Text>
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




            {/*-------------------------------报名栏------------------------------------*/}
            <View style={styles.bigRegistryFrameStyle}>

                {/*---------------------------阴影线------------------------------*/}
                <Image source={require('../../../img/shadow_top.png')} style={{width:ScreenWidth,height:5}}/>

                <View 
                    style={styles.innerRegistryFrameStyle}>

                    <View
                        style={styles.ratingmoneyFrameStyle}
                    >

                        <Text>
                            报名费:$700
                        </Text>
                        
                        {/*---星星---*/}
                        <StarRating
                            starStyle={{
                                marginTop:5,
                            }}
                            disabled={true}
                            maxStars={5}
                            rating={this.state.starCount}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                            starSize={12}
                        />
                    </View>


                    <View>
                        {/*---注册按钮---*/}
                        <Button
                            style={{
                                backgroundColor:'#f36563',
                                width:120,
                                height:40,
                                borderWidth:0,
                                borderRadius:5,
                            }}
                            textStyle={{color:'white'}}
                        >
                        注册报名
                        </Button>
                    </View>  


                </View>

            </View> 





 
        {/*---------------------------收藏框------------------------------ 
          <PopupDialog
                ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                dialogAnimation = { new SlideAnimation({ slideFrom: 'bottom'})}
                animationDuration = {200}
                overlayOpacity = {0.4}
                dialogStyle={{
                  borderRadius:0,
                  height:ScreenHeight*0.3,
                  //marginBottom:-(ScreenHeight*0.66-ScreenHeight*0.3),
                  alignItems:'center',
                }}
          >

            <View
                style={{
                  width:ScreenWidth*0.9,
                  //backgroundColor:'red',
                  marginTop:20
                }}
              >
                <View
                style={{
                  flexDirection:'row',
                  justifyContent:'space-between',
                }}
                >
                  <Text
                    style={{
                      fontSize:16,
                    }}
                  >选择一个收藏夹
                  </Text>
                  <Image 
                    source={require('../../../img/Buttons/plus.png')}
                    style={{
                      height:16,
                      width:16,
                    }}
                  />
                </View>
            </View>
          </PopupDialog> */}          
        </View>
    );
  }
}


//输出组件类
module.exports = Activity2;
