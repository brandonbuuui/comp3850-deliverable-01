import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text, Button } from 'react-native';

function MeetingDetailsScreen({navigation}) {
    return (
        <View style = {styles.container}>
            <Text>MeetingDetailsScreen</Text>
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

export default MeetingDetailsScreen;