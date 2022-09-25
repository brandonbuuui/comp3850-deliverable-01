import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text, Button } from 'react-native';
import DataManager from '../config/DataManager';



function HomeScreen({route, navigation}) {
    //const {paramEmail, paramName, paramImage} = route.params.params.params
    const {params} = route.params;
    let data = DataManager.getInstance();
    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text>Hi {params.paramName.toString()}!</Text>
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
        justifyContent: 'center',
        width: "100%",
        borderColor: 'blue',
        borderWidth: 5,
    },
    content: {
        flex: 7,
        width: "100%",
        borderColor: 'red',
        borderWidth: 5
    }
});

export default HomeScreen;


