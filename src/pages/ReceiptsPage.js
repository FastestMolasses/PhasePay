import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default class Receipts extends React.Component {
    render()
    {
        return (
            <SafeAreaView style={styles.container}>
                <Text>
                    Hello World
                </Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
