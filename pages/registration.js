import React, {useState} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import globalStyles from '../styles/globalStyle';
import RadioButton from './radioButton';

const Registartion_Page=({navigation})=>{
   const [maleCheck, setMaleCheck] = useState(false);
   const [femaleCheck, setFemaleCheck] = useState(false);
   const radioHandler = () => {
    if(femaleCheck){
    setFemaleCheck(false);
    setMaleCheck(true);
    } else {
    setMaleCheck(true);
    }
    }
    const radioHandler2 = () => {
    if(maleCheck){
    setMaleCheck(false);
    setFemaleCheck(true);
    } else {
    setFemaleCheck(true);
    }
  } 
  const [cliCheck, setCliCheck] = useState(false);
  const [lawCheck, setLawCheck] = useState(false);
   const radioHandler3 = () => {
    if(lawCheck){
    setLawCheck(false);
    setcliCheck(true);
    } else {
    setCliCheck(true);
    }
    }
    const radioHandler4 = () => {
    if(cliCheck){
    setCliCheck(false);
    setLawCheck(true);
    } else {
    setLawCheck(true);
    }
  }
    return(
        <View>
            <Image
              source={require('../ali.png')}
              style={{width:120,height:120,borderRadius:80,alignSelf:"center"}}/>
            <Text style={{alignSelf:'center',
              margin:10,}}>Add your Image here</Text>
            <TextInput style={globalStyles.Registartion_Page_Input}
            placeholder='Name'/>
            <TextInput style={globalStyles.Registartion_Page_Input}
            placeholder='Address'/>
            <TextInput style={globalStyles.Registartion_Page_Input}
            placeholder='Cell no.'/>
            <View style={{ 
            margin:20}}>
              <Text style={{fontSize:16, fontWeight:'600'}}>Are you male or female?</Text>
              <View style={{flexDirection:'row', alignSelf:'center',
              marginTop:16}}>
              <Text>Male:</Text>
              <RadioButton checked={maleCheck} onPress={radioHandler}/>
              <Text>Female:</Text>
              <RadioButton checked={femaleCheck} onPress={radioHandler2}/>
            </View>
            </View>
            <View style={{ 
            margin:20}}>
              <Text style={{fontSize:16, fontWeight:'600'}}>Are you client or lawyer?</Text>
              <View style={{flexDirection:'row', alignSelf:'center',
              marginTop:16}}>
              <Text>Client:</Text>
              <RadioButton checked={cliCheck} onPress={radioHandler3}/>
              <Text>Lawyer:</Text>
              <RadioButton checked={lawCheck} onPress={radioHandler4}/>
              </View>
            </View>
            <TouchableOpacity style={globalStyles.logInButton}
              onPress={()=>navigation.navigate('LogIn')}>
             <Text style={globalStyles.textinPut}>Submitt</Text>
          </TouchableOpacity>
        </View>
    )
}

export default Registartion_Page;