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
        //marginTop:5,
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



export default class AgencyCollection extends Component {
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
                {"title": "上海哈维教育机构", "img":"0",},
                {"title": "上海哈维教育机构", "img":"0",},
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
              height:ScreenWidth*0.35,
              //backgroundColor:'blue',
              alignItems:'center',
            }}

          >
                <View
                  style={{
                    flexDirection:'row',
                    //marginTop:0.05*ScreenWidth,
                    //marginLeft:20, 
                    height:ScreenWidth*0.35,
                    width:ScreenWidth*0.95,
                    alignItems:'center',
                    //backgroundColor:'red',                   
                  }}
                >
                    <Image 
                      source={require('../../../img/Activities/a6.jpg')} 
                      //resizeMode='cover'
                      style={{
                        height:ScreenWidth*0.475/16*9,
                        width:ScreenWidth*0.475,
                        //flex:1,
                        //backgroundColor:'red',
                      }}
                    />

                      <View
                        style={{
                          //width:ScreenWidth/3*2-20,
                          //backgroundColor:'blue',
                          //alignItems:'center',
                          marginLeft:0.03*ScreenWidth,
                          height:ScreenWidth*0.475/16*9,
                          width:0.435*ScreenWidth,
                          //justifyContent:'space-between',
                        }}
                      >
                          <Text
                            style={{
                              fontSize:ScreenWidth*0.045,
                              fontWeight:'500',
                              //color:'black',
                              height:ScreenWidth*0.475/16*9/2,
                              width:0.435*ScreenWidth,
                              //backgroundColor:'yellow',
                              //width:ScreenWidth*0.45,
                            }}
                          >
                            上海哈维教育集团（不要超过22个字）
                          </Text>                       
                          <Text
                            style={{
                              fontSize:ScreenWidth*0.035,
                              fontWeight:'300',
                              //color:'white',
                              //backgroundColor:'grey',
                              //height:ScreenWidth*0.475/16*9/2,
                              width:0.435*ScreenWidth,
                            }}
                          >
                            上海市蒙山路100号
                          </Text>
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
module.exports = AgencyCollection;
