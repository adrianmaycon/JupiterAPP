import React, { Component } from 'react';
import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Drawer, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import { Image, StyleSheet } from 'react-native';
import PagePostsAcompanhante from '../components/PagePostsAcompanhante';
import PageAcompanhante from '../components/PageAcompanhante';
import PageAchievements from '../components/PageAchievements';
import PageTeste from '../components/PageTeste';

const logo_url = 'http://www.meinforme.com.br/img/logotela.png';

export default class App extends Component {
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
                        <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="heartbeat" /></TabHeading>}>
                            <PagePostsAcompanhante />
                        </Tab>
                        <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="user-md" /></TabHeading>}>
                            <PageTeste />
                        </Tab>
                        <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="trophy" /></TabHeading>}>
                            <PageAchievements />
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
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});