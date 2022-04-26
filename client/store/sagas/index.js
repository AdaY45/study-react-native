import {spawn, call, fork, all, delay, take, select, takeEvery, put, actionChannel} from 'redux-saga/effects';
import {loginUser, registerUser, genNewToken, setLocalStorage} from "../api/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as NavigationService from '../../services/NavigationService';

function* register(action) {
    const response = yield call(registerUser, action.body)
    console.log("response saga", response)
    if (response.user) {
        console.log("user saga", response.user)
        yield all([put({type: "SET_USER", payload: response.user}), put({
            type: "SET_TOKEN",
            payload: response.token
        }), put({type: "SET_ERROR", payload: {}}), put({type: "SET_AUTH", payload: true})]);
        yield call(setLocalStorage, response.token);

        NavigationService.navigate('Home');
    } else {
        yield put({type: "SET_ERROR", payload: {type: 'register', message: response.error.message}})
    }
}

function* login(action) {
    const response = yield call(loginUser, action.body);
    if (response.user) {
        yield all([put({type: "SET_USER", payload: response.user}), put({
            type: "SET_TOKEN",
            payload: response.token
        }), put({type: "SET_ERROR", payload: {}}), put({type: "SET_AUTH", payload: true})]);
        yield call(setLocalStorage, response.token);

        NavigationService.navigate('Home');
    } else {
        yield put({type: "SET_ERROR", payload: {type: 'login', message: response.error.message}})
    }
}

function* generateNewToken(action) {
    // const getToken = state => state.token;
    // const token = yield select(getToken);
    const response = yield call(genNewToken, action.token);

    if (response.token) {
        yield all[put({
            type: "SET_TOKEN",
            payload: response.token
        }), put({type: "SET_ERROR", payload: {}}), put({type: "SET_AUTH", payload: true})];
    } else {
        yield put({type: "SET_ERROR", payload: {type: 'register', message: response.error.message}})
    }
}


// export function* loadOnAction() {
//     const channel = yield actionChannel('REGISTER');
//
//     while (true) {
//         yield take(channel);
//
//         yield call(register);
//     }
// }

export default function* rootSaga() {
    while (true) {
        yield watchAuth();
    }
}

// export function* workerSaga() {
//     const data = yield register();
//
//     yield put({type: "SET_USER", payload: data.users})
// }

export function* watchAuth() {
    yield takeEvery('REGISTER', register);
    yield takeEvery('LOGIN', login);
    yield takeEvery('NEW_TOKEN', generateNewToken);
}