import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text, Button } from 'react-native';

function SurveyListScreen({navigation}) {
    return (
        <View style = {styles.container}>
            <Text>SURVEY LIST SCREEN</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SurveyListScreen;