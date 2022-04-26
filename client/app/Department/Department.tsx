import React from 'react';
import {Headline, Scroll, TabContainer} from "../../styles/styles";
import Article from "./Article";
import {articles} from "../../data/data";

const Department: React.FC = () => {
    return (
        <TabContainer style={{paddingLeft: 5, paddingTop: 10}}>
            <Headline>News</Headline>
            <Scroll contentContainerStyle={{
                paddingBottom: 50,
                flexGrow: 1
            }}>
                {articles.map(el => <Article key={el.name} article={el}/>)}
            </Scroll>
        </TabContainer>
    );
};

export default Department;