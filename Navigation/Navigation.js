import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home/Home';
import Profile from '../Screen/Profile/Profile';
import Messanger from '../Screen/Messanger/Messanger';
import Settings from '../Screen/Settings/Settings';
import { HomeIcon, SettingsIcon, MessageIcon, ProfileIcon} from '../theme/Images';
const Tab = createBottomTabNavigator();
const CustomTabIcon = ({ source, focused }) => {
  return (
    <Image
      source={source}
      style={{ 
        width: 24, 
        height: 24,
        tintColor: focused ? 'red' : 'black' // Apply red tint color if tab is active, otherwise black
      }} 
    />
  );
};
export default function Navigation() {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: { paddingBottom: 10, height: 60 },
        headerShown:false  // true
    }}>
        <Tab.Screen 
        name='Home' 
        component={Home} 
        options={{ 
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon source={HomeIcon} focused={focused} />
          )
        }} 
      />
      <Tab.Screen 
        name='Profile' 
        component={Profile} 
        options={{ 
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon source={ProfileIcon} focused={focused} />
          )
        }} 
      />
      <Tab.Screen 
        name='Messanger' 
        component={Messanger} 
        options={{ 
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon source={MessageIcon} focused={focused} />
          )
        }} 
      />
      <Tab.Screen 
        name='Settings' 
        component={Settings} 
        options={{ 
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon source={SettingsIcon} focused={focused} />
          )
        }} 
      />
    </Tab.Navigator>
  )
}