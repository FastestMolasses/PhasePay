import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import AppStyle from '../../../AppStyle';
import BasicCard from '../cards/BasicCard';

const imageHeight = 100;
const contentHeight = 80;

export default class RecentPurchaseCard extends React.Component {
    render() {
        return (
            <BasicCard
                onPress={this.props.onPress}
                style={{ height: imageHeight + contentHeight, flex: 1 }}
            >
                <View
                    style={{
                        borderTopLeftRadius: AppStyle.borderRadius,
                        borderTopRightRadius: AppStyle.borderRadius,
                        overflow: 'hidden',
                        alignSelf: 'center',
                        height: imageHeight,
                        position: 'absolute',
                        top: 0,
                    }}
                >
                    <Image
                        style={{
                            width: 250,
                            height: imageHeight,
                        }}
                        source={this.props.storeSource}
                    />
                </View>

                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={this.props.storeLogo}
                    />
                    <View style={styles.subContainer}>
                        <Text style={styles.storeNameText}>
                            {this.props.storeName}{' '}
                            <Text style={{ color: 'grey' }}>
                                {this.props.priceScale}
                            </Text>
                        </Text>
                        <Text style={styles.addressText}>
                            {this.props.address}
                        </Text>
                    </View>
                </View>
            </BasicCard>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: imageHeight,
    },
    subContainer: {
        marginLeft: 10,
    },
    storeNameText: {
        fontSize: 18,
    },
    image: {
        overflow: 'hidden',
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    addressText: {
        fontSize: 16,
        fontWeight: '400',
        color: AppStyle.darkGrey,
    },
});
