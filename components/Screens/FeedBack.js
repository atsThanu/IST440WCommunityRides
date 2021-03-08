import React from 'react';
import {styles} from 'IST440WCommunityRides/components/styles/stylesSheet'
import { useNavigation } from '@react-navigation/native'


import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native'

  const Review = ({navigation}) => {


/*  const [data, setData] = React.useState({
    feedback: '',
  });*/

/*  const feedbackInput = (value) => {
    setData({
      ...data,
      feedback: value,
    })
  }*/

    return(
      <View style = {styles.container}>
        <TextInput style = {style1.feedbackBox}
         placeholder = "Feedback"
         placeholderTextColor = "#FCFBFC"
         autoCapitalize = "none"
         onChangeText = {value => feedbackInput(value)}
        />
        <Text>Feedback</Text>


        </View>
      )

  }

  export default Review;
  const style1 = StyleSheet.create ({
    feedbackBox: {
      color: '#FCFBFC',
      height: 100,
      fontSize: 20,
      borderColor: '#ACB0B3',
      borderRightWidth: 2,
      borderLeftWidth: 2,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      textAlign: 'left',
      textAlignVertical: 'top',
      position: 'absolute',
      bottom: 0,
      alignSelf: 'center',
      marginBottom: 30,

    }
  })
