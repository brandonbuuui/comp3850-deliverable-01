import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text, TextInput } from 'react-native';

function ForgotPasswordScreen({navigation}) {
    return (
        <View style = {styles.container}>
            <Text>FORGOT PASSWORD SCREEN</Text>
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

export default ForgotPasswordScreen;