import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginForm from './login_form';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    }
});

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LoginForm />
            </View>
        );
    }
}
