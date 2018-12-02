import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import Modal from 'react-native-modalbox';

export default class RecentPurchaseModal extends React.Component {
    toggle = () =>
    {
        this.refs.modal.open();
    }
    
    render() {
        return (
            <Modal
                style={[styles.modal, styles.modal4]}
                position={'bottom'}
                ref={this.props.ref}
            >
                <Text style={styles.text}>Modal on bottom with backdrop</Text>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
    },
});
