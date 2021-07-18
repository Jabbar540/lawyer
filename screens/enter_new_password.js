import React from 'react';
import {View, TextInput, Text,TouchableOpacity ,KeyboardAvoidingView} from 'react-native';
import globalStyles from '../styles/globalStyle';

const NewPassword=({navigation})=>{
    return(
        <KeyboardAvoidingView >
            <View style={globalStyles.NewPassword_header}>
                <Text style={globalStyles.NewPassword_header_text}>
                    Enter your new Password here!
                </Text>
                <TextInput
                placeholder='New Passwords'
                style={globalStyles.NewPassword_inPut}/>
                <TextInput
                placeholder='Re-enter Passwords'
                style={globalStyles.NewPassword_inPut}/>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('LogIn')}
                style={globalStyles.NewPassword_Submit}>
                    <Text style={globalStyles.NewPassword_font_Formats}>Submit</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}
export default NewPassword;