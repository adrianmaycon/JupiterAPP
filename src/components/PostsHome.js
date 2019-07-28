import React, { Fragment } from 'react';
import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import { Image, StyleSheet } from 'react-native';

const blogList = [
    {
        id: 1,
        title: 'Ansiedade: o que é e como combatê-la',
        author: 'Adrian Maycon',
        author_avatar: 'https://lh3.googleusercontent.com/-LkTxlojEZ1I/Wx0QbXg076I/AAAAAAAAArg/e8D7ffaR4P4mjyOujTx2xUt3n95_eW_5wCEwYBhgL/w140-h140-p/31252881_2025702074369753_4004679540319191040_n.jpg',
        cover_image_url: 'https://www.laoliphant.com.br/wp-content/uploads/2016/12/ansiedade-post-2.jpg',
        likes: 290,
        comments: 29,
        time: '10 de Junho'
    },

    {
        id: 2,
        title: 'Óleo de Alecrim Contra Depressão',
        author: 'Adrian Maycon',
        author_avatar: 'https://lh3.googleusercontent.com/-LkTxlojEZ1I/Wx0QbXg076I/AAAAAAAAArg/e8D7ffaR4P4mjyOujTx2xUt3n95_eW_5wCEwYBhgL/w140-h140-p/31252881_2025702074369753_4004679540319191040_n.jpg',
        cover_image_url: 'https://smperfumes.com.br/wp-content/uploads/2018/05/depressao-aromaterapia-oleo-de-alecrim-1024x536.jpg',
        likes: 950,
        comments: 19,
        time: '06 de Junho'
    },

    {
        id: 3,
        title: 'O Passado e o Futuro da Ansiedade...',
        author: 'Adrian Maycon',
        author_avatar: 'https://lh3.googleusercontent.com/-LkTxlojEZ1I/Wx0QbXg076I/AAAAAAAAArg/e8D7ffaR4P4mjyOujTx2xUt3n95_eW_5wCEwYBhgL/w140-h140-p/31252881_2025702074369753_4004679540319191040_n.jpg',
        cover_image_url: 'http://img.psy.co/anxiety/anxiety-2019928_1920-wokandapix-cc0-pixabay.png',
        likes: 1210,
        comments: 102,
        time: '02 de Junho'
    },
];

const PostsHome = () => (
    <Content>
        {blogList.map(blog => (
            <Card key={blog.id}>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: blog.author_avatar }} />
                        <Body>
                            <Text>{blog.title}</Text>
                            <Text note>{blog.author}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{ uri: blog.cover_image_url }} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>{blog.likes}</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>{blog.comments}</Text>
                        </Button>
                    </Body>
                    <Right>
                        <Text note>{blog.time}</Text>
                    </Right>
                </CardItem>
            </Card>))}
    </Content>
);

export default PostsHome;

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