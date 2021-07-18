import React , {useState} from 'react';
import { View, Text, FlatList, Image} from 'react-native';
import globalStyles from '../styles/globalStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Home=({navigation})=> {
    const [appointmentList,setAppointmentList]=useState([
        {name:'Ali',timmig:'9:30', cell_no:'03009648069',date:'12/12/21', key:'1'},
        {name:'Ahmad',timmig:'10:30',cell_no:'03009648069',date:'12/12/21', key:'2'},
        {name:'Hassan',timmig:'11:30',cell_no:'03009648069',date:'12/12/21', key:'3'},
        {name:'Zafar',timmig:'12:30',cell_no:'03009648069',date:'12/12/21', key:'4'},
        {name:'Hussain',timmig:'1:30',cell_no:'03009648069',date:'12/12/21', key:'5'},
        {name:'Jabbar',timmig:'2:30',cell_no:'03009648069',date:'12/12/21', key:'6'},
    ])
    

    return(
        <View>
        <FlatList
        data={appointmentList}
        contentContainerStyle={{
            padding:20,
        }}
        key={()=>item.key}
        renderItem={({item})=>(
         <TouchableOpacity 
         onPress={()=>navigation.navigate('Appointment', item)}
         style={globalStyles.Home_list}>
             <Image
             source={require('../ali.png')}
             style={{width:70,height:70,borderRadius:70,
             marginRight:20/2}}/>
             <View>
             <Text style={{fontSize:16,
            fontWeight:'700',
            margin:12}}>{item.name}</Text>
             <Text>{item.cell_no}</Text>
             </View>
             <View >
                <Text style={{margin:12, fontWeight:'600'}}>{item.timmig}</Text>
                <Text style={{marginHorizontal:12,}}>{item.date}</Text>
             </View>
         </TouchableOpacity>
         )
        }
       />
       
       </View>
    )
}
export default Home;