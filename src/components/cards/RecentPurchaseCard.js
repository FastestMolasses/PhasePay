import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import AppStyle from '../../../AppStyle';
import BasicCard from '../cards/BasicCard';

export default class RecentPurchaseCard extends React.Component {
    render() {
        return (
            <BasicCard onPress={this.props.onPress}>
                <View style={styles.headerContainer}>
                    <Image
                        source={require('../../imgs/BankBuilding_icon.png')}
                        style={{
                            borderRadius: 13,
                            width: 25,
                            height: 25,
                        }}
                    />

                    <View style={styles.subContainer}>
                        <Text style={styles.storeNameText}>{this.props.storeName}</Text>
                        <Text style={styles.spentPrice}>{this.props.spent}</Text>
                    </View>
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
    subContainer: {
        marginLeft: 10,
    },
    storeNameText: {
        fontSize: 18,
    },
    spentPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: AppStyle.darkGrey
    },
});
