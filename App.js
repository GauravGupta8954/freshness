import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, FlatList } from 'react-native';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterScreen } from './src/component/screens/register.screen';
import { LoginScreen } from './src/component/screens/login.screen';
import { HomeScreen } from './src/component/screens/home.screen';
import { RadioButtonScreen } from './src/component/screens/radioButton.screen';
import { RadioArray } from './src/component/screens/radioButton2.screen';
import { RadioArrayofobjects } from './src/component/screens/radioButton3.screen';
import { ModalScreen } from './src/component/screens/modal.screen';
import { Register } from './src/component/screens/register';
import { Custommodal } from './src/component/screens/custommodal';

const Stack = createNativeStackNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyAZiAs6cMVWEL33ruzgvLoPEnCscGanvRI",
  authDomain: "freshness-e0a1c.firebaseapp.com",
  projectId: "freshness-e0a1c",
  storageBucket: "freshness-e0a1c.appspot.com",
  messagingSenderId: "614664386187",
  appId: "1:614664386187:web:860a4c2833a756beafc68e"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



export default function App() {
 
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [display, setDisplay] = useState(true)
  const [showpass, setShowpass] = useState(true)
  const [eyeicon, setEyeicon] = useState("eye-off")

  

  return (
    <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
      <NavigationContainer>
      <Stack.Navigator>  
      <Stack.Screen name='register' component={RegisterScreen} />
      <Stack.Screen name='login' component={LoginScreen} />
      <Stack.Screen name='home' component={HomeScreen} />
      <Stack.Screen name='radio' component={RadioButtonScreen} />
      <Stack.Screen name='radioArray' component={RadioArray} />
      <Stack.Screen name='radioArrayofobject' component={RadioArrayofobjects} />
      <Stack.Screen name='ModalPage' component={ModalScreen} />
      <Stack.Screen name='register2' component={Register} />
      <Stack.Screen name='custom' component={Custommodal} />
      </Stack.Navigator>
      </NavigationContainer>
      
    </View>
  );
}



