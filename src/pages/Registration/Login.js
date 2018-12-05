import React from "react";
import {Button, SafeAreaView, StyleSheet, Text, TextInput, View, AsyncStorage} from "react-native";

export class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''

        };
    }

    componentWillMount() {

    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', this.state.username);
        this.props.navigation.navigate('Loading');
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.text}>
                    <TextInput
                        style={{height: 40, padding: 10}}
                        placeholder="Username"
                        onChangeText={(username) => this.setState({username})}
                    />
                    <TextInput
                        style={{height: 40, padding: 10}}
                        placeholder="Password"
                        onChangeText={(password) => this.setState({password})}
                    />
                    <Button
                        title="Login"
                        onPress={this._signInAsync}
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