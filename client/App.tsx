import React from 'react';
import {
    useFonts,
    Manrope_400Regular,
    Manrope_600SemiBold,
    Manrope_700Bold,
} from "@expo-google-fonts/manrope";
import AppLoading from "expo-app-loading";
import {Provider} from "react-redux";
import store from "./store/index";
import Main from "./app/Main";

export default function App() {
    let [fontsLoaded] = useFonts({
        Manrope_400Regular,
        Manrope_600SemiBold,
        Manrope_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }

}

