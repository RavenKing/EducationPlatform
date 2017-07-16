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

const Form = t.form.Form;




 class Message extends Component {

  login(){



  }


  render() {
    const Agency = t.struct({
      name:t.String,
      surname:t.String,
      age:t.Number
    })
    const options = {auto:'placeholders'} ;

    console.log(this.props);
     const ShitButton =      
     (      
      <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={
                ()=> {
                  this.props.dispatch(fetchAgency());
                 this.props.history.push("/about")
                  }
            }>
    
                <Text style={styles.buttonText}>登陆</Text>
            </TouchableHighlight>
      )

    return (
      <View style={styles.container}>
        <Text >
          Tgkl;s
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
    Agencys:store.Agency
  }
}




export default connect(select)(withRouter(Message));