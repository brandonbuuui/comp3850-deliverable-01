import React from 'react';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { View, StyleSheet, Text, Image } from 'react-native';
import DataManager from '../config/DataManager';
import {TouchableOpacity} from 'react-native-gesture-handler';

import AppColours from '../config/AppColours';

function SurveyListScreen({navigation}) {
    let data = DataManager.getInstance();
    let currUser = data.getCurrUser();
    console.log(currUser.email)
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
                </View>
            <View style={styles.surveyContainer}>
                <View style={styles.title}>
                    <Text style={{marginTop: 20, fontSize: 30, fontWeight: 'bold'}}>Today's Surveys</Text>
                </View>
                <View style={styles.surveyLists}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profileButton: {
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
        marginTop: 20,
        flexDirection: 'row-reverse',
    },
    surveyContainer: {
        flex: 2,
        width: "95%",
    },
    title: {
        marginLeft: 10,
    },
    surveyLists: {
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
        width: "100%",
        alignContent: 'center',
        backgroundColor: AppColours.purple,
        borderRadius: 10,
        padding: 10,
    }
});

export default SurveyListScreen;