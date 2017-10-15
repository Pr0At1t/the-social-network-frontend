import React, { Component } from 'react';
import GoogleLoginButton from './google_login_button';
import Hr from 'react-native-hr';
import {
   View,
   StyleSheet,
   TextInput,
   TouchableOpacity,
   Text
} from 'react-native';

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

export default class LoginForm extends Component {
   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.headerContainer}>The Social Network</Text>
            <TextInput
               style={styles.input}
               placeholder="Username or Email"
               placeholderTextColor="rgba(255, 255, 255, 0.7)"
               autoCapitalize="none"
            />
            <TextInput
               style={styles.input}
               placeholder="Password"
               placeholderTextColor="rgba(255, 255, 255, 0.7)"
               secureTextEntry
            />
            <TouchableOpacity style={styles.buttonContainer}>
               <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.hrContainer}>
               <Hr text="OR" lineColor="white" textColor="white" />
            </View>
            <GoogleLoginButton />
         </View>
      );
   }
}
