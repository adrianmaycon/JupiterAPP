import React, { Fragment } from 'react';
import { Content, View, Text } from 'native-base';
import { StyleSheet } from 'react-native';


const ConfigProfile = () => (
    <Content style={styles.scroll}>
        <View><Text>Mapa</Text></View>
    </Content>
);

export default ConfigProfile;

const styles = StyleSheet.create({
    scroll: {
        width: '100%',
    },
});