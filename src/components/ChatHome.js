import React, { Fragment } from 'react';
import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import { Image, StyleSheet } from 'react-native';

const messages = [
    {
        id: 1,
        name: 'Adrian Maycon',
        avatar_url: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-1/p160x160/56298422_2254259688180656_3949145699081256960_n.jpg?_nc_cat=108&_nc_ht=scontent-gru2-2.xx&oh=4a21b635c07fbe9bd0c4c5dea7e4a09e&oe=5D9BFFE6',
        last_message: 'Oi, Posso te ajudar?',
        time: '18:20 PM'
    },
    {
        id: 2,
        name: 'Ana Beatriz',
        avatar_url: 'https://avatars1.githubusercontent.com/u/37213246?s=460&v=4',
        last_message: 'Terminei de ler HP!!',
        time: '16:01 PM'
    },
    {
        id: 3,
        name: 'Adrian Maycon',
        avatar_url: 'https://lh3.googleusercontent.com/-LkTxlojEZ1I/Wx0QbXg076I/AAAAAAAAArg/e8D7ffaR4P4mjyOujTx2xUt3n95_eW_5wCEwYBhgL/w140-h140-p/31252881_2025702074369753_4004679540319191040_n.jpg',
        last_message: 'Estou bem ^^',
        time: '10:12 AM'
    },
];

const ChatHome = () => (
    <Fragment>
        <List>
            {messages.map(message => (
                <ListItem avatar key={message.id}>
                    <Left>
                        <Thumbnail source={{ uri: message.avatar_url }} />
                    </Left>
                    <Body>
                        <Text>{message.name}</Text>
                        <Text note>{message.last_message}</Text>
                    </Body>
                    <Right>
                        <Text note>{message.time}</Text>
                    </Right>
                </ListItem>
            ))}
        </List>
        <Fab
            direction="up"
            position="bottomRight"
            style={{ backgroundColor: "#7159C1" }}
        >
            <Icon type="FontAwesome" name="plus" />
        </Fab>
    </Fragment>
);

export default ChatHome;

const styles = StyleSheet.create({
    tabHeading: {
        backgroundColor: "#7159C1",
    },
    header: {
        backgroundColor: "#7159C1",
    },
    container: {
        flex: 1,
    }
});