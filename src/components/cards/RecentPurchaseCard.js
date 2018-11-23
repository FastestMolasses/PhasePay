import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal,
} from 'react-native';

import AppStyle from '../../../AppStyle';
import BasicCard from '../cards/BasicCard';

export default class RecentPurchaseCard extends React.Component {
    render() {
        return (
            <BasicCard style={[{marginRight: 10,}, this.props.style]}>
                <View style={styles.headerContainer}>
                    <Image
                        source={this.props.source}
                        style={{
                            borderRadius: 20,
                            width: 40,
                            height: 40,
                        }}
                    />

                    <View style={styles.subContainer}>
                        <Text style={styles.storeNameText}>
                            {this.props.storeName}
                        </Text>
                        <Text style={styles.spentPrice}>
                            {this.props.spent}
                        </Text>
                    </View>
                </View>
            </BasicCard>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'red',
        justifyContent: 'center',
        height: 500,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
        color: AppStyle.darkGrey,
    },
});
