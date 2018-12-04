import React from "react";
import {Button, SafeAreaView, StyleSheet, Text, View, TextInput, AsyncStorage} from "react-native";

export class Username extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''

        };
    }

    componentWillMount() {

    }

    handleSubmit = async () => {
        // Send to database
        await AsyncStorage.setItem('username', this.state.username);
        await AsyncStorage.setItem('password', this.state.password);
        this.props.navigation.navigate('Finish');
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.text}>
                    <Text style={styles.plain}>Lastly, we need a username and a password</Text>
                    <TextInput
                        style={{height: 40, width: 284}}
                        placeholder="Username"
                        onChangeText={(username) => this.setState({username})}
                    />
                    <TextInput
                        style={{height: 40, width: 284}}
                        placeholder="Password"
                        onChangeText={(password) => this.setState({password})}
                        secureTextEntry={true}
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
    },
    plain: {
        marginTop: 10,
        marginBottom: 10
    }
});