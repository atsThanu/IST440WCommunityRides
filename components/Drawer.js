import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from 'IST440WCommunityRides/components/Tab'
import AccountScreen from 'IST440WCommunityRides/components/Screens/AccountScreen'
import PaymentScreen from 'IST440WCommunityRides/components/Screens/PaymentScreen'
import Add from 'IST440WCommunityRides/components/Screens/AddPayment'
import UpDate from 'IST440WCommunityRides/components/Screens/PaymentUpdate'

const Drawer = createDrawerNavigator();
const PaymentStack = createStackNavigator();

const PaymentScreenStack = () => {
    return (
      <PaymentStack.Navigator>
        <PaymentStack.Screen name="Payment" component={PaymentScreen} />
        <PaymentStack.Screen name="Add" component={Add} />
        <PaymentStack.Screen name="UpDate" component={UpDate} />
      </PaymentStack.Navigator>
  );
};


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Payment" component={PaymentScreenStack} />
      <Drawer.Screen name ='Account' component= {AccountScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
