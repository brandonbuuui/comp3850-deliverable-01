import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import AppButton from '../components/AppButton';
import AppScreen from '../components/AppScreen';
import AppColours from '../config/AppColours';
import DataManager from '../config/DataManager';



function ProfileScreen({navigation}) {

    let data = DataManager.getInstance();
    let currUser = data.getCurrUser();

    return (
        <AppScreen style = {styles.container}>
           

                <ImageBackground 
                    style={styles.background}
                    source = {require("../assets/we.jpeg")}>
                    <View style={styles.wallBar}>
                        <TouchableOpacity>
                            <Ionicons name='ios-arrow-back' size={40} color='white'></Ionicons>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => navigation.goBack()}
                            style={styles.backButton}>
                            <Ionicons name='md-menu-outline' size={40} color='white'></Ionicons>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.space}></View>
                </ImageBackground>

                <Image
                    style = {styles.profile}
                    source={currUser.image}>
                </Image>

                <View style={styles.userinfo}>
                    <View style={styles.id}>
                        <Text style={{fontSize: 25, fontWeight: '600'}}> {currUser.firstName} {currUser.lastName} </Text>
                        <View style={{marginVertical: 4}}></View>
                        <Text style={{fontSize: 20, fontWeight: '100'}}> @{currUser.username} </Text>
                    </View>
                    <View style={styles.editProButton}>
                        <AppButton title="Edit profile" color = "lightblue"></AppButton>
                    </View>
                </View>
                {/* <ScrollView showsHorizontalScrollIndicator={false}> */}
                <View style = {styles.content}>
                    <Text style={{marginTop: 20, fontSize:25, fontWeight: '500'}}>Reminder</Text>
                    <View style={styles.reminder}></View>
                    <Text style={{marginTop: 20, fontSize:25, fontWeight: '500'}}>My Task</Text>   
                    <View style={styles.tasks}></View>        
                </View>

                
                {/* LOGOUT BUTTON HERE */}
                <TouchableOpacity
                    onPress={() => {
                        data.logout()
                        navigation.navigate("Login")
                    }}
                >
                    <Ionicons name='log-out-outline' size = '40' marginRight='auto'/>
                </TouchableOpacity>
                {/* </ScrollView> */}
        </AppScreen>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    background: {
        padding: 10, 
    },
    wallBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 50,
    },
    space: {
        marginTop: 100
    },
    userinfo: {
        marginTop: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profile: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 135, 
        width: 135, 
        borderRadius: 75, 
        marginHorizontal: 30,
        borderColor: AppColours.lightblue, 
        borderWidth: 5,
        position:'absolute',
        marginTop: 150
    },
    editProButton: {
        width: '40%',
        marginRight: 20
    },
    id: {
        marginLeft: 55
    },
    content: {
        flex: 8,
        width: "95%",
        borderColor: '#FFFFFF',
        borderWidth: 5,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    reminder: {
        flex: 1,
        marginTop: 10,
        width: "100%",
        alignContent: 'center',
        backgroundColor: AppColours.purple,
        borderRadius: 10,
        padding: 10,
    },
    tasks: {
        flex: 1,
        marginTop: 10,
        width: "100%",
        alignContent: 'center',
        backgroundColor: AppColours.purple,
        borderRadius: 10,
        padding: 10,
    }
});

export default ProfileScreen;