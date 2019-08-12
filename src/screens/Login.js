import React, { Component } from 'react';
import { Text, Image, KeyboardAvoidingView, Alert, PermissionsAndroid, Platform } from 'react-native'

import UserService from '../services/UserService'

import { Container } from './styles/MainStyle'
import { Header, Label, InputText, Button, Footer } from './styles/LoginStyle'
import Loading from '../components/Loading'

const logo_url = 'https://raw.githubusercontent.com/adrianmaycon/MeInforme/master/src/screens/img/Logo.png';

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
        <KeyboardAvoidingView behavior="position" enabled>

          <Loading ref={e => this.loading = e} text="Autenticando" />

          <Header>
            <Image source={{ uri: logo_url }} style={{ width: 150, height: 150 }} />
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
      </Container>
    );
  }
}