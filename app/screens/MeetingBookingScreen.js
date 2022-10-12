import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import AppColours from '../config/AppColours';
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