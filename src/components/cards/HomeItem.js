import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppStyle from '../../../AppStyle';
import LightButton from '../LightButton';
import SectionHeader from '../SectionHeader';

export default class HomeItem extends React.Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <SectionHeader text={this.props.sectionText} />

                <View style={{ marginVertical: 8 }}>{this.props.content}</View>

                {this.props.buttonText && this.props.onPress ? (
                    <LightButton
                        text={this.props.buttonText}
                        onPress={this.props.onPress}
                    />
                ) : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
});
