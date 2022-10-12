import React from 'react';
import {View, StyleSheet} from 'react-native'; 
import Constants from 'expo-constants';

function AppScreen({children, style}) {
    return (
        <View style={[styles.screen, style]}>
            <View style={styles.paddingView}> 
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    paddingView: {
        flex: 1,
    }
})
export default AppScreen;