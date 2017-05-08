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
} from 'react-native';

import {connect} from 'react-redux'
import HomeDetail from './XMGHomeDetail'
import {fetchAgency} from '../actions/AgencyAction'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

 class Home extends Component {
  constructor(props) {
    super(props);
  
    this.state = {text:'empty'};
  }


  Submit()
  {

    if(this.state.text)
    {
      this.props.dispatch(fetchAgency({name:this.state.text})) //dispatch 用来触发action
    }
  else
    {return 0}
  }


  render() {
    const Test = this.props.Agencys;
    console.log(this.props.Agencys)
    
    let name = "empty"
    if(Test.user)
    {
      name = Test.user
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {this.Submit()}}
        >
          <Text>
            Home
            {name}

      
          </Text>
      
           <TextInput  style={{height: 40, width :100}}
          placeholder="Type here to translate!"
        onChangeText={(text) => this.setState({text})}>
          </TextInput>

        </TouchableOpacity>  

      </View>
    );
  }
  
  //跳转的二级界面
  pushToDetail(){
    this.props.navigator.push({
      component:HomeDetail
    })
  }

}

function select(store)
{
  return {
     Agencys:store.Agency
  }
}


//输出组件类
export default connect(select)(Home)