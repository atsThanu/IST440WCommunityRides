import * as React from 'react';
import { Button, View } from 'react-native';
import { enableScreens } from 'react-native-screens';


enableScreens();
const AccountMenu = ({ navigation }) => {
    return (
        <View style={{marginTop: 20, marginLeft: 20, flex: 1,
            alignItems: 'flex-start', justifyContent: 'flex-start' }}>
          <Button
            title="Profile"
            onPress={() => navigation.navigate('SignIn')}
          />
          <Button
            title="Subscriptions"
            onPress={() => navigation.navigate('SignIn')}
          />
          <Button
            title="Car Share Card#"
            onPress={() => navigation.navigate('SignIn')}
          />
          <Button
            title="Gas Card #"
            onPress={() => navigation.navigate('SignIn')}
          />
          <Button
            title="Insurance"
            onPress={() => navigation.navigate('SignIn')}
          />
          <Button
            title="Driver License"
            onPress={() => navigation.navigate('SignIn')}
          />
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>


      );
}
export default AccountMenu;
