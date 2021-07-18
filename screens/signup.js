import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import globalStyles from '../styles/globalStyle';

const SignUp = ({ navigation }) => {
  return (
  <View style={globalStyles.signUpScreen}>
      <Text style={globalStyles.signup_header}>Path-Legal</Text>
      <TextInput placeholder='E-mail:'
        style={globalStyles.signup_Input} />
      <TextInput placeholder='Password:'
        style={globalStyles.signup_Input}
        keyboardType='numbers-and-punctuation' />
      <TouchableOpacity style={globalStyles.signUp_Submit}
        onPress={() => navigation.navigate('Registration page')}>
        <Text style={globalStyles.signUp_Submit_text}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  )
}
export default SignUp;