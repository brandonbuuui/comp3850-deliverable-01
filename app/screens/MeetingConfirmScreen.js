import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text, Button } from 'react-native';
import AppColours from '../config/AppColours';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons'

function MeetingConfirmScreen({route, navigation}) {
    const {date, time} = route.params
    return (
        <View style = {styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                    >
                        <Ionicons name='chevron-back-outline' size = '20'/>
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Meeting Confirmed</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentText}>Your meeting is at {time} on the {date}</Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress = {() => navigation.navigate("Meetings")}
                >
                    <Text style = {styles.buttonText}>Continue</Text>
                </TouchableOpacity> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
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
    header: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        width: "100%",
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        marginTop: 50,
    },
    content: {
        flex: 7,
        alignItems: 'center',
        width: "100%",
        marginTop: 200
    },
    footer: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
    },
    buttonText: {
        justifyContent: 'center',
        alignContent: 'center',
        color: 'white',
        fontSize: 22,
        fontWeight: '600',
    }, 
    backButton: {
        marginRight: 200,
    },
    titleText: {
        fontSize: 22
    },
    contentText: {
        fontSize: 20
    }
});

export default MeetingConfirmScreen;