import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, Text } from 'react-native';

import { Container } from './styles/MainStyle';
import { Header, Label, InputText, Button, Footer } from './styles/LoginStyle';
import firebase from 'react-native-firebase';

// const logo_url = 'http://www.cedipte-psicologia.com/images/site/psicologia-01.png';

const logo_url = 'https://raw.githubusercontent.com/adrianmaycon/MeInforme/master/src/screens/img/Logo.png';

export default class Login extends Component {

    state = {
        email: '',
        password: '',
        isAuthenticated: false,
    };

    login = async () => {
        const { email, password } = this.state;

        try {
            const user = await firebase.auth()
                .signInWithEmailAndPassword(email, password);
            this.setState({ isAuthenticated: true })
            console.warn("SUCESSOOOO", user);
            
        } catch (err) {
            console.warn('aqui', err);
        }
    }

    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <Container>
                <KeyboardAvoidingView behavior="position" enabled >

                    <Header>
                        <Image source={{ uri: logo_url }} style={{ width: 150, height: 150 }} />
                    </Header>

                    <Label>E-mail</Label>
                    <InputText
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />

                    <Label>Senha</Label>
                    <InputText
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    {/* () => this.props.navigation.navigate('App') */}
                    <Button onPress={this.login}>
                        <Text style={{ fontSize: 20 }}>LOGIN</Text>
                    </Button>

                    {this.state.isAuthenticated ? <Text>Logado com Sucesso</Text> : null}

                    <Footer>
                        <Text style={{ fontSize: 18, color: '#fff' }}>Esqueceu a Senha?</Text>
                    </Footer>

                </KeyboardAvoidingView>
            </Container>
        );
    }
}
