import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import AppStyle from './AppStyle';
import Home from './src/pages/HomePage';
import Receipt from './src/pages/ReceiptsPage';
import Settings from './src/pages/SettingsPage';

export const MainTabNav = TabNavigator(
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
            inactiveTintColor: AppStyle.lightGrey,
            showLabel: false,
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
