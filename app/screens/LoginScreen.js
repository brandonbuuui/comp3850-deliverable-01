import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text, Button } from 'react-native';

function LoginScreen({navigation}) {
    return (
        <View style = {styles.container}>
            <Text>LOGIN SCREEN TEST TEST</Text>
            <Button 
                title = "Register"
                onPress = {
                    () => navigation.navigate('Register')
                }
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

export default LoginScreen;


