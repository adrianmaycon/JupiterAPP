import React, { Component } from 'react';
import { Container, View, Icon, Tab, Tabs, TabHeading } from 'native-base';
import { StyleSheet } from 'react-native';
import ConfigProfile from '../components/ConfigProfile';
import ViewPDF from '../components/ViewPDF';

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
                            <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="user" /></TabHeading>}>
                                <ConfigProfile />
                            </Tab>
                            <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="file-text-o" /></TabHeading>}>
                                <ViewPDF />
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
