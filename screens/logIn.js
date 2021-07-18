import React from 'react';
import {View, TextInput , Text, TouchableOpacity,Image, TouchableWithoutFeedback, Keyboard} from 'react-native';
import globalStyles from '../styles/globalStyle';


const LogIn = ({navigation})=>{
  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}
    style={globalStyles.app}>
      <View>
        <View style={{flexDirection:'row', alignSelf:'center',
         marginTop:80}}>
          <Image
          source={require('../lawyer.jpeg')}
          style={{width:80,height:80,borderRadius:50}}/>
          <Text style={globalStyles.homeText}> Flat-Legal</Text>
        </View>
        <TextInput
        placeholder='E-mail'
        style={globalStyles.inPut}/>
        <TextInput
        placeholder='Password'
        style={globalStyles.inPut}/>
        <View>
          <TouchableOpacity style={globalStyles.logInButton}
          onPress={()=>navigation.navigate('Flat-Lawyer')}>
            <Text style={globalStyles.textinPut}>Log-In</Text>
          </TouchableOpacity>
        </View>
        <View style={globalStyles.styleInPut}>
         <TouchableOpacity style={globalStyles.signUp}
         onPress={()=>navigation.navigate('Forget Password')}>
           <Text style={globalStyles.textinPut}>Forget Password</Text>
         </TouchableOpacity>
         <TouchableOpacity style={globalStyles.signUp}
         onPress={()=>navigation.navigate('SignUp')}>
           <Text style={globalStyles.textinPut}>Sign-Up</Text>
         </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
export default LogIn;