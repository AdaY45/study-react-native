import React from 'react';
import {Container, Text, ParaContainer, Time} from "../../styles/styles";
import {Subject} from "../../interfaces/interfaces";
import {View} from "react-native";

const Para: React.FC<Subject> = ({time, subject}) => {
    return (
        <Container>
            <View style={{height: 70}}>
                <ParaContainer>
                    <Time>{time}</Time>
                    <Text>{subject}</Text>
                </ParaContainer>
            </View>
        </Container>
    );
};

export default Para;