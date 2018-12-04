import React from "react";
import {AsyncStorage, Button, SafeAreaView, StyleSheet, TextInput, View} from "react-native";
import {CreditCardInput} from "react-native-credit-card-input";
import * as formData from "react-native-credit-card-input";

export class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            number: '',
            exp: '',
            cvc: ''

        };
    }

    componentWillMount() {

    }

    handleSubmit = async () => {

        this.props.navigation.navigate('Username');
        await AsyncStorage.setItem('cardNumber', this.state.number);
        await AsyncStorage.setItem('exp', this.state.exp);
        await AsyncStorage.setItem('cvc', this.state.cvc);
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.text}>
                    <TextInput
                        style={{height: 40, padding: 10}}
                        placeholder="Card Number"
                        onChangeText={(number) => this.setState({number})}
                    />
                    <TextInput
                        style={{height: 40, padding: 10}}
                        placeholder="Expiration Date"
                        onChangeText={(exp) => this.setState({exp})}
                    />
                    <TextInput
                        style={{height: 40, padding: 10}}
                        placeholder="CVC"
                        onChangeText={(cvc) => this.setState({cvc})}
                    />
                    <Button
                        title="Submit"
                        onPress={this.handleSubmit}
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