import * as React from 'react';
import {styles} from 'IST440WCommunityRides/components/styles/stylesSheet'
import { enableScreens } from 'react-native-screens';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

enableScreens();
const Payment = ({ navigation }) => {
    return (
        <View>
        <TouchableOpacity style = {styles.transparentButton}
          onPress = {() => navigation.navigate('Add')}
          >
            <Text style = {styles.SignHeaderText}> Add Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.transparentButton}
            onPress = {() => navigation.navigate('UpDate')}
            >
              <Text style = {styles.SignHeaderText}> Update Payment</Text>
            </TouchableOpacity>
        </View>


      );
}
export default Payment;
