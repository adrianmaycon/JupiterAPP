import React, { Component } from 'react';
import { Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import { Image, StyleSheet } from 'react-native';

const blogList = [
  {
    id: 1,
    title: 'Meditação para a ansiedade',
    author: 'Alana Santos',
    author_avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5y3L0URosUA7io9O_b5YmaCqC80dokrs5NimYJ8xZ8o7UploB',
    cover_image_url: 'https://i.ytimg.com/vi/mzAqzL2XIQA/maxresdefault.jpg',
    likes: '1210 curtidas',
    time: '02 de Junho',
    descricion: 'Curso de meditações exclusivas e muito especiais. Escrevam para Feito com amor. Namaste. '
  },

  {
    id: 2,
    title: 'Meditação para alcançar um objetivo',
    author: 'Alana Santos',
    author_avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5y3L0URosUA7io9O_b5YmaCqC80dokrs5NimYJ8xZ8o7UploB',
    cover_image_url: 'https://i.ytimg.com/vi/MHCA7Ndvw2U/maxresdefault.jpg',
    likes: '950 curtidas',
    time: '06 de Junho',
    descricion: 'Curso de meditações exclusivas e muito especiais. Escrevam para Feito com amor. Namaste. '
  },
  {
    id: 3,
    title: 'Ansiedade: o que é e como combatê-la',
    author: 'Alana Santos',
    author_avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5y3L0URosUA7io9O_b5YmaCqC80dokrs5NimYJ8xZ8o7UploB',
    cover_image_url: 'https://i.ytimg.com/vi/eVY9JqBiEkA/maxresdefault.jpg',
    likes: '530 curtidas',
    time: '10 de Junho',
    descricion: 'Curso de meditações exclusivas e muito especiais. Escrevam para Feito com amor. Namaste. '
  },

];

export default class PagePostsAcompanhante extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'true'
    };
  }
  render() {
    return (
      <Content >
        {blogList.map(blog => (
          <Card key={blog.id} style={{ flex: 0 }}>
            <CardItem >
              <Left>
                <Thumbnail source={{ uri: blog.author_avatar }} />
                <Body>
                  <Text>{blog.title}</Text>
                  <Text note>{blog.author}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{ uri: blog.cover_image_url }} style={{ height: 200, width: '100%', flex: 1, marginBottom: 10 }} />
                <Text>{blog.descricion}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>{blog.likes}</Text>
                </Button>
              </Left>
              <Right>
                <Text note>{blog.time}</Text>
              </Right>
            </CardItem>
          </Card>))}
      </Content>
    );
  }
}
const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: "#7159C1",
  },
  header: {
    backgroundColor: "#7159C1",
  },
});