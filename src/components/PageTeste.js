import React, { Component } from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { Container, Content, Icon, Button, View, Fab, } from 'native-base';

export default class PageTeste extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 'true'
        };
    }

    render() {
        return (
            <Container>
                <Content>
                <View style={styles.PostInfoAcomp}>
                    <View style={styles.LinhaP} />
                    <View style={styles.LinhaP} />
                    <View style={styles.LinhaG} />
                    <View style={styles.LinhaG} />
                </View>
                <View style={styles.PostInfoAcomp}>
                    <View style={styles.LinhaP} />
                    <View style={styles.LinhaP} />
                    <View style={styles.LinhaG} />
                    <View style={styles.LinhaG} />
                </View>
                <View style={styles.PostInfoAcomp}>
                    <View style={styles.LinhaP} />
                    <View style={styles.LinhaP} />
                    <View style={styles.LinhaG} />
                    <View style={styles.LinhaG} />
                </View>
                <View style={styles.PostInfoAcomp}>
                    <View style={styles.LinhaP} />
                    <View style={styles.LinhaP} />
                    <View style={styles.LinhaG} />
                    <View style={styles.LinhaG} />
                </View>
                <View style={styles.PostInfoAcomp}>
                    <View style={styles.LinhaP} />
                    <View style={styles.LinhaP} />
                    <View style={styles.LinhaG} />
                    <View style={styles.LinhaG} />
                </View>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    PostInfoAcomp: {
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        width: '96%',
        height: 110,
        marginLeft: '2%',
        marginRight: '2%',
        marginTop: '2%',
        padding: 5,
        borderRadius: 4,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 2,
    },
    LinhaP: {
        width: '55%',
        height: 15,
        margin: 6,
        borderRadius: 5,
        marginRight: 11,
        alignSelf: 'flex-end',
        backgroundColor: '#D4D4D4',
    },
    LinhaG: {
        margin: 6,
        width: '95%',
        height: 15,
        borderRadius: 5,
        backgroundColor: '#D4D4D4',
    }
});