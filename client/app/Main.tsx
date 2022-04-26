import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import { navigationRef } from '../services/NavigationService';
import Home from "./Home/Home";

const Stack = createStackNavigator();

function Main() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Main;
