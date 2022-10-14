import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text, Image } from 'react-native';
import AppColours from '../config/AppColours';
import {Ionicons} from'@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Constants from 'expo-constants';

import DataManager from '../config/DataManager';

function MeetingDetailsScreen({route, navigation}) {

    let data = DataManager.getInstance();
    let currUser = data.getCurrUser();
    console.log(currUser.email)

    const {date, time} = route.params

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
                <Text style={styles.titleText}>Meeting Details</Text>
            </View>
            <View style={styles.meetInfo}>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.meetContent}>
                        <Text style={styles.meetText1}>Casual Meet</Text>
                        <Text style={styles.meetText2}>and You</Text>
                    </View>
                    <Image
                            style = {styles.mentee}
                            source={currUser.image}>
                    </Image>
                </View>
            </View>
            <View style={styles.content}>
                <View style={{flex:1, flexDirection:'row'}}>
                    <Ionicons name='location-outline' size={30} color='white'/>
                    <Text style={styles.contentText}>Location: </Text>
                </View>
                <View style={{flex:1, flexDirection:'row'}}>
                <Ionicons name='calendar-outline' size={30} color='white'/>
                    <Text style={styles.contentText}>Date: {date.toString()}</Text>
                </View>
                <View style={{flex:1, flexDirection:'row'}}>
                <Ionicons name='time-outline' size={30} color='white'/>
                    <Text style={styles.contentText}>Time: {time.toString()}</Text>
                </View>
                <View style={{flex:1, flexDirection:'row'}}>
                    <Ionicons name='pencil-outline' size={30} color='white' marginRight='10'/>
                    <Text style={styles.contentText}>Description:</Text>
                </View>
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
        alignItems: 'center',
        flexDirection: 'row-reverse',
        width: "100%",
        marginTop: Constants.statusBarHeight,
        justifyContent: 'space-between',
    },
    title: {
        justifyContent: 'center',
        width: "100%",
        borderColor: '#FFFFFF',
        borderWidth: 5,
        marginTop: 20,
    },
    titleText: {
        fontSize: 40,
        marginLeft: 10
    },
    meetInfo: {
        flex: 1,
        width: "95%",
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: AppColours.purple,
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
    },
    meetText1: {
        fontSize: 23,
        color: 'white',
        marginLeft: 10,
        fontWeight: '500',
        marginTop: 10
    },
    meetText2: {
        fontSize: 18,
        color: 'white',
        marginLeft: 10,
        fontWeight: '500',
        marginVertical: 10
    },
    mentee: {
        height: 65, 
        width: 65, 
        borderRadius: 75,
        marginTop: 10
    },
    content: {
        flex: 5,
        width: "95%",
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: AppColours.purple,
        borderRadius: 10,
        padding: 10,
        marginBottom: 60,
        marginTop: 60
    },
    contentText: {
        fontSize: 25,
        color: 'white',
        textDecorationLine: 'underline',
        marginLeft: 20,
        fontWeight: '500'
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
    backButton: {
        marginRight: 'auto',
    }
});

export default MeetingDetailsScreen;