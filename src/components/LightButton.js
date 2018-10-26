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
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: AppStyle.white,
        marginVertical: 5,
        padding: 10,
        borderRadius: AppStyle.borderRadius,
    },
    text: {
        fontSize: 22,
    },
});
