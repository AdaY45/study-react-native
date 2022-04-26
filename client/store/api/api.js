import {call} from "redux-saga/effects";
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiCalls = async (requestConfig) => {
    try {
        const header = {"Content-Type": "application/json"};
        const response = await fetch(`http://10.0.2.2:5000${requestConfig.url}`, {
            method: requestConfig.method ? requestConfig.method : 'GET',
            body: JSON.stringify(requestConfig.body),
            headers: requestConfig.headers ? {...header, ...requestConfig.headers} : header,
        });

        const data = await response.json();

        return data;
    } catch (e) {
        console.error(e)
    }
}

export const registerUser = async (body) => {
    return await apiCalls({url: "/api/auth/register", method: "POST", body});
}

export const loginUser = async (body) => {
    return await apiCalls({url: "/api/auth/login", method: "POST", body});
}

export const genNewToken = async (token) => {
    return await apiCalls({url: "/api/auth/newToken", headers: {authorization: `Bearer ${token}`}});
}

export const setLocalStorage = async (token) => {
    await AsyncStorage.setItem("userData", JSON.stringify({
        token: token
    }));
}