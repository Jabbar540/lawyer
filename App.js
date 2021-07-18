import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './screens/signup';
import LogIn from './screens/logIn';
import Forget_Password from './screens/forget_Password';
import NewPassword from './screens/enter_new_password';
import Home from './pages/Homepage';
import Registartion_Page from './pages/registration';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './pages/profile';
import AppointmentView from './pages/client';

const Drawer = createDrawerNavigator();

const MyDrawer=()=>{
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} 
      />
      <Drawer.Screen name="Profile" component={Profile} 
      />
    </Drawer.Navigator>
  );
}
const Stack = createStackNavigator();
const App=()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn}  options={{
          headerStyle: {
            backgroundColor: '#f4511e',
            borderRadius: 20,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
        }}/>
        <Stack.Screen name="SignUp" component={SignUp} 
         options={{
          headerStyle: {
            backgroundColor: '#f4511e',
            borderRadius: 20,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
        }}/>
        <Stack.Screen name="Forget Password" component={Forget_Password} 
         options={{
          headerStyle: {
            backgroundColor: '#f4511e',
            borderRadius: 20,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
        }}/>
        <Stack.Screen name="New Password" component={NewPassword} 
         options={{
          headerStyle: {
            backgroundColor: '#f4511e',
            borderRadius: 20,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
        }}/>
        <Stack.Screen name="Flat-Lawyer" children={MyDrawer}
        options={{
          headerStyle: {
            backgroundColor: '#f4511e',
            borderRadius: 20,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
        }}/>
        <Stack.Screen name="Registration page" component={Registartion_Page} 
         options={{
          headerStyle: {
            backgroundColor: '#f4511e',
            borderRadius: 20,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
        }}/>
         <Stack.Screen name="Appointment" children={AppointmentView}
         options={{
          headerStyle: {
            backgroundColor: '#f4511e',
            borderRadius: 20,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;