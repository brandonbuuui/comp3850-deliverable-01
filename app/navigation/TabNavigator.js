import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ChatScreen from '../screens/ChatScreen';
import SurveyListScreen from '../screens/SurveyListScreen';

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
            tabBarStyle: { height: 80, backgroundColor: AppColours.lightblue },
            tabBarActiveBackgroundColor: '#51bae7',
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'white',
        })}
    
    
    
    >
        <AppTab.Screen name="Home" component={HomeStackNavigator} options={{headerShown:false}}
        listeners={({ navigation }) => ({
            tabPress: e => {
                navigation.navigate('Home');
            },
        })}
        />
        <AppTab.Screen name="Meetings" component={MeetingsStackNavigator} options={{headerShown:false}}
        listeners={({ navigation }) => ({
            tabPress: e => {
                navigation.navigate('Meetings');
            },
        })}
        />
        <AppTab.Screen name="Chat" size={100} component={ChatScreen} options={{headerShown:true}}/>
        <AppTab.Screen name="Survey" component={SurveyListScreen} options={{headerShown:true}}/>
    </AppTab.Navigator>
)

export default TabNavigator;