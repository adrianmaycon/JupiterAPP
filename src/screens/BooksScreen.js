import React, { Component } from 'react';
import { Container, View, Icon, Tab, Tabs, TabHeading } from 'native-base';
import { StyleSheet } from 'react-native';
import Books from '../components/Books';
import Teste from '../components/PageTeste';

export default class BooksScreen extends Component {
    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };
    render() {
        return (
                <Container>
                    <View style={styles.container}>
                        <Tabs>
                            <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="book" /></TabHeading>}>
                                <Books />
                            </Tab>
                            <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="download" /></TabHeading>}>
                                <Teste />
                            </Tab>
                        </Tabs>
                    </View>
                </Container>
        );
    }
}

const styles = StyleSheet.create({
    tabHeading: {
        backgroundColor: "#7159C1",
    },
    header: {
        backgroundColor: "#7159C1",
        alignItems: 'center'
    },
    container: {
        flex: 1,
    },
});
