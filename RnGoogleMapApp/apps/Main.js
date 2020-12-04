/* eslint-disable prettier/prettier */
import React, { Component, useEffect, useState } from 'react';
import { View, Text, Platform, PermissionsAndroid, StyleSheet, Button, Linking } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import GetLocation from 'react-native-get-location';
import MyMarker from './components/MyMarker';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initLocation: {
                latitude: 37.578046,
                longitude: 126.976889,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            },
            pinLocation: {
                latitude: 35.156021,
                longitude: 129.059480,
            },
        };
    }
    componentDidMount() {
        console.log(`init`);
        console.log(this.state.initLocation);
    }
    
    async getCurrentLocation(){
      await GetLocation
        .getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
            console.log(`current`);
            console.log(location);
            var tmpLocation = {
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.012,
                longitudeDelta: 0.012,
            };
            this.setState({ initLocation: tmpLocation });
        })
        .catch(error => {
            const { code, message } = error;
            console.error(code, message);
        });
    }
    onLocationClick = () => {
        this.getCurrentLocation();
    }
 
    onMarkerClick = () => {
        Linking.openURL('http://www.busanit.ac.kr/m');
    };

    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.map}
                    initialLocation={this.state.initLocation}
                    region={this.state.initLocation} >
                    <Marker
                        coordinate={this.state.pinLocation} 
                        title="부산IT교육센터"
                        description="부산인재개발원 서면 교육원"
                        image={require('./images/pin.png')}
                        onCalloutPress={this.onMarkerClick} />
                        
                         {(this.state.initLocation.latitude) ? (
                            <MyMarker 
                                location={this.state.initLocation}
                                title="내위치" />
                        ) : (
                            <View />
                        )
                        }
                </MapView>
                <Button title='현재위치' onPress={this.onLocationClick} />
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    map: {
        flex: 1,
        marginBottom: 10,
    },
});
