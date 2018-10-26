import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList } from 'react-native';

import AppStyle from '../../AppStyle';
import HomeCard from '../components/HomeCard';
import RecentPurchaseCard from '../components/RecentPurchaseCard';

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
                store: 'Jack in the Box',
                spent: '$12.46',
            },
            {
                store: 'Jack in the Box',
                spent: '$12.46',
            },
        ];
        recentPurchasesContent = (
            <FlatList
                style={{ alignSelf: 'stretch', overflow: 'visible' }}
                data={recentPurchasesFake}
                horizontal={true}
                renderItem={i => {
                    return <RecentPurchaseCard {...i} />;
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
                    <HomeCard
                        sectionText="Recent Purchases"
                        buttonText="View All"
                        onPress={() => {}}
                        content={recentPurchasesContent}
                    />
                ) : null}
                <HomeCard sectionText="Places Nearby" />
                <HomeCard sectionText="Coupons" />
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
