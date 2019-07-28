import React from 'react'
import { Alert } from 'react-native'
import { Container, Left, Content, List, ListItem, Text, Right, Icon, Header, Thumbnail, Body, Title } from 'native-base';

const logo_url = 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-1/p160x160/56298422_2254259688180656_3949145699081256960_n.jpg?_nc_cat=108&_nc_ht=scontent-gru2-2.xx&oh=4a21b635c07fbe9bd0c4c5dea7e4a09e&oe=5D9BFFE6';

export default DrawerContainer = ({ navigation }) => {

  handlePress = () => {
    Alert.alert(
        'Atenção!',
        'Realmente deseja sair do aplicativo?',
        [
            { text: 'Cancelar', onPress: () => navigation.navigate('Dashboard') },
            { text: 'OK', onPress: () => navigation.navigate('Login') },
        ],
        { cancelable: true }
    )
}

  return (
    <Container>
      <Header androidStatusBarColor="#573ea8" hasTabs>
        <Left>
          <Thumbnail small source={{ uri: logo_url }} />
        </Left>
        <Body>
          <Title>Adrian Maycon</Title>
        </Body>
      </Header>
      <Content>
        <List>
          <ListItem onPress={() => navigation.navigate('Dashboard')}> 
            <Left>
              <Text>Principal</Text>
            </Left>
            <Right>
              <Icon name="ios-arrow-forward" />
            </Right>
          </ListItem>
          <ListItem >
            <Left>
              <Text>Conversas</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Documentos</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Minhas Publicações</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Favoritos</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Ajuda 24H</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={() => navigation.navigate('ProfileScreen')}>
            <Left>
              <Text>Meus Dados</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Configurações</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={this.handlePress}>
            <Left>
              <Text>Sair da conta</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}