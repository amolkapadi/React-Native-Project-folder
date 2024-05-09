import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home/Home';
import Profile from '../Screen/Profile/Profile';
import Messanger from '../Screen/Messanger/Messanger';
import Settings from '../Screen/Settings/Settings';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: { paddingBottom: 15, height: 50 },
        contentStyle: { marginBottom: 10 },
        headerShown:false  // true
    }}>
         <Tab.Screen name='Home' component={Home} options={{ tabBarIcon: () => null  }}/>
         <Tab.Screen name='Profile' component={Profile} options={{ tabBarIcon: () => null  }}/>
         <Tab.Screen name='Messanger' component={Messanger} options={{ tabBarIcon: () => null  }}/>
         <Tab.Screen name='Settings' component={Settings} options={{ tabBarIcon: () => null  }}/>
    </Tab.Navigator>
  )
}