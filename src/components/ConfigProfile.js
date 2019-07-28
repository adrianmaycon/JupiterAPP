import React, { Fragment } from 'react';
import { Container, Header, Left, Right, Body, Title, Button, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import { Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const ConfigProfile = () => (
    <Content style={styles.scroll}>
                <View style={styles.postP}>
                    <View style={styles.Icon}>
                        <Icon name={'user-circle'} size={90} color="#010" ></Icon>
                    </View>
                    <View style={styles.Info}>
                        <Text style={{ fontSize: 25, color: '#000' }}>Adrian Maycon</Text>
                        <Icon name={'envelope-o'} size={13} color="#010" style={{ height: 25, marginTop: 10 }} ><Text style={{ fontSize: 12 }}> mayconlemos1010@gmail.com</Text></Icon>
                    </View>
                </View>
                <View style={styles.bigInput}>
                    <View style={styles.box}>
                        <Text style={styles.title}>Nome Completo</Text>
                        <Text style={styles.body}>Adrian Maycon Lemos Silva</Text>
                    </View>
                </View>
                <View style={styles.fields}>
                    <View style={styles.mediumHigherInput}>
                        <View style={styles.box}>
                            <Text style={styles.title}>Sexo</Text>
                            <Text style={styles.body}>Masculino</Text>
                        </View>
                    </View>
                    <View style={styles.smallInput}>
                        <View style={styles.box}>
                            <Text style={styles.title}>Idade</Text>
                            <Text style={styles.body}>18</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bigInput}>
                    <View style={styles.box}>
                        <Text style={styles.title}>Instituição</Text>
                        <Text style={styles.body}>EEEP Professor César Campelo</Text>
                    </View>
                </View>
                <View style={styles.fields}>
                    <View style={styles.mediumInput}>
                        <View style={styles.box}>
                            <Text style={styles.title}>Matrícula</Text>
                            <Text style={styles.body}>201902216529</Text>
                        </View>
                    </View>
                    <View style={styles.mediumInput}>
                        <View style={styles.box}>
                            <Text style={styles.title}>CPF</Text>
                            <Text style={styles.body}>079.788.733-27</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bigInput}>
                    <View style={styles.box}>
                        <Text style={styles.title}>E-mail</Text>
                        <Text style={styles.body}>mayconlemos1010@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.fields}>
                    <View style={styles.mediumHigherInput}>
                        <View style={styles.box}>
                            <Text style={styles.title}>Cidade</Text>
                            <Text style={styles.body}>Fortaleza</Text>
                        </View>
                    </View>
                    <View style={styles.smallInput}>
                        <View style={styles.box}>
                            <Text style={styles.title}>UF</Text>
                            <Text style={styles.body}>CE</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bigInput}>
                    <View style={styles.box}>
                        <Text style={styles.title}>Endereço</Text>
                        <Text style={styles.body}>Rua Zacarias Florindo</Text>
                    </View>
                </View>
                <View style={styles.fields}>
                    <View style={styles.mediumHigherInput}>
                        <View style={styles.box}>
                            <Text style={styles.title}>Bairro</Text>
                            <Text style={styles.body}>Granja Portugal</Text>
                        </View>
                    </View>
                    <View style={styles.smallInput}>
                        <View style={styles.box}>
                            <Text style={styles.title}>Numero</Text>
                            <Text style={styles.body}>14</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bigInput}>
                    <View style={styles.box}>
                        <Text style={styles.title}>Acompanhante</Text>
                        <Text style={styles.body}>Ana Beatriz Santiago</Text>
                    </View>
                </View>
                <View style={styles.bigInput}>
                    <View style={styles.box}>
                        <Text style={styles.title}>Instituição</Text>
                        <Text style={styles.body}>Faculdade Federal do Ceará - UFC</Text>
                    </View>
                </View>

            </Content>
);

export default ConfigProfile;

const styles = StyleSheet.create({
    tabHeading: {
        backgroundColor: "#7159C1",
    },
    header: {
        backgroundColor: "#7159C1",
    },
    container: {
        flex: 1,
    },
    scroll: {
        width: '100%',
    },
    bigInput: {
        display: 'flex',
        justifyContent: 'center',
        width: '90%',
        marginLeft: "5%",
        marginRight: "5%"
    },
    fields: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginLeft: "5%"
    },
    mediumInput: {
        width: '49%',
    },
    mediumHigherInput: {
        width: '66%',
    },
    smallInput: {
        width: '32%',
    },
    postP: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 110,
        width: '95%',
        padding: 5,
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: '4%',
        marginRight: '4%',
    },
    textoPost: {
        marginLeft: 10,
        marginTop: 5,
        fontSize: 20
    },
    Icon: {
        flex: 3,
        alignItems: 'center',

    },
    Info: {
        flex: 7,
        display: 'flex',
        flexDirection: 'column',
        height: '90%',
        alignItems: 'center',
        alignContent: 'space-around',
    },
    box: {
        width: '100%',
        paddingHorizontal: 5,
        paddingBottom: 4,
        marginBottom: 16,
        flexDirection: 'column',
        borderColor: '#D3D3D3',
        borderBottomWidth: 1,
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 13
    },
    body: {
        color: '#696969',
        fontSize: 15
    }
});