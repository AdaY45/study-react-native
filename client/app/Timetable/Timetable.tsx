import React from 'react';
import {Scroll, TabContainer} from "../../styles/styles";
import Day from "./Day";
import {timetable} from "../../data/data";

const Timetable: React.FC = () => {
    return (
        <TabContainer style={{ flex: 1}}>
            <Scroll contentContainerStyle={{
                paddingBottom: 50,
                flexGrow: 1
            }}>
                {timetable.map((el, i) => <Day key={i + Math.random()} day={el.day} subjects={el.subjects}/>)}
            </Scroll>
        </TabContainer>
    );
};

export default Timetable;