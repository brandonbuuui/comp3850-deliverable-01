import React from 'react';
import { Platform, View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppColours from '../config/AppColours';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={35}/>}
            <TextInput style={styles.input} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3E3790',
        flexDirection: 'row',
        borderRadius: 20,
        marginVertical: 18,
        padding: 15,
        alignSelf: 'center',
        width: '93%'
    },
    input: {
        fontSize:20,
        fontFamily: Platform.OS === 'android' ? "monospace": "Avenir-Roman",
        color: AppColours.white,
        marginLeft: 30,
        flex: 1
    },
    icon: {
        color: AppColours.white
    }
})
export default AppTextInput;