import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList } from 'react-native';

import AppStyle from '../../AppStyle';
import HomeItem from '../components/cards/HomeItem';
import PlacesNearbyCard from '../components/cards/PlacesNearbyCard';
import RecentPurchaseCard from '../components/cards/RecentPurchaseCard';

export default class Home extends React.Component {
    constructor() {
        super();

        this.curDate = undefined;
    }

    componentWillMount() {
        // Save the current date in a readable format
        let date = new Date();
        this.curDate = date.toLocaleDateString('en-US', {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
        });
    }

    render() {
        recentPurchasesFake = [
            {
                storeName: 'Jack in the Box',
                spent: '$12.46',
            },
            {
                storeName: 'McDonald\'s',
                spent: '$5.24',
            },
        ];
        recentPurchasesContent = (
            <FlatList
                style={{ overflow: 'visible' }}
                data={recentPurchasesFake}
                horizontal={true}
                renderItem={i => {
                    return <RecentPurchaseCard {...i.item} />;
                }}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
            />
        );

        placesNearbyFake = [
            {
                storeName: 'McDonalds',
                address: '2290 N Bellflower Blvd',
                priceScale: '$',
                type: 'Fast Food',
            },
            {
                storeName: 'AMC Theaters',
                address: '6346 E Pacific Coast Hwy',
                priceScale: '$$',
                type: 'Movie',
            },
            {
                storeName: 'Vons',
                address: '1820 Ximeno Ave',
                priceScale: '$$',
                type: 'Grocery Store',
            },
        ];
        placesNearbyContent = (
            <FlatList
                style={{ overflow: 'visible' }}
                data={placesNearbyFake}
                horizontal={true}
                renderItem={i => {
                    return <PlacesNearbyCard {...i.item} />;
                }}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
            />
        );

        return (
            <SafeAreaView style={styles.container}>
                <View
                    style={{
                        borderColor: AppStyle.primaryColor,
                        borderBottomWidth: 3,
                    }}
                >
                    <Text style={styles.dateText}>{this.curDate}</Text>
                </View>
                {recentPurchasesFake.length > 0 ? (
                    <HomeItem
                        sectionText='Recent Purchases'
                        buttonText='View All'
                        onPress={() => {}}
                        content={recentPurchasesContent}
                    />
                ) : null}
                <HomeItem
                    sectionText='Places Nearby'
                    content={placesNearbyContent}
                />
                <HomeItem sectionText='Coupons' />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 22,
    },
    dateText: {
        fontSize: 32,
        fontWeight: '800',
        marginVertical: 10,
    },
    subText: {
        fontSize: 24,
        fontWeight: '600',
    },
});
