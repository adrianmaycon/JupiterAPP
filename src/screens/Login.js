import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, Text } from 'react-native';

import { Container } from './styles/MainStyle';
import { Header, Label, InputText, Button, Footer } from './styles/LoginStyle';

const logo_url = 'http://www.cedipte-psicologia.com/images/site/psicologia-01.png';

export default class Login extends Component {

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
                    <InputText />

                    <Label>Senha</Label>
                    <InputText />

                    <Button>
                        <Text style={{ fontSize: 20 }}>LOGIN</Text>
                    </Button>

                    <Footer>
                        <Text style={{ fontSize: 18, color: '#fff' }}>Esqueceu a Senha?</Text>
                    </Footer>

                </KeyboardAvoidingView>
            </Container>
        );
    }
}
