import React, { Component } from 'react'
import {styles} from 'IST440WCommunityRides/components/styles/stylesSheet.js'

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
  } from 'react-native'

class LoginScreen extends Component{

  constructor(props){
    super(props);

    this.state={
      Username: '',
      Password: '',
      data:'',
    }
  }

  getUselist(){
    try{
      fetch('http://10.0.0.17:8082/listUsers', {
        method: "GET",
      })
      .then(res => res.text())
      .then((response) => { console.log(response);
         this.setState({data: response})
        })
    }
    catch(e){
      console.log(e)
      }
  }

  userInfo(){
    var data = {
      username: this.state.Username,
      password: this.state.Password
    }

    try{
      fetch('http://10.0.0.17:8082/signup', {
        method: "Post",
        headers:{
          'Accept': 'application/json',
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.text())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Post sent:', response));
    }
    catch(e) {
      console.log(e)
      }

  }
    render(){
      return(
        <View style = {styles.container}>
          <Text style = {styles.HeaderText}>
          SignIn
          <TouchableOpacity style = {styles.transparentButton}
            //onPress = {this.getUselist.bind(this)}
            >
              <Text style = {styles.SignUpHeaderText}> Signup</Text>
            </TouchableOpacity>
          </Text>
          <TextInput style={styles.boarder}
            placeholder = "Username"
            placeholderTextColor = "#FCFBFC"
            autoCapitalize = "none"
            onChangeText = {text => this.setState({Username: text})}
            />
          <TextInput style={styles.boarder}
            placeholder = "Password"
            placeholderTextColor = "#FCFBFC"
            autoCapitalize = "none"
            onChangeText = {text => this.setState({Password: text})} />

          <TouchableOpacity style = {styles.submitButton}
            onPress = {this.userInfo.bind(this)}
            >
              <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>

          <TouchableOpacity style = {styles.transparentButton}
            //onPress = {this.getUselist.bind(this)}
            >
              <Text style = {styles.paragraph}> Forgot Password</Text>
            </TouchableOpacity>

          <TouchableOpacity style = {styles.submitButton}
            onPress = {this.getUselist.bind(this)}
            >
              <Text style = {styles.submitButtonText}> TEST </Text>
            </TouchableOpacity>

          <Text >
            {this.state.data}
            </Text>

          <Text style = {styles.companyName}>
          Community Rides
            </Text>

          </View>
      )
    }
  }
  export default LoginScreen
