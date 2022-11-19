import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './app/navigation/StackNavigator';
import TabNavigator from './app/navigation/TabNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createRoot } from 'react-dom/client'

export default function App() {
  return (
    // <NavigationContainer>
    //   <StackNavigator/>
    // </NavigationContainer>
    <View>
      <Text>TESTING TESTING</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});