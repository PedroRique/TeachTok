import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Bookmarks from '../assets/icons/Bookmarks.svg';
import Discover from '../assets/icons/Discover.svg';
import Home from '../assets/icons/Home.svg';
import Activity from '../assets/icons/Activity.svg';
import Profile from '../assets/icons/Profile.svg';
import { EmptyScreen } from './pages/Feed/EmptyScreen';
import { FeedScreen } from './pages/Feed/FeedScreen';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Home fill={color} />,
        }}
      />
      <Tab.Screen
        name="Discover"
        component={EmptyScreen}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color }) => <Discover fill={color} />,
        }}
      />
      <Tab.Screen
        name="Activity"
        component={EmptyScreen}
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({ color }) => <Activity fill={color} />,
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={EmptyScreen}
        options={{
          tabBarLabel: 'Bookmarks',
          tabBarIcon: ({ color }) => <Bookmarks fill={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={EmptyScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => <Profile fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
