import React from "react";
import {Button, SafeAreaView, StyleSheet, Text, View} from "react-native";

export class Start extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {

    }

    handleSubmit = () => {
        this.props.navigation.navigate('License');
    }

    login = () => {
        this.props.navigation.navigate('License');
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.text}>
                    <Text style={{}}>Welcome to PhasePay</Text>
                    <Button
                        title="Get Started"
                        onPress={this.handleSubmit}
                    />
                    <Button
                        title="or, sign in now"
                        onPress={this.login}
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