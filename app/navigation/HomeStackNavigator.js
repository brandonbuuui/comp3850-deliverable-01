import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const AppStack = createStackNavigator();

const StackNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
    </AppStack.Navigator>
)

export default StackNavigator;