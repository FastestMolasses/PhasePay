import React from 'react';
import {StyleSheet} from 'react-native';

import { createStackNavigator } from "react-navigation";

import AppStyle from '../../AppStyle';

import {Start} from './Registration/Start.js';
import {License} from './Registration/License.js';
import {Camera} from './Registration/Camera.js';
import {Camera2} from './Registration/Camera2.js';
import {Payment} from './Registration/Payment.js';
import {Card} from './Registration/Card.js';
import {Paypal}from './Registration/Paypal.js';
import {Username}from './Registration/Username.js';
import {Finish} from './Registration/Finish.js';
import {Profile} from './Registration/Profile.js';
import {Login} from './Registration/Login.js';
import Loading from './AuthLoading.js';

export default createStackNavigator({
    Start: {
        screen: Start
    },
    License: {
        screen: License
    },
    Camera: {
        screen: Camera
    },
    Profile: {
        screen: Profile
    },
    Camera2: {
        screen: Camera2
    },
    Payment: {
        screen: Payment
    },
    Card: {
        screen: Card
    },
    Paypal: {
        screen: Paypal
    },
    Username: {
        screen: Username
    },
    Finish: {
        screen: Finish
    },
    Login: {
        screen: Login
    },
    Loading: {
        screen: Loading
    }
},
    {
        initialRouteName: 'Start',
        headerMode: 'none',
    });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 0,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    dateText: {
        fontSize: 32,
        fontWeight: '800',
        marginVertical: 10,
    },
    subText: {
        fontSize: 24,
        fontWeight: '600',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    }
});