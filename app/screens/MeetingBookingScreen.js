import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import AppButton from '../components/AppButton';
import AppColours from '../config/AppColours';

import DatePicker from "react-datepicker";
import DataManager from '../config/DataManager';
import {format} from 'date-fns'
import {Ionicons} from'@expo/vector-icons';

function MeetingBookingScreen({navigation}) {
    let data = DataManager.getInstance();
    const [startDate, setStartDate] = useState(new Date());
      const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
        return currentDate.getTime() < selectedDate.getTime();
      };

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
                <Text style={{fontSize: 40}}> Book A Meeting </Text>
            </View>
            <View style = {styles.calendar}>
                <Text style={{fontSize:20}}> Meeting With ... </Text>
                <View style={{justifyContent:'center', alignItems:'center', borderTopWidth:50, borderTopColor:'#FFFFFF'}}>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date)
                        }}
                        minDate={new Date()}
                        showDisabledMonthNavigation
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        filterTime={filterPassedTime}
                        dateFormat="MMMM d, yyyy h:mm"
                        inline
                    />
                </View>
                
            </View>
            <View style = {styles.footer}>
                <TouchableOpacity 
                    style = {styles.bookButton}
                    onPressOut = {() => {
                        navigation.navigate("Confirmation", {
                            date: format(startDate, "d/MM/yyyy"),
                            time: format(startDate, "h:mmaaa")
                        })
                        if (data.meetings.length == 0) {
                            data.meetings = [{id: 0, date: startDate.toString()}];
                            data.meetingsCount++;
                        } else {
                            const formattedDate = format(startDate, "d/MM/yyyy")
                            const formattedTime = format(startDate, "h:mmaaa")
                            data.addMeeting(formattedDate, formattedTime);
                        }
                    }}
                >
                    <Text style = {styles.buttonText}>Book</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {styles.bookButton}
                    onPress = {() => navigation.goBack()}
                >
                    <Text style = {styles.buttonText}>Cancel</Text>
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
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row-reverse',
        width: "100%",
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
        borderLeftWidth: 10,
        borderColor: '#FFFFFF',
        marginRight: 'auto',
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        width: "100%",
        borderLeftWidth: 20, 
        borderRightWidth:20, 
        borderColor:'#FFFFFF',
    },
    calendar: {
        flex: 7,
        width: "100%",
        borderLeftWidth: 20, 
        borderRightWidth:20, 
        borderColor:'#FFFFFF',
    },
    footer: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
    },
    bookButton: {
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

export default MeetingBookingScreen;