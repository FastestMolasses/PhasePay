import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import AppStyle from '../../../AppStyle';

export default class BasicCard extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={[styles.container, this.props.style]}
                onPress={this.props.onPress}
                activeOpacity={(this.props.noOpacity ? 1 : 0.2)}
            >
                {this.props.children}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppStyle.white,
        borderRadius: AppStyle.borderRadius,
        padding: 20,
        width: 250,
        height: 75,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.15,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
});
