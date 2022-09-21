import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text, Button } from 'react-native';

function RegisterScreen({navigation}) {
    return (
        <View style = {styles.container}>
            <Text>REGISTER SCREEN</Text>
            <Button 
                title = "Cancel"
                onPress = {() => {
                    navigation.navigate('Login')
                }}
            />
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

export default RegisterScreen;