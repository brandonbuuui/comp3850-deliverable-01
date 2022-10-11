import React from 'react';
import { View, StyleSheet, ImageBackground, Platform, Image, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import DataManager from '../config/DataManager';
import AppColours from '../config/AppColours';

const blurRadiusValue = Platform.OS === 'android' ? 0.2 : 1.3

const schema = Yup.object().shape(
    {
        email: Yup.string().required().email(),
        password: Yup.string().required().min(4).max(12),
    }
);

const users = [
    {
        id: "user1",
        name:"Winter Soldier",
        email:"winter.soldier@gmail.com",
        password:"1922",
        image: require('../assets/bucky.jpg')
    },
    {
        id: "user2",
        name:"Steve Rogers",
        email:"captain.steve@yahoo.com",
        password:"1945",
        image: require('../assets/cap.jpeg')
    },
];

const validateUser = ({email, password}) => {
    return(
        users.filter((user) => user.email === email && user.password === password).length>0
    )
};

const getUser = ({email}) => {
    return users.find((user) => user.email === email);
}

const createUser = ({email}) => {
    let commonData = DataManager.getInstance();
    let userID = getUser({email}).id;
    commonData.setUserID(userID);
}

let data = DataManager.getInstance();

function LoginScreen({navigation}) {

    return (
        <AppScreen>
            <ImageBackground
                style={styles.background}>

                <View style={styles.mmLogo}>
                    <Image 
                    style={{
                        height: 200,
                        width: 220
                        }}
                    source={require("../assets/MMLogo.png")}></Image>
                    <AppText style={{color: AppColours.white, fontSize: 30, fontWeight: 'bold'}}>Mentoring's Men</AppText>
                </View>

                <Formik
                initialValues={{email:'', password: '',}}
                onSubmit = {(values, {resetForm}) => {
                    data.login(values.email, values.password);
                    if (data.loggedIn) {
                        resetForm()
                        navigation.navigate("TabScreens")
                    } else {
                        resetForm()
                        alert("Invalid Login Details")
                    }
                    // if(validateUser(values)) {
                    //     resetForm();
                    //     createUser(values);
                    //     navigation.navigate("TabScreens", {
                    //         screen: "Home",
                    //         params: {
                    //             screen: "Home",
                    //             params: {
                    //                 paramEmail: values.email,
                    //                 paramName: getUser(values).name,
                    //                 paramImage: getUser(values).image,
                    //             },
                    //         }
                    //     }
                    // );
                    // }
                    // else {
                    //     resetForm();
                    //     alert("Invalid Login Details")
                    // }
                }}
                validationSchema={schema}
            >
            {({values, handleChange, handleSubmit, errors, setFieldTouched, touched})=> (
                <>
                    <View style={styles.inputContainer}>
                    <AppTextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email" 
                        placeholder="Email Address"
                        placeholderTextColor="#BFB7B7"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        value={values.email}
                        onBlur = {() => setFieldTouched('email')}
                        onChangeText =  { handleChange('email')}
                        />
                        {touched.email && <AppText style={{color:'red'}}>
                            {errors.email}
                        </AppText>}
                    <AppTextInput 
                        icon="lock" 
                        placeholder="Password" 
                        placeholderTextColor="#BFB7B7"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        value={values.password}
                        onBlur = {() => setFieldTouched('password')}
                        onChangeText = { handleChange('password')}
                        />
                        {touched.password && <AppText style={{color:'red'}}>
                            {errors.password}
                        </AppText>}
                </View>
                <AppText style={styles.forgotPass}> Forgot Password? </AppText>
                <View style={styles.signinButton}>
                    <AppButton 
                        title="Sign In" color = "lightblue" onPress={handleSubmit}>
                    </AppButton>
                </View>
                </>
            )}
            </Formik>

                <View style={styles.SignupContainer}>
                <AppText style={styles.introMsg}> New here? 
                    <Text style={styles.signupMsg} onPress={()=> navigation.navigate("Register")}>  Sign up </Text> 
                instead </AppText>
                </View>
            </ImageBackground>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#262163',
    },
    mmLogo: {
        marginTop: 10,
        display: "flex",
        resizeMode: 'center',
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    inputContainer: {
        marginTop: 30
    },
    signinButton: {
        marginTop: 80,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '68%',
        alignSelf: 'center',
    },
    forgotPass: {
        color: "#ffff",
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'right', 
        marginRight: 20
    },
    introMsg: {
        color: "#BFB7B7",
        fontSize: 20,
        marginTop: 116,
        width: '100%',
        fontWeight: 'bold',
        textAlign: 'center', 
    },
    signupMsg: {   
        color: "white",
        marginLeft: 0,
        fontSize: 20,
    }
})
export default LoginScreen;