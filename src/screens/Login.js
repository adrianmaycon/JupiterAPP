import React, { Component } from 'react';
import { Text, StyleSheet, Image, ImageBackground, KeyboardAvoidingView, Alert, PermissionsAndroid, Platform } from 'react-native'

import UserService from '../services/UserService'

import { Container } from './styles/MainStyle'
import { Header, Label, InputText, Button, Footer } from './styles/LoginStyle'
import Loading from '../components/Loading'

const logo_url = 'https://raw.githubusercontent.com/adrianmaycon/ImagensProjetos/master/Pisiqu%C3%AA/Logo/IconSemFundo.png';
const fundo_url = 'https://cdn5.f-cdn.com/contestentries/1465388/27319887/5c437042565d6_thumb900.jpg';

export default class Login extends Component {

  state = {
    login: '',
    password: ''
  }

  static navigationOptions = {
    header: null,
  }

  async componentDidMount() {
    if (Platform.OS = "android")
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
  }

  errorLogin = () => (
    Alert.alert(
      'Atenção!',
      'E-mail e/ou senha inválidos',
      [{
        text: 'OK',
        onPress: () => setTimeout(() => {
          this.props.navigation.pop()
          this.loading.setModalVisible(false)
        }, 500)
      }],
      { cancelable: false }
    )
  )

  handleLogin = async () => {
    const { email, password } = this.state;

    try {

      if (!email || !password) {
        this.errorLogin()
      } else {
        this.loading.setModalVisible(true)
        await UserService.login(email, password)
          .then(() => this.props.navigation.navigate('App'))
          .catch(() => this.errorLogin())
      }

    } catch (e) {
      console.warn("Erro login: ", e);
    } finally {
      this.loading.setModalVisible(false)
    }
  }

  render() {
    return (
      <Container>
        <ImageBackground source={{ uri: fundo_url }} style={styles.ImageBackground}>
          <KeyboardAvoidingView behavior="position" enabled>

            <Loading ref={e => this.loading = e} text="Autenticando" />

            <Header>
              <Image source={{ uri: logo_url }} style={{ width: 250, height: 250 }} />
            </Header>

            <Label>E-mail</Label>
            <InputText onChangeText={email => this.setState({ email })} value={this.state.email} />

            <Label>Senha</Label>
            <InputText secureTextEntry onChangeText={password => this.setState({ password })} value={this.state.password} />

            <Button onPress={this.handleLogin} >
              <Text style={{ fontSize: 20, color: '#000' }}>LOGIN</Text>
            </Button>

            <Footer>
              <Text style={{ fontSize: 18, color: '#FFF' }}>Esqueceu a Senha?</Text>
            </Footer>

          </KeyboardAvoidingView>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    width: null,
    height: null,
  }
});