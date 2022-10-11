import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import MeetingsListScreen from '../screens/MeetingsListScreen';
import MeetingBookingScreen from '../screens/MeetingBookingScreen';
import MeetingConfirmScreen from '../screens/MeetingConfirmScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MeetingDetailsScreen from '../screens/MeetingDetailsScreen';

const AppStack = createStackNavigator();

const StackNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Profile" component={ProfileScreen} options={{headerShown:true}}/>
    </AppStack.Navigator>
)

export default StackNavigator;