import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import AppStyle from '../../../AppStyle';
import BasicCard from '../cards/BasicCard';

export default class RecentPurchaseCard extends React.Component {
    render() {
        return (
            <BasicCard onPress={this.props.onPress}>
                <Image
                    style={styles.image}
                    source={require('../../imgs/Notification_icon.png')}
                />

                <View style={styles.container}>
                    <Text style={styles.storeNameText}>
                        {this.props.storeName}
                    </Text>
                </View>
            </BasicCard>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    storeNameText: {},
    image: {
        overflow: 'hidden',
    },
});
