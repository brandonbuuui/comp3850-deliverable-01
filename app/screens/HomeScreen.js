import {React, useReducer, useState, useEffect} from 'react';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { View, StyleSheet, Text, Image } from 'react-native';
import DataManager from '../config/DataManager';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AppColours from '../config/AppColours';
import {Ionicons} from '@expo/vector-icons'


function HomeScreen({navigation}) {
    let data = DataManager.getInstance();
    let currUser = data.getCurrUser();
    let nextUpcoming = data.getNextUpcoming();

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
                <Text style={styles.welcomeText}>Hi {currUser.firstName}!</Text>
            </View>
            <View style = {styles.content}>
                    <Text style={{marginTop: 20, fontSize:25, fontWeight: '500'}}>Upcoming Meetings</Text>
                    <View style={styles.nextMeeting}>
                    <Text style={{fontSize:18, color: AppColours.white}}>
                        {nextUpcoming.description}
                        {nextUpcoming.location}
                        {nextUpcoming.date}
                        {nextUpcoming.time}
                    </Text>
                    </View>
                    <Text style={{marginTop: 20, fontSize:25, fontWeight: '500'}}>Most Recent Survey</Text>   
                    <View style={styles.nextSurvey}></View>         
                    <Text style={{marginTop: 20, fontSize:25, fontWeight: '500'}}>News</Text>
                    <View style={styles.news}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',

    },
    profileButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80, 
        width: 80, 
        borderRadius: 75, 
        borderColor: AppColours.lightblue, 
        borderWidth: 5,
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: '600',
    },
    header: {
        marginTop: 50,
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,

    },
    content: {
        flex: 7,
        width: "95%",
        borderColor: '#FFFFFF',
        borderWidth: 5,
        marginLeft: 10

    },
    nextMeeting: {
        flex: 2,
        marginTop: 10,
        width: "100%",
        alignContent: 'center',
        backgroundColor: AppColours.purple,
        borderRadius: 10,
        padding: 10,

    },
    nextSurvey: {
        flex: 2,
        marginTop: 10,
        width: "100%",
        alignContent: 'center',
        backgroundColor: AppColours.purple,
        borderRadius: 10,
        padding: 10,

    },
    news: {
        flex: 6,
        width: "100%",
        marginTop: 10,
        alignContent: 'center',
        backgroundColor: AppColours.purple,
        borderRadius: 10,
        padding: 10,
  
    }
});

export default HomeScreen;


