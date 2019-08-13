import React from 'react';
import { StyleSheet, TouchableHighlight, Modal, View, Text, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Content, Container } from 'native-base';
import firebase from 'react-native-firebase';
import Pdf from 'react-native-pdf';
import BookService from '../services/BookService';

// const ListBook = [
//     {
//         id: 1,
//         title: 'Harry Potter e a Pedra Filosofal',
//         description: 'é o primeiro dos sete livros da série de fantasia Harry Potter, um maravilhoso livro escrito pela grande J. K. Rowling...',
//         image_url: 'https://www.traca.com.br/capas/1118/1118164.jpg',
//         pdf_url: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.K.-Rowling-1-Harry-Potter-e-A-Pedra-Filosofal.pdf'
//     },
//     {
//         id: 2,
//         title: 'Harry Potter e a Câmara Secreta',
//         description: 'é um filme de fantasia e aventura britânico-americano dirigido por Chris Columbus e distribuído pela Warner Bros. Pictures...',
//         image_url: 'http://2.bp.blogspot.com/-u8AASzRfe3g/TjFhYrdDskI/AAAAAAAAAGE/VoISRbq3FJU/s1600/Harry+Potter+e+a+C%25C3%25A2mara+Secreta.jpg',
//         pdf_url: 'https://clubedeleituradogestar.files.wordpress.com/2016/09/harry-potter-e-a-camara-secreta-j-k-rowling.pdf'
//     },
//     {
//         id: 3,
//         title: 'Harry Potter e o Prisioneiro de ..',
//         description: 'é um filme britânico-americano de 2004, dirigido por Alfonso Cuarón, baseado no livro de mesmo nome escrito por J. K. Rowling...',
//         image_url: 'https://images-na.ssl-images-amazon.com/images/I/81QnqHwRiUL.jpg',
//         pdf_url: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.K.-Rowling-3-Harry-Potter-e-o-Prisioneiro-de-Askaban.pdf'
//     },
//     {
//         id: 4,
//         title: 'Harry Potter e o Cálice de Fogo',
//         description: ' é um filme britânico-norte-americano de 2005, dirigido por Mike Newell e distribuído pela grande Warner Bros. Pictures...',
//         image_url: 'http://statics.livrariacultura.net.br/products/capas_lg/535/3056535.jpg',
//         pdf_url: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.K.-Rowling-4-Harry-Potter-e-O-Calice-de-Fogo.pdf'
//     },
//     {
//         id: 5,
//         title: 'Harry Potter e a Ordem da Fênix',
//         description: ' é um filme britânico-americano de 2007, sendo a adaptação cinematográfica do quinto livro da série Harry Potter, escrita por J. K. Rowling...',
//         image_url: 'http://statics.livrariacultura.net.br/products/capas_lg/728/3128728.jpg',
//         pdf_url: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.K.-Rowling-5-Harry-Potter-e-A-Ordem-da-Fenix.pdf'
//     },
//     {
//         id: 6,
//         title: 'Harry Potter e o Enigma do Pr..',
//         description: 'é um filme britânico-americano de fantasia de 2009, dirigido por David Yates, baseado no livro homônimo de J. K. Rowling...',
//         image_url: 'http://statics.livrariacultura.net.br/products/capas_lg/238/1140238.jpg',
//         pdf_url: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.K.-Rowling-6-Harry-Potter-e-O-Enigma-do-Principe.pdf'
//     },
//     {
//         id: 7,
//         title: 'Harry Potter e as Relíquias da ..',
//         description: 'é um romance de fantasia escrito pela britânica J. K. Rowling. É o sétimo e último livro da maravilhosa série Harry Potter...',
//         image_url: 'https://images-na.ssl-images-amazon.com/images/I/51A6k0YGQOL._SX331_BO1,204,203,200_.jpg',
//         pdf_url: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.K.-Rowling-7-Harry-Potter-e-As-Reliquias-da-Morte.pdf'
//     },
// ];


export default class Books extends React.Component {


    state = {
        Livros: [],
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    componentDidMount() {
        BookService.getBooks(livro => {
            let oldLivros = this.state.Livros
            oldLivros.push(livro)
            this.setState({ Livros: oldLivros })

            
        })

    }


    render() {
        console.warn('Livros: ',this.state.Livros);
        return (
            <Container>
                <Content>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                    // onRequestClose={closeModal()}
                    >
                        <View style={{ backgroundColor: '#323236', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ backgroundColor: 'white', width: '90%', height: '90%', display: 'flex', padding: 5, borderRadius: 5 }}>
                                <Text style={{ textAlign: 'center', marginVertical: 10 }}>Harry Potter</Text>
                                <Pdf
                                    source={{ uri: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.K.-Rowling-4-Harry-Potter-e-O-Calice-de-Fogo.pdf', cache: true }}
                                    onLoadComplete={(numberOfPages, filePath) => {
                                        console.log(`número de páginas: ${numberOfPages}`);
                                    }}
                                    onPageChanged={(page, numberOfPages) => {
                                        console.log(`pagina atual: ${page}`);
                                    }}
                                    onError={(error) => {
                                        console.log(error);
                                    }}
                                    style={styles.pdf} />

                                <TouchableHighlight style={{ width: '100%', height: 35, marginTop: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 8, backgroundColor: "#7159C1" }}
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text style={{ color: '#FFF' }}>Fechar</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>

                    {this.state.Livros.map(list => (
                        console.warn(list),

                            <View style={styles.PostBooks} key={list.id}>

                                <View style={{ flex: 2 }}>
                                    <Image
                                        style={{ width: 67, height: 100, borderRadius: 3 }}
                                        source={{ uri: list.image_url }}
                                    />
                                </View>

                                <View style={{ flex: 7, alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 18 }}>{list.title}</Text>
                                    <Text style={{ fontSize: 10, marginLeft: 2, marginBottom: 6 }}>{list.description}</Text>
                                    <TouchableHighlight style={styles.BotaoBook}
                                        onPress={() => {
                                            this.setModalVisible(true);
                                        }}>
                                        <Text style={{ color: '#FFF', marginRight: 3, marginBottom: 3 }}>
                                            Começar a leitura
                            </Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                    ))}
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    pdf: {
        flex: 1,
        borderRadius: 12
    },
    BotaoBook: {
        width: '100%',
        height: 30,
        borderRadius: 4,
        marginBottom: '3%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#7159C1",
    },
    PostBooks: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        width: '96%',
        height: 110,
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
});