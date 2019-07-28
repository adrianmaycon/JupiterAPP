import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Content, } from 'native-base';
import Pdf from 'react-native-pdf';

export default class ViewPDF extends React.Component {
    render() {
        const source = {uri:'https://crp04.org.br/wp-content/uploads/2017/09/Guia_do_Psicologo_2016_sem_marca.pdf',cache:true};
        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf'};

        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,..."};

        return (
            <View style={styles.container}>
              <View style={styles.tela}>

                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}/>
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
        width: '85%',
        height: '100%',
        borderBottomWidth: 3,
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderColor: "#000",
        borderRadius: 15
    }
});