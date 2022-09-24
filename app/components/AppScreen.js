import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native'; 

function AppScreen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={styles.paddingView}> 
                {children}
            </View>
        </SafeAreaView>
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