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
            <View style={styles.content}>
                <View style={{flex:1, flexDirection:'row'}}>
                    <Ionicons name='location-outline' size='medium' color='white'/>
                    <Text style={styles.contentText}>Location:</Text>
                </View>
                <View style={{flex:1, flexDirection:'row'}}>
                <Ionicons name='calendar-outline' size='medium' color='white'/>
                    <Text style={styles.contentText}>Date: {date.toString()}</Text>
                </View>
                <View style={{flex:1, flexDirection:'row'}}>
                <Ionicons name='time-outline' size='medium' color='white'/>
                    <Text style={styles.contentText}>Time: {time.toString()}</Text>
                </View>
                <View style={{flex:1, flexDirection:'row'}}>
                    <Ionicons name='pencil-outline' size='large' color='white' marginRight='10'/>
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
    },
    content: {
        flex: 15.5,
        width: "100%",
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: AppColours.purple,
        borderRadius: 10,
        padding: 10,
        marginTop:90,
        marginBottom:100,
        marginLeft: 20,
        marginRight: 20
    },
    contentText: {
        fontSize: 25,
        color: 'white',
        textDecorationLine: 'underline',
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