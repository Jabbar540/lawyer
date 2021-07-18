import React from 'react';
import {View, Text, Button, Alert} from 'react-native';

const AppointmentView=({ navigation , route })=>{
    const {name,timmig,cell_no,date}=route.params;
    return(
        <View 
          style={{
          padding:20,
          margin:20,
          marginTop:60,
          backgroundColor:'rgba(255,255,255,.8)',
          borderRadius:16,
          shadowColor:'#000',
          shadowOffset:{
              height:10,
              width:0
          },
          shadowOpacity:.3,
          shadowRadius:20,
          }}>
          <View style={{flexDirection:'row'}}>
              <View style={{margin:15, padding:10,}}>
              <Text style={{fontSize:20,fontWeight:'700',margin:12}}>{name}</Text>
              <Text style={{fontSize:15,fontWeight:'500',margin:12}}>{timmig}</Text>
              </View>
              <View style={{margin:15, padding:10}}>
              <Text style={{fontSize:15,fontWeight:'500',margin:13, marginHorizontal:70}}>{cell_no}</Text>
              <Text style={{fontSize:15,fontWeight:'500',margin:15, marginHorizontal:70}}>{date}</Text>
              </View>
          </View>
          <Button title='Confirm'
          onPress={()=>Alert.alert('your appointment has confirmed') || navigation.navigate('Flat-Lawyer')}/>
          <Button title='Not confirm'
          onPress={()=>Alert.alert('cancel')|| navigation.navigate('Flat-Lawyer')}/>
        </View>
    )
}

export default AppointmentView;