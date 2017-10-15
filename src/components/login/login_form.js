import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import Hr from 'react-native-hr';
import GoogleLoginButton from './google_login_button';
import login from '../../action_creators/login';

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 15,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        marginBottom: 30
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    },
    headerContainer: {
        fontSize: 30,
        color: 'white',
        marginBottom: 40,
        textAlign: 'center'
    },
    hrContainer: {
        marginTop: 40,
        marginBottom: 20
    }
});

/**
    LoginForm is a react component which is a pure function as it holds no internal state
    @param {object} props Any prop including output from mapStateToProps and mapDispatchToProps
*/
const LoginForm = props => (
    <View style={styles.container}>
        <Text style={styles.headerContainer}>
            {`The Social Network ${props.user.loggedIn ? 'ON' : 'OFF'}`}
        </Text>
        <TextInput
            style={styles.input}
            placeholder="username or email"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            autoCapitalize="none"
        />
        <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            secureTextEntry
        />
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
                props.login({
                    userName: 'atul',
                    password: 'atul'
                });
            }}
        >
            <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.hrContainer}>
            <Hr text="OR" lineColor="white" textColor="white" />
        </View>
        <GoogleLoginButton />
    </View>
);

LoginForm.propTypes = {
    user: PropTypes.shape({
        loggedIn: PropTypes.bool
    }).isRequired,
    login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    user: state.userReducer.user
});

const mapDispatchToProps = dispatch => ({
    login: payload => dispatch(login(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
