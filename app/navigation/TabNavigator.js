import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import MeetingsListScreen from '../screens/MeetingsListScreen';
import MeetingBookingScreen from '../screens/MeetingBookingScreen';
import MeetingConfirmScreen from '../screens/MeetingConfirmScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import SurveyListScreen from '../screens/SurveyListScreen';
import MeetingDetailsScreen from '../screens/SurveyListScreen';

import HomeStackNavigator from '../navigation/HomeStackNavigator'
import MeetingsStackNavigator from '../navigation/MeetingsStackNavigator'
import AppColours from '../config/AppColours';

const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
    <AppTab.Navigator
        screenOptions={({ route }) => ({
            
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = 'home-outline'
                } else if (route.name === 'Meetings') {
                    iconName = 'calendar-outline'
                } else if (route.name === 'Chat') {
                    iconName = 'chatbox-ellipses-outline'
                } else if (route.name === 'Survey') {
                    iconName = 'clipboard-outline'
                }
                
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarStyle: { height: 60, backgroundColor: AppColours.lightblue },
            tabBarActiveBackgroundColor: '#51bae7',
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'white',
        })}
    
    
    
    >
        <AppTab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <AppTab.Screen name="Meetings" component={MeetingsStackNavigator} options={{headerShown:false}}
        listeners={({ navigation }) => ({
            tabPress: e => {
                navigation.navigate('Meetings');
            },
        })}
        />
        <AppTab.Screen name="Chat" component={ChatScreen} options={{headerShown:false}}/>
        <AppTab.Screen name="Survey" component={SurveyListScreen} options={{headerShown:false}}/>
    </AppTab.Navigator>
)

export default TabNavigator;