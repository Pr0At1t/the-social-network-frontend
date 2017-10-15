import React, { Component } from 'react';
import {
   View,
   StyleSheet,
   TextInput,
   TouchableOpacity,
   Text
} from 'react-native';

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
   },
   hr: {
      marginBottom: 100
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
         /* <View>
            <TextInput
               style={styles.input}
               placeholder="Sign in with Google"
               placeholderTextColor="#D83B3B"
               autoCapitalize="none"
            />
         </View> */
      );
   }
}
