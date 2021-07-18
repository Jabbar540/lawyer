import React from 'react';
import {View, TextInput, Text,TouchableOpacity ,KeyboardAvoidingView} from 'react-native';
import globalStyles from '../styles/globalStyle';

const Forget_Password=({navigation})=>{
    return(
        <KeyboardAvoidingView>
            <View style={globalStyles.forgetPasswordStyle}>
                <Text style={globalStyles.Forget_Password_text}>Enter your Email here!</Text>
                <TextInput style={globalStyles.Forget_Password_email_enter}
                placeholder='E-mail'/>
                <TouchableOpacity onPress={()=>navigation.navigate('New Password')}
                style={globalStyles.Forget_Password_submitt_style}>
                    <Text style={globalStyles.Forget_Password_Submit_Font}>Submitt</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Forget_Password;