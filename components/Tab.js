import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import Home from 'IST440WCommunityRides/components/Screens/HomeScreen'
import AccountScreen from 'IST440WCommunityRides/components/Screens/AccountScreen'

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
