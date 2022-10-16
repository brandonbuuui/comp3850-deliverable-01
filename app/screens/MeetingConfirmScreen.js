import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text, Button } from 'react-native';
import AppColours from '../config/AppColours';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons'
import Constants from 'expo-constants';

function MeetingConfirmScreen({route, navigation}) {
    const {date, time} = route.params
    return (
        <View style = {styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                    >
                        <Ionicons name='chevron-back-outline' size = '40'/>
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Meeting Confirmed</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.confirmText}>Your meeting with ... has been confirmed</Text>
                <Text style={styles.contentText}>The meeting is at {time} on the {date} at ... </Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress = {() => navigation.navigate("Home")}
                >
                    <Text style = {styles.buttonText}>Continue</Text>
                </TouchableOpacity> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 300,
        backgroundColor: AppColours.lightblue,
        width: 250,
        height: 50,
        borderRadius: 15,
        alignSelf: 'center',
        shadowColor: AppColours.black,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        marginBottom: 50
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        width: "100%",
        marginTop: Constants.statusBarHeight+10,
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        marginTop: 50,
    },
    content: {
        alignItems: 'center',
        width: "100%",
        marginTop: 80
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
    },
    buttonText: {
        justifyContent: 'center',
        alignContent: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: '600',
    }, 
    backButton: {
        marginLeft:20,
    },
    titleText: {
        fontSize: 45
    },
    contentText: {
        fontSize: 30,
        padding: 20,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: '600'
    },
    confirmText: {
        fontSize: 30,
        padding: 20,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: '600'
    }
});

export default MeetingConfirmScreen;