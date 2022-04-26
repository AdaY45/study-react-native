import React, {useState} from 'react';
import {HomeContainer} from "../../styles/styles";
import {IProps} from "../../interfaces/interfaces";
import Header from "../Header/Header";
import Department from "../Department/Department";
import Students from "../Students/Students";
import Timetable from "../Timetable/Timetable";
import Subjects from "../Subjects/Subjects";


const Home: React.FC<IProps> = () => {
    const [press, setPress] = useState("department");

    return (
        <HomeContainer>
            <Header press={press} setPress={setPress}/>
            {press === 'department' && <Department />}
            {press === 'students' && <Students />}
            {press === 'timetable' && <Timetable />}
            {press === 'subjects' && <Subjects />}
        </HomeContainer>
    );
};

export default Home;