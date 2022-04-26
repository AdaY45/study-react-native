import React from 'react';
import {HeaderContainer, Navigation, HeaderButton, HeaderText} from "../../styles/styles";
import {loginColors} from "../../styles/colors";

const Header: React.FC<{press: string, setPress: React.Dispatch<React.SetStateAction<string>> }> = ({press, setPress}) => {
    const style = {backgroundColor: loginColors["login-btn"], color: "#fff"};
    return (
        <HeaderContainer>
            <Navigation style={press === 'department' && style} onPress={() => {
                setPress('department');
            }}>
                <HeaderButton>
                    <HeaderText>Department</HeaderText>
                </HeaderButton>
            </Navigation>

            <Navigation style={press === 'students' && style} onPress={() => {
                setPress('students');
            }}>
                <HeaderButton>
                    <HeaderText>Students</HeaderText>
                </HeaderButton>
            </Navigation>

            <Navigation style={press === 'timetable' && style} onPress={() => {
                setPress('timetable');
            }}>
                <HeaderButton>
                    <HeaderText>Timetable</HeaderText>
                </HeaderButton>
            </Navigation>

            <Navigation style={press === 'subjects' && style} onPress={() => {
                setPress('subjects');
            }}>
                <HeaderButton>
                    <HeaderText>Subjects</HeaderText>
                </HeaderButton>
            </Navigation>
        </HeaderContainer>
    );
};

export default Header;