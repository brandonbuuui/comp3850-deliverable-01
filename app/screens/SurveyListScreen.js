import React from 'react';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { View, StyleSheet, Text, Image } from 'react-native';
import DataManager from '../config/DataManager';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import {Ionicons} from'@expo/vector-icons';

import AppColours from '../config/AppColours';
import AppScreen from '../components/AppScreen';

function SurveyListScreen({navigation}) {
    let data = DataManager.getInstance();
    let currUser = data.getCurrUser();
    console.log(currUser.email)
    return (
        <AppScreen style = {styles.container}>
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
            <View style={styles.surveyContainer}>
                <View style={styles.title}>
                    <Text style={{marginTop: 20, fontSize: 30, fontWeight: 'bold'}}>Today's Surveys</Text>
                </View>
                <View style={styles.surveyLists}></View>
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profileButton: {
        marginTop: Constants.statusBarHeight,
        justifyContent: 'center',
        alignItems: 'center',
        height: 64, 
        width: 64, 
        borderRadius: 75, 
        borderColor: AppColours.lightblue, 
        borderWidth: 5,
        marginRight: 20
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
    surveyContainer: {
        flex: 1,
        width: "90%",
        marginBottom: 20,
    },
    title: {
        marginLeft: 20,
    },
    surveyLists: {
        flex: 1,
        marginTop: 10,
        marginLeft: 20,
        width: "100%",
        alignContent: 'center',
        backgroundColor: AppColours.purple,
        borderRadius: 10,
        padding: 10,
    }
});

export default SurveyListScreen;