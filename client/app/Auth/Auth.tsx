import React, {useState} from "react";
import {StyleSheet} from "react-native";
import {View, Text, TextInput, Button} from "react-native";
import AppLoading from "expo-app-loading";
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';

import {
    useFonts,
    Manrope_400Regular,
    Manrope_600SemiBold,
    Manrope_700Bold,
} from "@expo-google-fonts/manrope";
import {loginColors} from "../../styles/colors";

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Auth: React.FC<{
    type: string, navigation: NavigationScreenProp<NavigationState, NavigationParams>
}> = (props) => {
    let [fontsLoaded] = useFonts({
        Manrope_400Regular,
        Manrope_600SemiBold,
        Manrope_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{props.type}</Text>
                {props.children}
                {props.type === 'Register' ?
                    (
                        <View style={styles.auth}>
                            <Text style={styles["auth-text"]}>Already have the account?</Text>
                            <View style={styles.button}>
                                <Button title='Login' color="#565656" onPress={() => {
                                    props.navigation.navigate('Login')
                                }}/>
                            </View>
                        </View>) :
                    <View style={styles.auth}>
                        <Text style={styles["auth-text"]}>Don't have an account?</Text>
                        <View style={styles.button}>
                            <Button title='Register' onPress={() => {
                                props.navigation.navigate('Register')
                            }} color={loginColors["gray"]}/>
                        </View>
                    </View>}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: "100%",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        fontFamily: "Manrope_400Regular",
        padding: 50,
        paddingRight: 10,
    },
    text: {
        fontSize: 30,
        paddingBottom: 50,
        textAlign: "center",
        fontFamily: "Manrope_600SemiBold",
    },
    logo: {
        position: "absolute",
        top: 50,
        alignSelf: "center",
    },
    form: {
        fontFamily: "Manrope_400Regular"
    },
    label: {
        paddingBottom: 10,
        fontSize: 20
    },
    input: {
        fontSize: 15,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 20
    },
    auth: {
        marginTop: 20,
    },
    "auth-text": {
        fontSize: 15,
        textAlign: "center",
        padding: 10,
    },
    button: {
        paddingLeft: 50,
        paddingRight: 50
    }
});

export default Auth;
