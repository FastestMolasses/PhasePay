import React from "react";
import {Button, SafeAreaView, StyleSheet, Text, View} from "react-native";

export class Payment extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {

    }

    handleCard = () => {
        this.props.navigation.navigate('Card');
    }

    handlePaypal = () => {
        this.props.navigation.navigate('Payment');
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.text}>
                    <Text style={styles.plain}>Now, we'll need your preferred payment method.</Text>
                    <Button
                        title="Link Credit/Debit Card"
                        onPress={this.handleCard}
                    />
                    <Button
                        title="Link Paypal"
                        onPress={this.handlePaypal}
                    />
                </View>
            </SafeAreaView>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 0,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
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
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    },
    plain: {
        marginTop: 40,
        marginBottom: 40
    }
});