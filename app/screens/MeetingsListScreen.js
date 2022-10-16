import React, { useEffect, useState } from 'react';
import { NavigationContainer, useFocusEffect, useIsFocused } from '@react-navigation/native';
import { View, StyleSheet, Text, Button, Image, ScrollView } from 'react-native';
import DataManager from '../config/DataManager';
import AppColours from '../config/AppColours';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';
import Constants from 'expo-constants';
import {format} from 'date-fns'

function MeetingsListScreen({navigation}) {

    let data = DataManager.getInstance();
    let meetings = data.getMeetings();
    let currUser = data.getCurrUser();
    let date = new Date();
    let currDate = format(date, "d/MM/yyyy")
    let currTime = format(date, "h:mmaaa")

    let prevMeetings = data.getPrevMeetings();
    let upcomingMeetings = data.getUpcomingMeetings();
    

    const isFocused = useIsFocused();

    return (
        <ScrollView showsHorizontalScrollIndicator={true}>
        <View style = {styles.container}>

            <View style = {styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Profile")}>
                        <Image
                            style = {styles.profileButton}
                            source={currUser.image}>
                        </Image>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <Ionicons name='chevron-back-outline' size = '40' marginRight='auto'/>
                </TouchableOpacity>
            </View>
            <View style = {styles.title}>
                <Text style={{fontSize: 40, borderLeftWidth: 20, borderRightWidth:20, borderColor:'#FFFFFF'}}>
                    Meetings List
                </Text>
            </View>
            <View style = {styles.meetingsList}>
                <Text style={{fontSize:22,borderWidth:20, borderColor:'#FFFFFF'}}>
                    Upcoming Meetings
                </Text>
                <FlatList
                    style={{borderLeftWidth: 20, borderRightWidth:20, borderColor:'#FFFFFF'}}
                    data = {upcomingMeetings}
                    keyExtractor = {item => item.id}
                    renderItem={({item}) => 
                            <TouchableOpacity
                                style = {styles.meetingCard}      
                                onPress = {() => navigation.navigate("Details", {
                                    date: item.date,
                                    time: item.time
                                })}
                            >
                                <Text style = {styles.meetingCardTitle}>
                                    Meeting
                                </Text>
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
                <Text style={{fontSize:22,borderWidth:20, borderColor:'#FFFFFF'}}>
                    Previous Meetings
                </Text>
                <FlatList
                    style={{borderLeftWidth: 20, borderRightWidth:20, borderColor:'#FFFFFF'}}
                    data = {prevMeetings}
                    keyExtractor = {item => item.id}
                    renderItem={({item}) => 
                            <TouchableOpacity
                                style = {styles.meetingCard}      
                                onPress = {() => navigation.navigate("Details", {
                                    date: item.date,
                                    time: item.time
                                })}
                            >
                                <Text style = {styles.meetingCardTitle}>
                                    Meeting
                                </Text>
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
            <View style = {styles.footer}>
                <TouchableOpacity 
                    style = {styles.bookMeetingButton}
                    onPress = {() => navigation.navigate("Book")}
                >
                    <Text style = {styles.buttonText}>Book</Text>
                </TouchableOpacity> 
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row-reverse',
        width: "100%",
        marginTop: Constants.statusBarHeight+10,
        justifyContent: 'space-between',
    },
    title: {
        justifyContent: 'center',
        width: "100%",
    },
    meetingsList: {
        width: "100%",
    },
    footer: {
        flex: 1.5,
        marginTop: 350,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
    },
    bookMeetingButton: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: AppColours.lightblue,
        width: 300,
        height: 44,
        borderRadius: 44/2,
        alignSelf: 'center',
        shadowColor: AppColours.black,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        marginBottom: 20
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
        height: 64, 
        width: 64, 
        borderRadius: 75, 
        marginHorizontal: 20,
        borderColor: AppColours.lightblue, 
        borderWidth: 5
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
        borderRadius: 10,
        padding: 10,
        margin: 2,
    },
    meetingCardTitle: {
        justifyContent: 'center',
        alignContent: 'center',
        color: 'white',
        fontSize: 20,
        lineHeight: 50,
        marginLeft: 10
    },
    meetingCardText: {
        justifyContent: 'center',
        alignContent: 'center',
        color: 'white',
        fontSize: 18,
        textAlign: 'right'
    },
    backButton: {
        borderLeftWidth: 10,
        borderColor: '#FFFFFF',
        marginRight: 'auto',
    },

});

export default MeetingsListScreen;