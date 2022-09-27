import React from 'react';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { View, StyleSheet, Text, Button } from 'react-native';
import DataManager from '../config/DataManager';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AppColours from '../config/AppColours';
import {Ionicons} from '@expo/vector-icons'



function HomeScreen({route, navigation}) {
    const {params} = route.params;
    let data = DataManager.getInstance();
    data.setCurrUser(params.paramName.toString())
    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Profile")}
                    style = {styles.profileButton}
                >
                    <Ionicons name='person-outline' size = '20'/>
                </TouchableOpacity>
                <Text style={styles.welcomeText}>Hi {params.paramName.toString()}!</Text>
            </View>
            <View style = {styles.content}>
                    <Text style={{fontSize:25}}>Next Meeting</Text>
                    <View style={styles.nextMeeting}></View>
                    <Text style={{fontSize:25}}>Most Recent Survey</Text>   
                    <View style={styles.nextSurvey}></View>         
                    <Text style={{fontSize:25}}>News</Text>
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
        alignItems: 'center',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row-reverse',
        width: "100%",
        borderColor: '#FFFFFF',
        borderWidth: 5,
    },
    content: {
        flex: 7,
        width: "100%",
        borderColor: '#FFFFFF',
        borderWidth: 5,
    },
    nextMeeting: {
        flex: 2,
        width: "100%",
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: AppColours.purple,
        borderRadius: 10,
        padding: 10,
        // marginTop:90,
        // marginBottom:100,
        // marginLeft: 20,
        // marginRight: 20
    },
    nextSurvey: {
        flex: 2,
        width: "100%",
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: AppColours.purple,
        borderRadius: 10,
        padding: 10,
        // marginTop:90,
        // marginBottom:100,
        // marginLeft: 20,
        // marginRight: 20
    },
    news: {
        flex: 6,
        width: "100%",
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: AppColours.purple,
        borderRadius: 10,
        padding: 10,
        // marginTop:90,
        // marginBottom:100,
        // marginLeft: 20,
        // marginRight: 20
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
    welcomeText: {
        fontSize: 30,
        marginRight: 'auto',
    }
});

export default HomeScreen;


