import React, { useState } from 'react';
import {styles} from 'IST440WCommunityRides/components/styles/stylesSheet.js'
import { useNavigation } from '@react-navigation/native'
import CheckBox from '@react-native-community/checkbox';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
  } from 'react-native'


const SignIn = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);

  const [data, setData] = React.useState({
        username: '',
        password: '',
    });

  const userUserNameInput = (value) => {
    setData({
        ...data,
        username: value,})
  }

  const userPasswordInput = (value) => {
    setData({
        ...data,
        password: value,})
  }


  const loginHandler = (userName, password) => {
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

  return(
    <View style = {styles.container}>
      <Text style = {styles.HeaderText}>
      SignIn
      <TouchableOpacity style = {styles.transparentButton}
        onPress = {() => navigation.navigate('SignUp')}
        >
          <Text style = {styles.SignHeaderText}> Signup</Text>
        </TouchableOpacity>
      </Text>
      <TextInput style={styles.boarder}
        placeholder = "Username"
        placeholderTextColor = "#FCFBFC"
        autoCapitalize = "none"
        onChangeText = {value => userUserNameInput(value)}
        />
      <TextInput style={styles.boarder}
        placeholder = "Password"
        placeholderTextColor = "#FCFBFC"
        autoCapitalize = "none"
        onChangeText = {value => userPasswordInput(value)}
        />
      <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
            tintColors={{ true: '#FFFFFF', false: '#FFFFFF' }}
          />
          <Text style={styles.checkboxLabel}>
            Remember me
          </Text>
        </View>
      <TouchableOpacity style = {styles.submitButton}
        //onPress = {() => {loginHandler(data.username, data.password)}}
        onPress = {() => navigation.navigate('Home')}
        >
          <Text style = {styles.submitButtonText}> Sign In </Text>
        </TouchableOpacity>

      <TouchableOpacity style = {styles.transparentButton}
        onPress = {() => navigation.navigate('ForgotPasswd')}
        >
          <Text style = {styles.paragraph}> Forgot Password</Text>
        </TouchableOpacity>

      <Text style = {styles.companyName}>
      Community Rides
        </Text>

      </View>
    )

}

export default SignIn;
