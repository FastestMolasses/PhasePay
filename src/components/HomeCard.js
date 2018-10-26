import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppStyle from '../../AppStyle';
import LightButton from './LightButton';
import SectionHeader from './SectionHeader';

export default class HomeCard extends React.Component
{
    render()
    {
        return (
            <View style={styles.container}>
                <SectionHeader text={this.props.sectionText} />
                {
                    this.props.buttonText ?
                        <LightButton text={this.props.buttonText} /> :
                        null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
});
