import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableOpacity
} from 'react-native';

export class Geo {
     state = {
        location: null
    };

    findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const location = JSON.stringify(position);

                this.setState({ location });
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };

    render() {
        this.state.location
        return (
            this.findCoordinates
                    
               
        );
    }
}

  /*  return (

        this.state.location
        /*<View style={styles.container}>
            <TouchableOpacity onPress={this.findCoordinates}>
                <Text style={styles.welcome}>Quais s�o minhas coordenadas?</Text>
                <Text>Location: {this.state.location}</Text>
            </TouchableOpacity>
        </View>
    );*/
 
    

/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B0C4DE'

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
*/