import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";

export interface IRegisterValues {
    name: string,
    email: string,
    password: string
}

export interface ILoginValues {
    email: string,
    password: string
}

export interface IStore {
    token: string,
    user: IUser,
    error: IError,
    isAuth: boolean
}

export interface IUser {
    id: string,
    name: string,
    email: string,
}

export interface IError {
    type: string,
    message: string
}

export interface IProps {
    navigation: NavigationScreenProp<NavigationState>;
}

export interface MetadataObj {
    [key: string]: string | undefined;
}

export type RootStackParamList= {
    Header: undefined
}

export interface Subject {
    time: string;
    subject: string;
}