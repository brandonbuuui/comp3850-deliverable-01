import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MeetingsListScreen from '../screens/MeetingsListScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MeetingDetailsScreen from '../screens/MeetingDetailsScreen';

const AppStack = createStackNavigator();

const StackNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="MeetingsList" component={MeetingsListScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Details" component={MeetingDetailsScreen} options={{headerShown:false, unmountOnBlur:true,}}/>
        <AppStack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
    </AppStack.Navigator>
)

export default StackNavigator;