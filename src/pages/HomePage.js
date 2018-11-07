import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    FlatList,
    ScrollView,
} from 'react-native';

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
                source: require('../imgs/Fake/JackLogo.jpg'),
            },
            {
                storeName: "McDonald's",
                spent: '$5.24',
                source: require('../imgs/Fake/McDonaldsLogo.png'),
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
                storeSource: require('../imgs/Fake/McDonalds.jpg'),
                storeLogo: require('../imgs/Fake/McDonaldsLogo.png'),
            },
            {
                storeName: 'AMC Theaters',
                address: '6346 E Pacific Coast Hwy',
                priceScale: '$$',
                type: 'Movie',
                storeSource: require('../imgs/Fake/AMCTheater.jpg'),
                storeLogo: require('../imgs/Fake/AMCLogo.jpg'),
            },
            {
                storeName: 'Vons',
                address: '1820 Ximeno Ave',
                priceScale: '$$',
                type: 'Grocery Store',
                storeSource: require('../imgs/Fake/VonsStore.jpg'),
                storeLogo: require('../imgs/Fake/VonsLogo.jpg'),
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
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ overflow: 'visible' }}
                >
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
                            sectionText="Recent Purchases"
                            buttonText="View All"
                            onPress={() => {}}
                            content={recentPurchasesContent}
                        />
                    ) : null}
                    <HomeItem
                        sectionText="Places Nearby"
                        content={placesNearbyContent}
                    />
                    <HomeItem sectionText="Coupons" />
                </ScrollView>
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
