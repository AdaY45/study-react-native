import React from 'react';
import {Scroll, TabContainer} from "../../styles/styles";
import Subject from "./Subject";
import {subjects} from "../../data/data";

const Subjects: React.FC = () => {
    return (
        <TabContainer>
            <Scroll contentContainerStyle={{
                paddingBottom: 50,
                flexGrow: 1
            }}>
                {subjects.map(el => <Subject key={el} name={el}/>)}
            </Scroll>
        </TabContainer>
    );
};

export default Subjects;