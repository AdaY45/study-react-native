import React from 'react';
import {Container, Text, StudentContainer} from "../../styles/styles";
import {IProps, IStore, IUser} from "../../interfaces/interfaces";
import {useSelector} from "react-redux";
import {View} from "react-native";

interface IStudent {
    firstName: string;
    lastName: string;
    faculty: string;
    group: string;
    form: string
}

const Students: React.FC<IStudent> = ({firstName, lastName, faculty, group, form}) => {
    const user: IUser = useSelector((store: IStore) => store.user);
    return (
        <Container>
            <View style={{height: 100}}>
                <StudentContainer>
                    <Text>{firstName} {lastName}</Text>
                    <Text>{faculty}</Text>
                    <Text>{group}</Text>
                    <Text>{form}</Text>
                </StudentContainer>
            </View>
        </Container>
    );
};

export default Students;