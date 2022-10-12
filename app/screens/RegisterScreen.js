import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Constants from 'expo-constants';

import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import DataManager from '../config/DataManager';

const schema = Yup.object().shape(
    {
        email: Yup.string().required().email(),
        password: Yup.string().required().min(4).max(12),
        password: Yup.string().required().max(50),
    }
);

let data = DataManager.getInstance();

function RegisterScreen({navigation}) {

    return (
        <AppScreen style={styles.container}>
            <ImageBackground
                style={styles.background}>
            
            <View style={styles.introContainer}>
            <AppText style={styles.titleMsg}>
                    Getting Started
            </AppText>

            <AppText style={styles.introMsg}>
                    Create an account to continue
            </AppText>
            </View>
            <Formik
                initialValues={{email:'', password: '', username: ''}}
                onSubmit = {values => {
                    data.addUser(values.email, values.password, values.username)
                    navigation.navigate("Login")
                }}
                >
            {({handleChange, handleSubmit, errors, setFieldTouched, touched})=> (
                <>
                 <View style={styles.inputContainer}>
                 <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="account" 
                        placeholder="First Name"
                        placeholderTextColor="#BFB7B7"
                        textContentType="name-given"
                        onChangeText =  {handleChange('name-given')}
                        onBlur = {() => setFieldTouched('name-given')}
                        />
                        {touched.username}
                        <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="account" 
                        placeholder="Last Name"
                        placeholderTextColor="#BFB7B7"
                        textContentType="name-family"
                        onChangeText =  {handleChange('name-family')}
                        onBlur = {() => setFieldTouched('name-family')}
                        />
                        {touched.username}
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="account" 
                        placeholder="Create your username"
                        placeholderTextColor="#BFB7B7"
                        textContentType="username"
                        onChangeText =  {handleChange('username')}
                        onBlur = {() => setFieldTouched('username')}
                        />
                        {touched.username}
                <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email" 
                    placeholder="Enter your email"
                    placeholderTextColor="#BFB7B7"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    onBlur = {() => setFieldTouched('email')}
                    onChangeText =  {handleChange('email')}
                    />
                    {touched.email}
                <AppTextInput 
                    icon="lock" 
                    placeholder="Create your password" 
                    placeholderTextColor="#BFB7B7"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText = {handleChange('password')}
                    onBlur = {() => setFieldTouched('password')}
                    />
                    {touched.password}
            </View>
            <View style={styles.registerButton}>
                 <AppButton
                    title="Sign Up" color = "lightblue" onPress={handleSubmit}>
                </AppButton>
            </View>
            </>
            )}
            </Formik>
            </ImageBackground>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#262163',
    },
    introContainer: {
        marginTop: Constants.statusBarHeight,
    },
    titleMsg: {
        color: "#ffff",
        marginTop: 30,
        marginLeft: 10,
        fontSize: 40,
        fontWeight: '900',
        textAlign: 'left', 
    },
    introMsg: {
        color: "#BFB7B7",
        fontSize: 20,
        marginTop: 20,
        marginLeft: 15,
        fontWeight: '600',
        textAlign: 'left', 
    },
    inputContainer: {
        marginTop: 70,
    },
    registerButton: {
        marginTop: 40,
        width: '68%',
        alignSelf: 'center',
    }
})

export default RegisterScreen;