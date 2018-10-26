import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

import AppStyle from '../../AppStyle';
import HomeCard from '../components/HomeCard';

export default class Home extends React.Component {
    constructor() {
        super();

        this.curDate = undefined;
    }

    componentWillMount() {
        // Save the current date in a readable format
        let date = new Date();
        this.curDate = date.toLocaleDateString('en-US', {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.dateText}>{this.curDate}</Text>
                <HomeCard sectionText='Recent Purchase' buttonText='View All' />                
                <HomeCard sectionText='Places Nearby' />
                <HomeCard  />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 22,
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
});
