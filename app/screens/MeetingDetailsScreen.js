import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text, Button } from 'react-native';
import AppColours from '../config/AppColours';
import {Ionicons} from'@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

function MeetingDetailsScreen({route, navigation}) {
    const {date, time} = route.params
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
                    <Ionicons name='pencil-outline' size='large' color='white' marginRight='10px'/>
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
        flex: 1.5,
        alignItems: 'center',
        flexDirection: 'row-reverse',
        width: "100%",
        borderColor: '#FFFFFF',
        borderWidth: 5,
    },
    title: {
        flex: 1,
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
        width: 44,
        height: 44,
        borderRadius: 44/2,
        backgroundColor: AppColours.lightblue,
        marginRight: 5,
    },
    backButton: {
        marginRight: 'auto',
    }
});

export default MeetingDetailsScreen;