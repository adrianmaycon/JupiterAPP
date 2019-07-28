import React, { Component } from "react";
import { Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Card, CardItem, Accordion } from "native-base";
import { Image, StyleSheet } from 'react-native';

const dataArray = [
    {
        id: 1,
        title: "O que faço com minhas conquis..?",
        content: "Você pode personalizar seu app, atravez delas você pode tbm compartilhar seus emblemas e ganhar mais pontos!!!"
    },
    {
        id: 2,
        title: "Ganho alguma coisa com elas?",
        content: "Simmm!! você ganha pontos e desbloquia varias novas ações pro seu Pet de estimação."
    },
    {
        id: 3,
        title: "Como Faço para receber mais?",
        content: "Faça as metas que tem para você, e crie suas proprias metas de acordo com seu nivel!"
    }
];

const trophy = [
    {   
        id: 1,
        name: 'Você atingiu o nivel 3!',
        avatar_url: 'https://image.freepik.com/free-vector/company-achievement-background_1132-2.jpg',
        last_message: 'É hora de construir uma diferença . .',
        time: '18:20 PM'
    },
];

const PageAchievements = () => (
    <Content padder>
        <Card>
            <CardItem>
                <Body>
                    <Image source={{ uri: 'https://png.pngtree.com/thumb_back/fw800/back_pic/03/62/13/0557a99c8559fd2.jpg' }} style={{ height: 100, width: '100%', flex: 1, marginBottom: 10 }} />
                </Body>
            </CardItem>
        <Text transparent>     Última Conquista..</Text>
        {trophy.map(trophy => (
            <List key={trophy.id}>
                <ListItem thumbnail>
                    <Left>
                        <Thumbnail square source={{ uri: trophy.avatar_url }} />
                    </Left>
                    <Body>
                        <Text>{trophy.name}</Text>
                        <Text note numberOfLines={1}>{trophy.last_message}</Text>
                    </Body>
                    <Right>
                        <Text note>{trophy.time}</Text>
                    </Right>
                </ListItem>
            </List>
        ))}
        </Card>
        <Accordion
            style={{marginTop: 10}}
            key={dataArray.id}
            dataArray={dataArray}
            headerStyle={{ backgroundColor: "#b7daf8" }}
            contentStyle={{ backgroundColor: "#ddecf8" }}
        />

    </Content>
);

export default PageAchievements;
