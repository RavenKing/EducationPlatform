

import React, { Component } from 'react';
import t from 'tcomb-form-native';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Alert
} from 'react-native';
import {Redirect,withRouter} from "react-router-native";
import {connect} from 'react-redux';
import {fetchAgency} from '../actions/AgencyAction';


class Message extends Component {


	constructor(props) {
	  super(props);
		console.log(this.props)
	  this.state = {};
	}
  render() {

     return (
      	
      	<View >
      	<Text>hehe</Text>
    	<TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={
                ()=> this.props.history.push("/about")}>
                <Text style={styles.buttonText}>登陆</Text>
         </TouchableHighlight>
        </View>

        )
  }
}

function select(store)
{
return {  
    Agencys:store.Agency
  }
}

export default connect(select)(withRouter(Message));


var styles = StyleSheet.create({
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
