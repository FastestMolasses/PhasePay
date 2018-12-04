import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';
import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import AppStyle from './AppStyle';
import Home from './src/pages/HomePage';
import Receipt from './src/pages/ReceiptsPage';
import Settings from './src/pages/SettingsPage';
import Registration from './src/pages/RegistrationPage';
import AuthLoadingScreen from './src/pages/AuthLoading';

const MainTabNav = createBottomTabNavigator(
    {
        HomePage: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./src/imgs/Home_icon.png')}
                        style={[styles.icon, { tintColor }]}
                    />
                ),
            },
        },
        ReceiptPage: {
            screen: Receipt,
            navigationOptions: {
                tabBarLabel: 'Receipts',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./src/imgs/Paper_icon.png')}
                        style={[styles.icon, { tintColor }]}
                    />
                ),
            },
        },
        SettingsPage: {
            screen: Settings,
            navigationOptions: {
                tabBarLabel: 'Settings',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./src/imgs/Settings_icon.png')}
                        style={[styles.icon, { tintColor }]}
                    />
                ),
            },
        },
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: AppStyle.primaryColor,
            inactiveTintColor: AppStyle.darkGrey,
            showLabel: true,
            showIcon: true,
            style: {
                backgroundColor: AppStyle.white,
                borderTopWidth: 0,
                paddingTop: 10,
            },
            labelStyle: { fontSize: 12 },
            indicatorStyle: { backgroundColor: 'transparent' },
        },
    },
);

const imgSize = 26;
const styles = StyleSheet.create({
    icon: {
        width: imgSize,
        height: imgSize,
    },
});

export default createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: MainTabNav,
        Auth: Registration
    },
    {
        initialRouteName: 'AuthLoading',
    }
);
