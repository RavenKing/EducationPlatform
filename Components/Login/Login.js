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
import {LoginUser} from '../actions/AgencyAction';
import {setAuthToken} from '../actions/AuthAction';
import md5 from 'md5';
const Form = t.form.Form;




 class Message extends Component {

  onPress(){

    //set Auth
          var value= this.refs.form.getValue();
                  const valueType={
                    user_name:value.user_name,
                    password:md5(value.password)
                  }
                this.props.dispatch(setAuthToken(valueType));
//jump to / 
        setTimeout(function(){
          console.log(this.props)
          if(this.props.auth) 
          {
            const {token} = this.props.auth;
            console.log(token); 
            if(token.authorized)
              {this.props.history.push('/home')}

          }     
        }.bind(this),1000);


  }

  render() {
    const Agency = t.struct({
      user_name:t.String,
      password:t.String,
    })
    const options = {auto:'placeholders',
    fields:{
      user_name:{placeholder:'shit your name'},
      password:{secureTextEntry:true}   // t comb fields set each configuration for the field
    }
  } ;

     const ShitButton =      
     (      
      <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={this.onPress.bind(this)}> 
                <Text style={styles.buttonText}>登陆</Text>
            </TouchableHighlight>
      )
     const RegisterButton =
     (
            <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={
                ()=>
               this.props.history.push("/register")
            }>
    
                <Text style={styles.buttonText}>注册</Text>
            </TouchableHighlight>)

    return (
      <View style={styles.container}>
        <Text >
       我要遭重
          </Text>
       <Form
          ref="form"
          type={Agency}
          options={options}
        />
        {ShitButton}
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
    Agencys:store.Agency,
    auth:store.Auth
  }
}




export default connect(select)(withRouter(Message));