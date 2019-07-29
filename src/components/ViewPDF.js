import React from 'react';
import { StyleSheet, TouchableHighlight, Modal, View, Text, Image } from 'react-native';
import { Content, } from 'native-base';
import Pdf from 'react-native-pdf';

const logo_url = 'https://www.unimedcuritiba.com.br/wps/wcm/connect/1c551bfd-dee4-44d0-ad4d-4addb8726b35/ajuda.png?MOD=AJPERES&ContentCache=NONE&CACHE=NONE&CACHEID=ROOTWORKSPACE-1c551bfd-dee4-44d0-ad4d-4addb8726b35-lLkP4nZ';

export default class ViewPDF extends React.Component {

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {

        const closeModal = () => {
            navigation.navigate('Dashboard')
        }

        const source = { uri: 'https://crp04.org.br/wp-content/uploads/2017/09/Guia_do_Psicologo_2016_sem_marca.pdf', cache: true };
        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf'};

        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,..."};


        return (
            <View style={styles.container}>
                <View style={styles.tela}>

                <Image source={{ uri: logo_url }} style={{ width: '90%', height: 300, margin: 20 }} />

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('O modal foi fechado.');
                        }}>
                        <View style={{ backgroundColor: 'rgba(0,0,0,.5)', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ backgroundColor: 'white', width: '90%', height: '90%', display: 'flex', padding: 5, borderRadius: 5 }}>
                                <Text style={{ textAlign: 'center', marginVertical: 10 }}>Leia o guia de ajuda</Text>
                                <Pdf
                                    source={source}
                                    onLoadComplete={(numberOfPages, filePath) => {
                                        console.log(`number of pages: ${numberOfPages}`);
                                    }}
                                    onPageChanged={(page, numberOfPages) => {
                                        console.log(`current page: ${page}`);
                                    }}
                                    onError={(error) => {
                                        console.log(error);
                                    }}
                                    style={styles.pdf} />

                                <TouchableHighlight style={{width: '100%', height: 35, marginTop: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 8, backgroundColor: "#7159C1"}}
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text style={{color: '#FFF'}}>Fechar</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>

                    <TouchableHighlight style={{width: '100%', height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 8, backgroundColor: "#7159C1"}}
                        onPress={() => {
                            this.setModalVisible(true);
                        }}>
                        <Text style={{color: '#FFF', fontSize: 12}}>Abrir Guia de Ajuda</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 15,
        paddingTop: 15
    },
    pdf: {
        flex: 1,
        borderRadius: 12
    },
    tela: {
        //width:Dimensions.get('window').width,
        width: '95%',
        height: '100%',
    }
});