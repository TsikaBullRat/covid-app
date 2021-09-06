import { StatusBar } from 'expo-status-bar';
import React, { Component, createContext, useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, NavButton, Prevention, Stats, Info, styles, getData } from './src';

const Drawer = createDrawerNavigator()


export default function App() {

  const [stats, getStats] = useState(null)
  useEffect(()=>{
    getData(getStats)
  },[])

  console.log(stats)
  return (
    <View style={styles.body}>{
      stats ? (
        <NavigationContainer style={styles.body}>
          <Drawer.Navigator
            drawerContent={props => <NavButton {...props} />}
          >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Prevention" component={Prevention} />
            <Drawer.Screen name="Stats" component={Stats} />
            <Drawer.Screen name="Info" component={Info} />
          </Drawer.Navigator>
        </NavigationContainer>
      ) : <ActivityIndicator size="large" color="#000" />
    }</View>
  )
}
