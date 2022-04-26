import React from 'react';
import {Container, DayContainer, Headline} from "../../styles/styles";
import { Subject } from "../../interfaces/interfaces";
import Para from "./Para";

const Day: React.FC<{ day: string, subjects: Subject[] }> = ({day, subjects}) => {
    return (
        <Container>
            <DayContainer>
                <Headline>{day}</Headline>
                {subjects.map(el => <Para key={Math.random()}{...el}/>)}
            </DayContainer>
        </Container>
    );
};

export default Day;