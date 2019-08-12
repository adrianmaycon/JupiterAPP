import React, { Component } from 'react';
import { Container, View, Icon, Tab, Tabs, TabHeading } from 'native-base';
import { StyleSheet } from 'react-native';
import MapaScreen from '../components/MapScreen';

export default class MapScreen extends Component {
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
                            <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="map" /></TabHeading>}>
                                <MapaScreen />
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
