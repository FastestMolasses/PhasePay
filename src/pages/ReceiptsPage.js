import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    SectionList,
    Text,
    View,
} from 'react-native';

import AppStyle from '../../AppStyle';
import RecentPurchaseCard from '../components/cards/RecentPurchaseCard';

export default class Receipts extends React.Component {
    constructor()
    {
        super();

        this.state = {
            curReceiptData: {},
        }
    }

    render() {
        fakeReceiptData = [
            {
                title: 'Today',
                data: [
                    {
                        storeName: 'Jack in the Box',
                        spent: '$12.46',
                        source: require('../imgs/Fake/JackLogo.jpg'),
                    },
                    {
                        storeName: "McDonald's",
                        spent: '$5.24',
                        source: require('../imgs/Fake/McDonaldsLogo.png'),
                    },
                ],
            },
            {
                title: 'This Week',
                data: [
                    {
                        storeName: 'Gap',
                        spent: '$36.20',
                        source: require('../imgs/Fake/GapLogo.png'),
                    },
                    {
                        storeName: 'Apple',
                        spent: '$510.80',
                        source: require('../imgs/Fake/AppleLogo.jpg'),
                    },
                    {
                        storeName: "McDonald's",
                        spent: '$12.22',
                        source: require('../imgs/Fake/McDonaldsLogo.png'),
                    },
                ],
            },
            {
                title: 'November',
                data: [
                    {
                        storeName: 'Ray Bans',
                        spent: '$99.40',
                        source: require('../imgs/Fake/RayBanLogo.jpg'),
                    },
                    {
                        storeName: 'SubWay',
                        spent: '$9.31',
                        source: require('../imgs/Fake/SubwayLogo.jpg'),
                    },
                    {
                        storeName: 'WalMart',
                        spent: '$23.24',
                        source: require('../imgs/Fake/WalmartLogo.jpg'),
                    },
                    {
                        storeName: 'Target',
                        spent: '$17.24',
                        source: require('../imgs/Fake/TargetLogo.png'),
                    },
                    {
                        storeName: 'Jack in the Box',
                        spent: '$7.31',
                        source: require('../imgs/Fake/JackLogo.jpg'),
                    },
                    {
                        storeName: "McDonald's",
                        spent: '$5.24',
                        source: require('../imgs/Fake/McDonaldsLogo.png'),
                    },
                    {
                        storeName: 'Target',
                        spent: '$14.24',
                        source: require('../imgs/Fake/TargetLogo.png'),
                    },
                ],
            },
            {
                title: 'October',
                data: [
                    {
                        storeName: 'Gap',
                        spent: '$36.20',
                        source: require('../imgs/Fake/GapLogo.png'),
                    },
                    {
                        storeName: 'Jack in the Box',
                        spent: '$12.46',
                        source: require('../imgs/Fake/JackLogo.jpg'),
                    },
                    {
                        storeName: 'Apple',
                        spent: '$510.80',
                        source: require('../imgs/Fake/AppleLogo.jpg'),
                    },
                    {
                        storeName: "McDonald's",
                        spent: '$5.24',
                        source: require('../imgs/Fake/McDonaldsLogo.png'),
                    },
                    {
                        storeName: 'SubWay',
                        spent: '$9.31',
                        source: require('../imgs/Fake/SubwayLogo.jpg'),
                    },
                ],
            },
        ];

        return (
            <SafeAreaView style={styles.container}>
                <SectionList
                    sections={fakeReceiptData}
                    ListHeaderComponent={() => {
                        return (
                            <View
                                style={{
                                    borderColor: AppStyle.primaryColor,
                                    borderBottomWidth: 3,
                                    marginHorizontal: 22,
                                }}
                            >
                                <Text style={styles.titleText}>
                                    Receipts
                                </Text>
                            </View>
                        );
                    }}
                    renderItem={({ item }) => {
                        return (
                            <RecentPurchaseCard
                                {...item}
                                style={{
                                    width: '85%',
                                    marginBottom: 10,
                                    paddingHorizontal: 22,
                                    alignSelf: 'center',
                                }}
                            />
                        );
                    }}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.sectionText}>{title}</Text>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleText: {
        fontSize: 32,
        fontWeight: '800',
        marginVertical: 10,
    },
    sectionText: {
        fontSize: 32,
        color: 'black',
        fontWeight: 'bold',
        paddingVertical: 15,
        paddingHorizontal: 22,
        backgroundColor: 'white',
    },
});
