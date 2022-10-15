import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from 'react-native';
import AppColours from '../config/AppColours';

import Constants from 'expo-constants';

import DatePicker from "react-datepicker";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import DataManager from '../config/DataManager';
import {format} from 'date-fns'
import {Ionicons} from'@expo/vector-icons';

function MeetingBookingScreen({navigation}) {
    let data = DataManager.getInstance();
    const [date, setDate] = useState(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        setDate(date)
        hideDatePicker();
    };

    let dataUser = DataManager.getInstance();
    let currUser = data.getCurrUser();
    console.log(currUser.email)

    return (
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
                <Text style={{fontSize: 40, fontWeight: '500'}}> Book A Meeting </Text>
            </View>

            <View style={styles.calendar}>
                <Button title="Show Date Picker" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="datetime"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>

            <View style = {styles.footer}>
                <TouchableOpacity
                    style = {styles.bookButton}
                    onPressOut = {() => {
                        if (date != null) {
                            navigation.navigate("Confirmation", {
                                date: format(date, "d/MM/yyyy"),
                                time: format(date, "h:mmaaa")
                            })
                            const formattedDate = format(date, "d/MM/yyyy")
                            const formattedTime = format(date, "h:mmaaa")
                            if (data.meetings.length == 0) {
                                data.meetings = [{id: 0, date: formattedDate, time: formattedTime}];
                                data.meetingsCount++;
                            } else {
                                data.addMeeting(formattedDate, formattedTime);
                            }
                        }
                    }}
                >
                    <Text style = {styles.buttonText}>Schedule</Text>
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
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row-reverse',
        width: "100%",
        marginTop: Constants.statusBarHeight+10,
        justifyContent: 'space-between'
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
    backButton: {
        borderLeftWidth: 10,
        borderColor: '#FFFFFF',
        marginLeft:10,
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        width: "100%",
        borderLeftWidth: 20, 
        borderRightWidth:20, 
        borderColor:'#FFFFFF',
        fontWeight: '500'
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
        marginBottom: 30
    },
    bookButton: {
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