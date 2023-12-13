import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { FeedScreen } from './Feed/FeedScreen';
import Home from '../assets/icons/Home.svg';
import Discover from '../assets/icons/Discover.svg';
import Bookmarks from '../assets/icons/Bookmarks.svg';
import { EmptyScreen } from './Feed/EmptyScreen';

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
        component={FeedScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Home fill={'#000'} />,
        }}
      />
      <Tab.Screen
        name="Discover"
        component={EmptyScreen}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: () => <Discover fill={'#000'} />,
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={EmptyScreen}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: () => <Bookmarks fill={'#000'} />,
        }}
      />
    </Tab.Navigator>
  );
};
