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
import {fetchAgency,RegisterUser} from '../actions/AgencyAction';
import md5 from 'md5';

const Form = t.form.Form;




 class Message extends Component {

 	onPress()
 	{


 		console.log(this.refs.form.getValue());
 		let value = this.refs.form.getValue();
 		var valueConfirm={
 			user_name:value.user_name,
 			password:md5(value.passwd),
 			address:value.address,
 			phone:value.phone
 		};

 		this.props.dispatch(RegisterUser(valueConfirm))
         this.props.history.push("/")

 	}



  render() {

  	var Jiami=t.refinement(t.String,function(pass){return md5(pass)})
    const Agency = t.struct({
      user_name:t.String,
      passwd:t.String,
      email:t.maybe(t.String),
      address:t.maybe(t.String),
      phone:t.maybe(t.Number)
    })
    const options = {auto:'placeholders',
    fields:{
      user_name:{placeholder:'你的用户名'},
      passwd:{placeholder:'密码',secureTextEntry:true},
      address:{placeholder:'地址'},
      phone:{placeholder:'电话'}
        // t comb fields set each configuration for the field
    }
  } ;

     const RegisterButton =
     (
            <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={this.onPress.bind(this)}>
    
                <Text style={styles.buttonText}>注册</Text>
            </TouchableHighlight>)

    return (
      <View style={styles.container}>
        <Text >
       我要遭重n  

          </Text>
       <Form
          ref="form"
          type={Agency}
          options={options}
        />
        {RegisterButton}
      </View>
    )
    ;
  }
}


var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
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


function select(store)
{
return {  
    Agencys:store.Agency
  }
}




export default connect(select)(withRouter(Message));