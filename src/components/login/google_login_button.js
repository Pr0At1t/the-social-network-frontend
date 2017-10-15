import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

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

export default class GoogleLoginButton extends Component {
   render() {
      return (
         <View>
            <TouchableOpacity style={styles.googleButton}>
               <Text style={styles.buttonText}>Sign in with Google</Text>
            </TouchableOpacity>
         </View>
      );
   }
}
