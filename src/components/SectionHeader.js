import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppStyle from '../../AppStyle';

export default class SectionHeader extends React.PureComponent
{
    render()
    {
        return (
            <View>
                <Text style={styles.subText}>{this.props.text}</Text>
                <View style={styles.line}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    subText: {
        fontSize: 24,
        fontWeight: '600',
    },
    line: {
        borderBottomColor: AppStyle.lightGrey,
        borderBottomWidth: 2,
        marginTop: 5,
    }
});
