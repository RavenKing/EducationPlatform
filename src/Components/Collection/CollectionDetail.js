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
    width:ScreenWidth*0.95,
    flex:1,
    //backgroundColor: 'red',
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



export default class CollectionDetail extends Component {
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
                {"title": "哈维双语村体验营", "img":"0","routeName":"Activity2"},
                {"title": "上海哈维教育机构（哈哈哈哈哈哈哈）", "img":"1","routeName":"AgencyPage3"},
            ]),           
        };
      }

      renderCollectionRow(rowData,sectionID,rowID,highlightID){
        var imgSource = collection_URLS[rowData.img]
        const {navigate} = this.props.navigation        
        return(
          <View>
            <TouchableOpacity
              onPress={() => navigate('Activity2')}
            >
              <Image 
                source={imgSource} 
                style={{
                  width:ScreenWidth*0.85,
                  height:ScreenWidth*0.85/4*3, 
                  borderRadius:10,
                  marginTop:20,
                }}
              />
            </TouchableOpacity>
            


            <View
              style={{
                flexDirection:'row',
                alignItems:'baseline',
                marginTop:5,
                //justifyContent:'flex-start',
                //width:ScreenWidth*0.5
              }}
            >
              <Text
                numberOfLines={1}
                style={{fontWeight: 'bold', color:'#3c3c3c',fontSize: 15,marginTop:5,alignItems:'flex-end'}}
              >
                  {rowData.title}
              </Text>
            </View>

          </View>
        );

      }



  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.bigFrame}>
          
          <Text
            style={{
              fontSize:25,
              marginTop:30,
              fontWeight:'600',
            }}
          >
            第一收藏夹：
          </Text>

          <ListView
            style={{
              marginTop:30,
            }}
            contentContainerStyle={{
              alignItems:'center'
            }}
            dataSource={this.state.collections}
            renderRow={this.renderCollectionRow.bind(this)}
            horizontal={false}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
          />

        </View>

        <View
          style={{
            marginTop:20,
          }}
        />  
      </View>
    );
  }
}


//输出组件类
module.exports = CollectionDetail;
