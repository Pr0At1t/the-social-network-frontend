import React from 'react';
import { StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoginForm from './login_form';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D83B3B'
    }
});

const Login = () => (
    <KeyboardAwareScrollView
        style={{ backgroundColor: styles.container.backgroundColor }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={false}
    >
        <LoginForm />
    </KeyboardAwareScrollView>
);

export default Login;
