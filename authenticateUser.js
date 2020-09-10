import { } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import utils from './utils/asyncStorage'
import {connect} from 'react-redux'


export default function AuthenticateUser() {
    const [isAuthenticated, setIsAuthnticated] = useState(false)
    const [isSignedIn, setIsSignedIn] = useState(false)
    const [isRegistered, setRegistered] = useState(false)

    useEffect(() => { //compo did mount
        if(utils.isUserRegistered){
            setRegistered(true)
        }
    }, []);
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="papayawhip"
                barStyle="dark-content"
                hidden={false}
                translucent={false}
            />
            <Text>LOGIN</Text>
            <Text>SIGNUP</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tomato',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
