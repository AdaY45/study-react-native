import React from 'react';
import {ParaContainer, NewsImage, NewsContainer, Text, NewsHead, TabContainer} from "../../styles/styles";

interface Article {
    name: string,
    img: string,
    description: string
}

const Article: React.FC<{ article: Article }> = ({article}) => {

    return (
        <ParaContainer>
            <NewsContainer>
                <NewsImage source={{uri: article.img}}/>
                <NewsHead>{article.name}</NewsHead>
                <Text style={{textAlign: "left"}}>{article.description}</Text>
            </NewsContainer>
        </ParaContainer>
    );
};

export default Article;