import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text, Button } from 'react-native';

function MeetingConfirmScreen({navigation}) {
    return (
        <View style = {styles.container}>
            <Text>MeetingConfirmScreen SCREEN</Text>
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

export default MeetingConfirmScreen;