import React, { useEffect, useState } from 'react';
import { NavigationContainer, useFocusEffect, useIsFocused } from '@react-navigation/native';
import { View, StyleSheet, Text, Button, Image, ScrollView } from 'react-native';
import DataManager from '../config/DataManager';
import AppButton from '../components/AppButton';
import AppColours from '../config/AppColours';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';
import Constants from 'expo-constants';
import {format} from 'date-fns'

function MeetingsListScreen({navigation}) {
    const [data, setData] = useState(DataManager.getInstance())
    let currUser = data.getCurrUser();
    const [prevMeetings, setPrevMeetings] = useState(data.getPrevMeetings())
    const [upcomingMeetings, setUpcomingMeetings] = useState(data.getUpcomingMeetings())

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setData(DataManager.getInstance())
            setPrevMeetings([...data.getPrevMeetings()])
            setUpcomingMeetings([...data.getUpcomingMeetings()])
        });
    
        return unsubscribe;
      }, []);
    

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
                <Text style={{fontSize: 40, borderLeftWidth: 20, borderRightWidth:20, borderColor:'#FFFFFF', marginTop: 15}}>
                    Meetings List
                </Text>
            </View>
            <View style = {styles.meetingsList}>
                <Text style={{fontSize:25,borderWidth:20, borderColor:'#FFFFFF', marginBottom: 15}}>
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
                                    id: item.id
                                })}
                            >
                                <Text style = {styles.meetingCardTitle}>
                                   {item.description}
                                </Text>
                                <Text style={{fontSize:20, marginLeft: 20, color: 'white', marginBottom: 15, fontWeight: '500'}}>
                                    Mentor/Mentee and you
                                </Text>
                                <View style={styles.meettingDetails}>
                                    <Image
                                        style = {styles.mentee}
                                        source={currUser.image}>
                                    </Image>
                                    <View style={styles.cardText}>
                                        <Text style = {styles.meetingCardText}>
                                            {item.date}
                                        </Text>
                                        <Text style = {styles.meetingCardText}>
                                            {item.time}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                    }
                />
            </View>
            <View style = {styles.meetingsList}>
                <Text style={{fontSize:25,borderWidth:20, borderColor:'#FFFFFF'}}>
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
        width: 250,
        height: 50,
        borderRadius: 15,
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
        fontSize: 25,
        fontWeight: '600',
    }, 
    profileButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80, 
        width: 80, 
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
        paddingRight: 10,
        paddingBottom:10,
        margin: 2,
        marginBottom: 10
    },
    meetingCardTitle: {
        justifyContent: 'center',
        alignContent: 'center',
        color: 'white',
        fontSize: 22,
        lineHeight: 50,
        marginLeft: 20,
        fontWeight: '500'
    },
    meettingDetails: {
        alignItems: 'center',
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
    },
    mentee: {
        height: 55, 
        width: 55, 
        borderRadius: 75,
        marginLeft: 20
    },
    meetingCardText: {
        justifyContent: 'center',
        alignContent: 'center',
        color: 'white',
        fontSize: 18,
        textAlign: 'right',  
        marginRight: 10  
    },
    backButton: {
        borderLeftWidth: 10,
        borderColor: '#FFFFFF',
        marginRight: 'auto',
    },

});

export default MeetingsListScreen;