import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import MeetingsListScreen from '../screens/MeetingsListScreen';
import MeetingBookingScreen from '../screens/MeetingBookingScreen';
import MeetingConfirmScreen from '../screens/MeetingConfirmScreen';
import ProfileScreen from '../screens/ProfileScreen';

const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
    <AppTab.Navigator>
        <AppTab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <AppTab.Screen name="MeetingsList" component={MeetingsListScreen} options={{headerShown:false}}/>
        <AppTab.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
    </AppTab.Navigator>
)

export default TabNavigator;