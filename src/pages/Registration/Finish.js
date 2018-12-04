import React from "react";
import {AsyncStorage, Button, SafeAreaView, StyleSheet, Text, View} from "react-native";

export class Finish extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {

    }

    //Store all into SQL database

    getSubmits = async () => {
        const license = await AsyncStorage.getItem('pic1');
        console.log("license: ", license);
        const profile = await AsyncStorage.getItem('pic2');
        console.log("Profile: ", profile);
        const cardNumber = await AsyncStorage.getItem('cardNumber');
        console.log("Card Number: ", cardNumber);
        const exp = await AsyncStorage.getItem('exp');
        console.log("Expiration Date: ", exp);
        const cvc = await AsyncStorage.getItem('cvc');
        console.log("CVC:  ", cvc);
        const username = await AsyncStorage.getItem('username');
        console.log("Username:  ", username);
        const password = await AsyncStorage.getItem('password');
        console.log("Password:  ", password);
        await AsyncStorage.setItem('userToken', "hi");
        this.props.navigation.navigate('Loading');
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.text}>
                    <Text style={{}}>Congratulations! Now you can use PayPhase</Text>
                    <Button
                        title="Start"
                        onPress={this.getSubmits}
                    />
                </View>
            </SafeAreaView>
        );
    }
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
    }
});