import * as React from 'react';
import { Button, View } from 'react-native';
import { enableScreens } from 'react-native-screens';


const Drawer = createDrawerNavigator();
enableScreens();
const AccountMenu = ({ navigation }) => {
    return (
        <View style = {styles.accountScreenContainer}>
          <View style = {styles.accountTopContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text> Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text> Subscriptions</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text> Car Share Card#</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text> Gas Card #"</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text> Insurance</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text> Driver License</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text> Go back</Text>
          </TouchableOpacity>

          </View>
        </View>


      );
}
export default AccountMenu;
