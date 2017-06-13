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
  Platform, //判断当前的系统
  TextInput,
} from 'react-native';

import {connect} from 'react-redux';
import Home2 from '../Home/XMGhome2';
import Message from '../Message/XMGMessage';
import Mypage from '../Mypage/XMGMypage';
import Collection from '../Collection/XMGCollection';

import {fetchAgency} from '../../actions/AgencyAction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  IconStyle:{
    width:25,
    height:25,
  },

});



class Main extends Component{

  //初始化状态
  constructor(props) {
      super(props);
      this.state = { selectedTab: 'home' }; //默认首选Home页面

    }


  render() {
    console.log(this.props);
    return (
        <TabNavigator>

          {/*----首页----*/}
          <TabNavigator.Item
            title = "首页"
            renderIcon={() => <Image source= {{uri:'home'}} style = {styles.IconStyle}/> }
            renderSelectedIcon={() => <Image source= {{uri:'home'}} style = {styles.IconStyle}/>}
            selected={this.state.selectedTab === 'home'}
            onPress={() => this.setState({ selectedTab: 'home' })}
          >

            <Navigator
              initialRoute = {{name:'首页', component:Home2}}
              configureScene = {()=>{
                return Navigator.SceneConfigs.PushFromRight;
              }}
              renderScene = {(route,navigator)=>{
                let Component = route.component;
                return <Component {...route.passProps} navigator = {navigator}/>;
              }}
            />
          </TabNavigator.Item>

        {/*----我的主页----*/}
          <TabNavigator.Item
            title = "我的主页"
            renderIcon={() => <Image source={require('./img/me.png')} style = {styles.IconStyle}/> }
            renderSelectedIcon={() => <Image source={require('./img/me.png')} style = {styles.IconStyle}/>}
            selected={this.state.selectedTab === 'myPage'}
            onPress={() => this.setState({ selectedTab: 'myPage' })}
          >
            <Mypage/>
          </TabNavigator.Item>

        {/*----收藏----*/}
          <TabNavigator.Item
            title = "收藏"
            renderIcon={() => <Image source={require('./img/collection.png')} style = {styles.IconStyle}/> }
            renderSelectedIcon={() => <Image source={require('./img/collection.png')} style = {styles.IconStyle}/>}
            selected={this.state.selectedTab === 'collection'}
            onPress={() => this.setState({ selectedTab: 'collection' })}
          >
            <Collection/>
          </TabNavigator.Item>

        {/*----消息----*/}
          <TabNavigator.Item
            title = "消息"
            renderIcon={() => <Image source={require('./img/message.png')} style = {styles.IconStyle}/> }
            renderSelectedIcon={() => <Image source={require('./img/message.png')} style = {styles.IconStyle}/>}
            selected={this.state.selectedTab === 'message'}
            onPress={() => this.setState({ selectedTab: 'message' })}
          >
            <Message/>
          </TabNavigator.Item>


        </TabNavigator>
      );
  }

  //创建TabBarItem
  // renderTabBarItem(){
      
  // }
}


function select(store)
{
return {  
    Agencys:store.Agency
  }
}

//输出组件类

export default connect(select)(Main)