import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import globalStyles from '../styles/globalStyle';

const Profile=()=>{
    return(
        <View>
            <Image
            source={require('../ali.png')}
            style={{width:140,height:140,borderRadius:140, alignSelf:'center',margin:20}}/>
            <View style={{borderBottomWidth: 1,margin:8}}>
            <Text style={globalStyles.profile_Text}>Name</Text>
            <Text>Ali Hassan</Text>
            </View>
            <View style={{borderBottomWidth: 1,margin:8}}>
            <Text style={globalStyles.profile_Text}>E-mail</Text>
            <Text>jabbarahmad540@gmail.com</Text>
            </View>
            <View style={{borderBottomWidth: 1,margin:8}}>
            <Text style={globalStyles.profile_Text}>Cell no.</Text>
            <Text>0302-6133264</Text>
            </View>
            <View style={{borderBottomWidth: 1,margin:8}}>
            <Text style={globalStyles.profile_Text}>Address</Text>
            <Text>AliPur chattha, Tehsil wazirabad, District GRW.</Text>
            </View>
        </View>
    )
}
export default Profile;