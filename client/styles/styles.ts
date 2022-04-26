import styled from "styled-components/native";
import {loginColors} from "./colors";

const flexRow = `
    flex: 1;
    flex-direction: row
`;

const flexColumn = `
    flex:1;
    flex-direction: column
`;

export const HeaderContainer = styled.View`
  ${flexRow};
  justify-content: center;
  flex-grow: 0;
  flex-basis: 0;
  width: 100%;
  height: 10%;
`;

export const Navigation = styled.Pressable`
  width: auto;
  height: 45px;
  margin: 10px 5px;
  top: 0;
  text-align: center;
  padding: 10px;
  background: ${loginColors["gray"]};
  border: none;
`;

export const HeaderButton = styled.View`
  text-align: center;
`;

export const HeaderText = styled.Text`
  text-align: center;
  font-weight: 700;
  color: #fff;
`;

export const HomeContainer = styled.View`
  height: 90%;
`;

export const TabContainer = styled.View`
  ${flexColumn};
  margin: 10px;
  height: 700px;
  top: 50px;
`;

export const Container = styled.View`
`;

export const StudentContainer = styled.View`
  ${flexRow};
  justify-content: space-evenly;
  background: #fff;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  ${flexColumn};
  text-align: center;
`;

export const DayContainer = styled.View`
  height: auto;
  margin: 15px 0;
  width: 100%;
`;

export const ParaContainer = styled.View`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  margin: 5px;
`;

export const Time = styled.Text`

`;

export const Scroll = styled.ScrollView`
  height: 500px;
  width: 100%;
  margin: 10px;
  align-self: center;
  padding: 20px 5px;
  padding-top: 0;
`;

export const Headline = styled.Text`
  font-size: 18px;
  text-align: left;
  margin-bottom: 15px;
  font-weight: 700;
`;

export const NewsContainer = styled.View`
  width: 100%;
`;

export const NewsImage = styled.Image`
  width: 100%;
  height: 200px;
`;

export const NewsHead = styled.Text`
  font-size: 18px;
  font-weight: 700;
  margin: 10px 0;
`;

export const Error = styled.Text`
  color: red;
`;

