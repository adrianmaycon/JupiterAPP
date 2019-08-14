import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Content, Container } from 'native-base';
import BookService from '../../services/BookService';

const Image_url = 'https://i.ytimg.com/vi/kCPEMHmLk64/maxresdefault.jpg';
const Image_url2 = 'https://s2.glbimg.com/pJtCpavG6RI4BOuUekzLwXeclXo=/0x0:1060x520/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b58693ed41d04a39826739159bf600a0/internal_photos/bs/2018/T/i/BfoHEPR6uNgyKhNk7ZBw/cvv.jpg';

export default class Instituicoes extends React.Component {


    state = {
        Livros: [],
    };

    componentDidMount() {
        BookService.getBooks(livro => {
            let oldLivros = this.state.Livros
            oldLivros.push(livro)
            this.setState({ Livros: oldLivros })
        })

    }

    render() {
        // console.warn('Livros: ',this.state.Livros);
        return (
            <Container>
                <Content>
                    <View style={styles.PostBooks}>

                        <View style={styles.viewImage}>
                            <Image
                                style={styles.Image}
                                source={{ uri: Image_url }}
                            />
                        </View>

                        <View style={styles.viewInfo}>
                            <Icon name="home" size={17} color="#4D4D4D"><Text> Instituto Bia Dote</Text></Icon>
                            <Icon name="phone" size={17} color="#4D4D4D"><Text> (85) 98401 - 5318</Text></Icon>
                        </View>
                        <View style={styles.viewInfoP}>
                            <Icon name="map-marker" size={17} color="#4D4D4D"><Text> Rua alvaro de melo, 1415 - Fortaleza/CE</Text></Icon>
                        </View>
                    </View>

                    <View style={styles.PostBooks}>

                        <View style={styles.viewImage}>
                            <Image
                                style={styles.Image}
                                source={{ uri: Image_url2 }}
                            />
                        </View>

                        <View style={styles.viewInfo}>
                            <Icon name="home" size={17} color="#4D4D4D"><Text> CVV - Fortaleza</Text></Icon>
                            <Icon name="phone" size={17} color="#4D4D4D"><Text> (85) 98401 - 5318</Text></Icon>
                        </View>
                        <View style={styles.viewInfoP}>
                            <Icon name="map-marker" size={17} color="#4D4D4D"><Text> Rua alvaro de melo, 1415 - Fortaleza/CE</Text></Icon>
                        </View>
                    </View>

                    <View style={styles.PostBooks}>

                        <View style={styles.viewImage}>
                            <Image
                                style={styles.Image}
                                source={{ uri: Image_url }}
                            />
                        </View>

                        <View style={styles.viewInfo}>
                            <Icon name="home" size={17} color="#4D4D4D"><Text> Instituto Bia Dote</Text></Icon>
                            <Icon name="phone" size={17} color="#4D4D4D"><Text> (85) 98401 - 5318</Text></Icon>
                        </View>
                        <View style={styles.viewInfoP}>
                            <Icon name="map-marker" size={17} color="#4D4D4D"><Text> Rua alvaro de melo, 1415 - Fortaleza/CE</Text></Icon>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    viewImage: {
        flex: 8,
    },
    Image: {
        width: '100%',
        height: 175,
        borderRadius: 3
    },
    viewInfo: { 
        flex: 1, 
        marginLeft: 6, 
        marginRight: 6, 
        marginTop: 4, 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },
    PostBooks: {
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        width: '96%',
        height: 250,
        marginLeft: '2%',
        marginRight: '2%',
        marginTop: '2%',
        marginBottom: '2%',
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
    viewInfoP: { 
        flex: 1, 
        marginLeft: 7, 
        marginTop: 2, 
        marginBottom: 5 
    }
});