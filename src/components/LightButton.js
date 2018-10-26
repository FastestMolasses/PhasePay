import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import AppStyle from '../../AppStyle';

export default class LightButton extends React.PureComponent {
    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={this.props.onPress}
            >
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: AppStyle.white,
        borderRadius: AppStyle.borderRadius,
        shadowOffset: { width: 0, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },
    text: {
        fontSize: 22,
    },
});
