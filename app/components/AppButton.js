import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppColours from '../config/AppColours';

function AppButton({title, color="other", onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, {backgroundColor:AppColours[color]}]}>
                <Text style={styles.text}> {title} </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        padding: 14,
        borderRadius: 15,
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: AppColours.black,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    text: {
        fontSize: 22,
        fontWeight: '600',
        color: 'white'
    }
})

export default AppButton;