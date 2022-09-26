import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import DataManager from '../config/DataManager';
import AppButton from '../components/AppButton';
import AppColours from '../config/AppColours';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons'

function MeetingsListScreen({navigation}) {

    let data = DataManager.getInstance();
    let meetings = data.getMeetings();
    console.log(data.getCurrUser().image);

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
                <Text>
                    TITLE
                </Text>
            </View>
            <View style = {styles.meetingsList}>
                <Text>
                    Upcoming Meetings
                </Text>
                <FlatList
                    data = {meetings}
                    keyExtractor = {item => item.id}
                    renderItem={({item}) => 
                            <TouchableOpacity
                                style = {styles.meetingCard}      
                                onPress = {() => navigation.navigate("Details", {
                                    date: item.date
                                })}
                            >
                                <Text style = {styles.meetingCardText}>
                                    {item.date}
                                </Text>
                                <Text style = {styles.meetingCardText}>
                                    {item.time}
                                </Text>
                            </TouchableOpacity>

                    }
                />
            </View>
            <View style = {styles.meetingsList}>
                <Text>
                    Previous Meetings
                </Text>
            </View>
            <View style = {styles.footer}>
                <TouchableOpacity 
                    style = {styles.bookMeetingButton}
                    onPress = {() => navigation.navigate("Book")}
                >
                    <Text style = {styles.buttonText}>Book</Text>
                </TouchableOpacity> 
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
    meetingsList: {
        flex: 7,
        width: "100%",
        borderColor: 'green',
        borderWidth: 5,
    },
    footer: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        borderColor: 'yellow',
        borderWidth: 5,
    },
    bookMeetingButton: {
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
    profileButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 44,
        height: 44,
        borderRadius: 44/2,
        backgroundColor: AppColours.lightblue,
        marginRight: 5,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    meetingCard: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: AppColours.purple,
        margin: 2,
    },
    meetingCardText: {
        justifyContent: 'center',
        alignContent: 'center',
        color: 'white',
        fontSize: 20,
    },
    backButton: {
        marginRight: 200,
    }

});

export default MeetingsListScreen;