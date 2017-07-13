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
  Button,
  TouchableOpacity,
  Image,
  ListView,
} from 'react-native';


import PopupDialog, { SlideAnimation,ScaleAnimation, DefaultAnimation }from 'react-native-popup-dialog';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bigFrame:{
    //width:ScreenWidth*0.95,
    flex:1,
    alignItems:'center',
    //backgroundColor: 'red',
  },
  
/*------------------------分割线Style-------------------------*/  
    lineStyle:{
        height:1,
        width:ScreenWidth*0.85,
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


var collection_URLS = [
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



export default class ActivityCollection extends Component {
  static navigationOptions = {
      headerStyle:{backgroundColor:'white'},
      title:'我的收藏',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../../img/tabIcon/home.png')}
          style={[styles.icon, {tintColor: tintColor}],{width:20,height:20}}
        />
      ),
    };

      constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            collections: ds.cloneWithRows([
                {"title": "第一收藏夹", "img":"0","agencyNumber":"1","activityNumber":"2"},
                {"title": "第二收藏夹", "img":"1","agencyNumber":"2","activityNumber":"2"},
            ]),           
        };
      }

      renderCollectionRow(rowData,sectionID,rowID,highlightID){
        var imgSource = collection_URLS[rowData.img]
        const {navigate} = this.props.navigation        
        return(
         <View
            style={{
              width: ScreenWidth,
              height:ScreenWidth*0.4,
              //backgroundColor:'blue',
              alignItems:'center',
            }}

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
                    marginTop:0.05*ScreenWidth,
                    //marginLeft:20, 
                    width:ScreenWidth*0.95,                   
                  }}
                >
                    <Image 
                      source={require('../../../img/Activities/a6.jpg')} 
                      //resizeMode='cover'
                      style={{
                        height:ScreenWidth*0.3,
                        width:ScreenWidth*0.3/4*3,
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
                          height:0.35*ScreenWidth,
                          width:0.68*ScreenWidth,
                        }}
                      >
                        

                          <Text
                            style={{
                              fontSize:ScreenWidth*0.04,
                              fontWeight:'500',
                              //color:'black',
                              height:1/3*0.35*ScreenWidth,
                              width:0.68*ScreenWidth,
                              //backgroundColor:'yellow',
                              //width:ScreenWidth*0.45,
                            }}
                          >
                            哈维语言村双语体验营（不要超过22个字）
                          </Text>                        


                        
                          <Text
                            style={{
                              fontSize:ScreenWidth*0.03,
                              fontWeight:'300',
                              //color:'white',
                              //backgroundColor:'grey',
                              height:1/3.7*0.35*ScreenWidth,
                              width:0.68*ScreenWidth,
                            }}
                          >
                            2017年5月14日-2017年5月20日{'\n'}
                            09:00-17:30
                          </Text>                        
                       
                          <Text
                            style={{
                              fontSize:ScreenWidth*0.035,
                              fontWeight:'600',
                              //color:'white',
                              //backgroundColor:'green',
                              height:1/3.25*0.35*ScreenWidth/2.2,
                              width:0.68*ScreenWidth,
                            }}
                          >
                            ￥200-￥500/次
                          </Text> 

                       
                        <View
                          style={{
                            height:1/3.4*0.35*ScreenWidth/2.2,
                            flexDirection:'row',
                            alignItems:'flex-end',
                            width:0.68*ScreenWidth,
                            flexWrap:'wrap',
                            //backgroundColor:'orange'
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
                                fontSize:ScreenWidth*0.026,
                                fontWeight:'900',
                                //color:'white',
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

            <Image source={require('../../../img/string.png')} style={styles.mainInfoLineStyle}/>
          </View>
        );

      }




  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.bigFrame}>

          <ListView
            dataSource={this.state.collections}
            renderRow={this.renderCollectionRow.bind(this)}
            horizontal={false}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
          />

        </View>  
      </View>
    );
  }
}


//输出组件类
module.exports = ActivityCollection;
