import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from 'IST440WCommunityRides/components/Screens/SignInScreen'
import SignUp from 'IST440WCommunityRides/components/Screens/SignUpScreen'

import Home from 'IST440WCommunityRides/components/Screens/HomeScreen'
import ForgotPasswd from 'IST440WCommunityRides/components/Screens/ForgotPassword'

import DrawerNavigator from 'IST440WCommunityRides/components/Drawer'

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPasswd" component={ForgotPasswd} />
        <Stack.Screen name="Home" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
