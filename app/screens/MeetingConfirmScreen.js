import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text, Button } from 'react-native';
import AppColours from '../config/AppColours';
import {TouchableOpacity} from 'react-native-gesture-handler'

function MeetingConfirmScreen({route, navigation}) {
    const {date} = route.params
    return (
        <View style = {styles.container}>
            <Text>MeetingConfirmScreen SCREEN</Text>
            <Text>{date.toString()}</Text>
            <TouchableOpacity 
                style = {styles.button}
                onPress = {() => navigation.navigate("Meetings")}
            >
                <Text style = {styles.buttonText}>Continue</Text>
            </TouchableOpacity> 
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
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: "5px",
        backgroundColor: AppColours.lightblue,
        width: 300,
        height: 44,
        borderRadius: 44/2,
        alignSelf: 'center',
        shadowColor: AppColours.black,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    buttonText: {
        justifyContent: 'center',
        alignContent: 'center',
        color: 'white',
        fontSize: 22,
        fontWeight: '600',
    }, 
});

export default MeetingConfirmScreen;