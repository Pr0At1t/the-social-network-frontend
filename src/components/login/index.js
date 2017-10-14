import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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
            <KeyboardAwareScrollView
                style={{ backgroundColor: styles.container.backgroundColor }}
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <LoginForm />
            </KeyboardAwareScrollView>
        );
    }
}
