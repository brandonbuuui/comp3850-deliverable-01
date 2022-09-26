import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text, Button } from 'react-native';
import AppColours from '../config/AppColours';
import {Ionicons} from'@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

function MeetingDetailsScreen({route, navigation}) {
    const {date} = route.params
    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Profile")}
                    style = {styles.profileButton}
                >
                    <Ionicons name='person-outline' size = '20'/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <Ionicons name='chevron-back-outline' size = '20'/>
                </TouchableOpacity>
            </View>
            <View style = {styles.title}>
                <Text style={styles.titleText}>Meeting Details</Text>
            </View>
            <View style={styles.content}>
                <Text>{date.toString()}</Text>
            </View>
            
            
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flex: 1.5,
        alignItems: 'center',
        flexDirection: 'row-reverse',
        width: "100%",
        borderColor: 'red',
        borderWidth: 5,
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        width: "100%",
        borderColor: 'blue',
        borderWidth: 5,
    },
    titleText: {
        fontSize: 22,
    },
    content: {
        flex: 15.5,
        width: "100%",
        borderColor: 'red',
        borderWidth: 5
    },
    profileButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 44,
        height: 44,
        borderRadius: 44/2,
        backgroundColor: AppColours.lightblue,
        marginRight: 5,
    },
    backButton: {
        marginRight: 200,
    }
});

export default MeetingDetailsScreen;