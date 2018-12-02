import React from "react";
import {Button, SafeAreaView, StyleSheet, View} from "react-native";
import {CreditCardInput} from "react-native-credit-card-input";

export class Card extends React.Component {

    _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
    constructor() {
        super();
    }

    componentWillMount() {

    }

    handleSubmit = () => {
        this.props.navigation.navigate('Username');
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.text}>
                    <CreditCardInput onChange={this._onChange} />
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