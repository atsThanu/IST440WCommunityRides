import React , { useState } from 'react';
import {styles} from 'IST440WCommunityRides/components/styles/stylesSheet.js'
import { useNavigation } from '@react-navigation/native'
import CheckBox from '@react-native-community/checkbox';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
  } from 'react-native'


const SignUp = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);

  return(
    <View style = {styles.container}>
      <Text style = {styles.HeaderText}>
      Sign Up
      <TouchableOpacity style = {styles.transparentButton}
        onPress = {() => navigation.navigate('SignIn')}
        >
          <Text style = {styles.SignHeaderText}> SignIn</Text>
        </TouchableOpacity>
      </Text>
      <TextInput style={styles.boarder}
        placeholder = "Your Email Address"
        placeholderTextColor = "#FCFBFC"
        autoCapitalize = "none"
        //onChangeText = {text => this.setState({Username: text})}
      />
      <TextInput style={styles.boarder}
          placeholder = "Password"
          placeholderTextColor = "#FCFBFC"
          autoCapitalize = "none"
          //onChangeText = {text => this.setState({Username: text})}
        />
        <TextInput style={styles.boarder}
            placeholder = "Confirm Password"
            placeholderTextColor = "#FCFBFC"
            autoCapitalize = "none"
            //onChangeText = {text => this.setState({Username: text})}
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
            tintColors={{ true: '#FFFFFF', false: '#FFFFFF' }}
          />
          <Text style={styles.checkboxLabel}>
            I agree to the Terms of Services and Privacy Policy
          </Text>
        </View>

      <TouchableOpacity style = {styles.submitButton}
        //onPress = {this.userInfo.bind(this)}
        >
          <Text style = {styles.submitButtonText}> SignUp </Text>
        </TouchableOpacity>


      <Text style = {styles.companyName}>
      Community Rides
        </Text>

      </View>
    )

}

export default SignUp;
