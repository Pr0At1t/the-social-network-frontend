import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity, Text, Platform, Linking } from 'react-native';
import SafariView from 'react-native-safari-view';
import { connect } from 'react-redux';
import * as urls from '../../constants/urls';
import userDataReceived from '../../action_creators/google_login';

const styles = StyleSheet.create({
    googleButton: {
        backgroundColor: 'white',
        paddingVertical: 15,
        marginBottom: 30,
        marginTop: 25
    },
    buttonText: {
        textAlign: 'center',
        color: '#D83B3B',
        fontWeight: '700',
        fontSize: 18
    }
});

class GoogleLoginButton extends Component {
    static openURL(url) {
        if (Platform.OS === 'ios') {
            SafariView.show({
                url,
                fromBottom: true
            });
        } else {
            Linking.openURL(url);
        }
    }

    static loginWithGoogle() {
        GoogleLoginButton.openURL(urls.GOOGLE_LOGIN);
    }

    constructor(props) {
        super(props);

        this.handleOpenURL = this.handleOpenURL.bind(this);
    }

    componentDidMount() {
        Linking.addEventListener('url', this.handleOpenURL);
        Linking.getInitialURL().then((url) => {
            if (url) {
                this.handleOpenURL({ url });
            }
        });
    }

    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenURL);
    }

    handleOpenURL({ url }) {
        const [, userString] = url.match(/user=([^#]+)/);

        this.props.receiveUserData({
            userData: JSON.parse(decodeURI(userString))
        });
        console.log(JSON.parse(decodeURI(userString)));
        if (Platform.OS === 'ios') {
            SafariView.dismiss();
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.googleButton}
                    onPress={GoogleLoginButton.loginWithGoogle}
                >
                    <Text style={styles.buttonText}>Sign in with Google</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

GoogleLoginButton.propTypes = {
    receiveUserData: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    receiveUserData: payload => dispatch(userDataReceived(payload))
});

export default connect(null, mapDispatchToProps)(GoogleLoginButton);
