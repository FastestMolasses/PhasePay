import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import BasicCard from './BasicCard';
import AppStyle from '../../AppStyle';

export default class RecentPurchaseCard extends React.Component {
    render() {
        return (
            <BasicCard onPress={this.props.onPress}>
                <View style={styles.headerContainer}>
                    <Image
                        source={require('../imgs/BankBuilding_icon.png')}
                        style={{
                            borderRadius: 13,
                            width: 25,
                            height: 25,
                        }}
                    />
                    <Text style={styles.storeNameText}>{this.props.store}</Text>
                </View>
            </BasicCard>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    storeNameText: {
        fontSize: 18,
    },
});
