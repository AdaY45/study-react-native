import React from 'react';
import {Scroll, TabContainer} from "../../styles/styles";
import Student from "./Student";
import {students} from "../../data/data";

const Students: React.FC = () => {
    return (
        <TabContainer>
            <Scroll contentContainerStyle={{
                paddingBottom: 50,
                flexGrow: 1
            }}>
                {students.map(el => <Student key={el.firstName + Math.random()} {...el}/>)}
            </Scroll>
        </TabContainer>
    );
};

export default Students;