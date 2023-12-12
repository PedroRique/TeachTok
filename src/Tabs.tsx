import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Feed } from './Feed/Feed';
import Home from '../assets/icons/Home.svg';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Home fill={'#000'} />,
        }}
      />
    </Tab.Navigator>
  );
};
