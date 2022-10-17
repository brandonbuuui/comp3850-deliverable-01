import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from 'react-native';
import AppColours from '../config/AppColours';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

import Constants from 'expo-constants';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DataManager from '../config/DataManager';
import {format} from 'date-fns'
import {Ionicons} from'@expo/vector-icons';
import { Formik } from 'formik';

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
        setDate(date)
        hideDatePicker();
    };

    let dataUser = DataManager.getInstance();
    let currUser = data.getCurrUser();

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
            <Formik
                initialValues ={{location:'', description:''}}
                onSubmit = {(values, {resetForm}) => {
                    if (date != null) {
                        navigation.navigate("Confirmation", {
                            date: format(date, "yyyy/MM/dd"),
                            time: format(date, "h:mmaaa"),
                            location: values.location,
                            description: values.description
                            
                        })
                        const formattedDate = format(date, "yyyy/MM/dd")
                        const formattedTime = format(date, "h:mmaaa")
                        data.addMeeting(formattedDate, formattedTime, values.location, values.description);
                    }
                    resetForm
                }}
            >
                {({values, handleChange, handleSubmit, setFieldTouched, touched, errors}) => (
                    <>
                        <View style={styles.inputContainer}>
                            <AppTextInput 
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="pencil" 
                                placeholder="Description"
                                placeholderTextColor="#BFB7B7"
                                value={values.description}
                                onBlur = {() => setFieldTouched('description')}
                                onChangeText =  { handleChange('description')}
                                />
                            <AppTextInput 
                                icon="location-enter" 
                                placeholder="Location" 
                                placeholderTextColor="#BFB7B7"
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={values.location}
                                onBlur = {() => setFieldTouched('location')}
                                onChangeText = { handleChange('location')}
                                />
                            <View style={styles.datePicker}>
                            <Button title="Show Date Picker" onPress={showDatePicker} />
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="datetime"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                            </View>
                        </View>
                        <View style = {styles.footer}>
                            <View style={styles.bookButton}>
                                <AppButton 
                                    title="Book" color = "lightblue" onPress={handleSubmit}>
                                </AppButton>
                            </View>
                            <TouchableOpacity 
                                style = {styles.cancelButton}
                                onPress = {() => navigation.goBack()}
                            >
                                <Text style = {styles.buttonText}>Cancel</Text>
                            </TouchableOpacity> 
                        </View>
                    </>
                )}
            </Formik>     
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
        justifyContent: 'center',
        width: "100%",
        borderLeftWidth: 20, 
        borderRightWidth:20, 
        borderColor:'#FFFFFF',
        fontWeight: '500',
        marginTop: 50
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
        marginBottom: 30,
        marginTop: 100,
    },
    cancelButton: {
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
    bookButton: {
        marginTop: 80,
        width: '61%',
        alignSelf: 'center',
        marginBottom: 20
    },
    inputContainer: {
        marginTop: 50
    },
    datePicker: {
        marginTop: 20
    }
});

export default MeetingBookingScreen;