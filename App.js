import { StatusBar } from 'expo-status-bar';
import React, { Component, createContext, useContext } from 'react';
import { Button,  View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from './src/Home';

const Drawer = createDrawerNavigator()
export default function App(){
    return(
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerShown: false}}>
          <Drawer.Screen 
            name="Home">
            {props=><Home {...props}/>}
          </Drawer.Screen>
          <Drawer.Screen name="Page">
            {props=><Page {...props}/>}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    )
}
