import React from 'react';
import {Container, DayContainer} from "../../styles/styles";
import {IStore, IUser} from "../../interfaces/interfaces";
import {useSelector} from "react-redux";
import {View, Text} from "react-native";

const Students: React.FC<{name: string}> = ({name}) => {
    return (
        <Container>
            <View style={{backgroundColor: "#fff", marginBottom: 10}}>
                <DayContainer>
                    <Text style={{paddingLeft: 10, fontSize: 14}}>{name}</Text>
                </DayContainer>
            </View>
        </Container>
    );
};

export default Students;