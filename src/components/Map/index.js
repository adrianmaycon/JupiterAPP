import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

export default class Map extends Component {
    state = {
        region: null,
    };
    async componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                this.setState({
                    region: {
                        latitude,
                        longitude,
                        latitudeDelta: 0.03,
                        longitudeDelta: 0.3
                    }
                });
            }, //Sucesso
            () => { }, //Erro
            {
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 1000,
            }
        )
    }

    render() {
        const { region } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <MapView style={{ flex: 1 }} region={region} showsUserLocation={true} loadingEnabled>

                    <Marker coordinate={{ latitude: -3.74420122, longitude: -38.51002246 }} pinColor="#f68121">
                        <Callout>
                            <Text>Instituto Bia Dote</Text>
                        </Callout>
                    </Marker>
                    <Marker coordinate={{ latitude: -3.75091917, longitude: -38.5314104 }} pinColor="#f68121">
                        <Callout>
                            <Text>CVV - Centro de Valorização da Vida</Text>
                        </Callout>
                    </Marker>
                    <Marker coordinate={{ latitude: -3.75289975, longitude: -38.53915125 }} pinColor="#f68121">
                        <Callout>
                            <Text>CAPS Geral IV</Text>
                        </Callout>
                    </Marker>
                </MapView>
            </View>
        );
    }
}
