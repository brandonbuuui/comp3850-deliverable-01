import React from 'react';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { View, StyleSheet, Text, Button } from 'react-native';
import DataManager from '../config/DataManager';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AppColours from '../config/AppColours';
import {Ionicons} from '@expo/vector-icons'



function HomeScreen({route, navigation}) {
    //const {paramEmail, paramName, paramImage} = route.params.params.params
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
                <Text>CONTENT HERE</Text>
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
        borderColor: 'blue',
        borderWidth: 5,
    },
    content: {
        flex: 7,
        width: "100%",
        borderColor: 'red',
        borderWidth: 5
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
        marginRight: 'auto',
    }
});

export default HomeScreen;


