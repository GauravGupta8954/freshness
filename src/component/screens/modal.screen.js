import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Modal } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';

export const ModalScreen = () => {
    const [showModal, setShowModal] = useState(true)
    const [showModalLogin, setShowModalLogin] = useState(false)
    const [showModalRegister, setShowModalRegister] = useState(true)
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[button,setbutton]=useState('Login')

    const buttonManager=()=>{
        
            if(button=== 'Login')
            {
              setShowModalRegister(false)
              setbutton('Register')
              setShowModalLogin(true)
              console.log("Register")
            }
            if(button==='Register')
            {
              setbutton('Login')
              setShowModalRegister(true)
              console.log("Login")
            }
        
    }
    return (
        <View style={{ flex: 1 }}>
            <Modal transparent={true}
                visible={showModalRegister}
                animationType='slide'>
                <View style={{ flex: 1, alignItems: 'center',justifyContent:'center' }}>
                    <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 20, shadowColor: 'black', elevation: 1 }}>
                        <TextInput style={{width:200,padding:10,borderWidth:1,margin:5}} placeholder="Enter your email id" value={email} onchangeText={(text)=>{setEmail(text)}}/>
                        <TextInput style={{width:200,padding:10,borderWidth:1,margin:5}} placeholder="Enter your  password" value={password} onchangeText={(text)=>{setPassword(text)}}/>
                        <TextInput style={{width:200,padding:10,borderWidth:1,margin:5}} placeholder="Re-Write your password" value={password} onchangeText={(text)=>{setPassword(text)}}/>
                        <TouchableOpacity onPress={() => { setShowModalRegister(false) }} >
                            <View style={{ borderRadius: 20, backgroundColor: 'lightgreen', alignItems: 'center', padding: 10 }}>
                                <Text>Register</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={{alignSelf:'center'}}>Or</Text>
                        <TouchableOpacity onPress={() => { setShowModalLogin(false) }} >
                            <View style={{ borderRadius: 20, backgroundColor: 'lightgreen', alignItems: 'center', padding: 5 }}>
                                <Text>login</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal transparent={true}
                visible={showModalLogin}
                animationType='slide'>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 20, shadowColor: 'black', elevation: 1 }}>
                    <TextInput style={{width:200,padding:10,borderWidth:1,margin:5}} placeholder="Enter your email id" value={email} onchangeText={(text)=>{setEmail(text)}}/>
                        <TextInput style={{width:200,padding:10,borderWidth:1,margin:5}} placeholder="Enter your  password" value={password} onchangeText={(text)=>{setPassword(text)}}/>
                        <TouchableOpacity onPress={() => { setShowModalLogin(false) }} >
                            <View style={{ borderRadius: 20, backgroundColor: 'lightgreen', alignItems: 'center', padding: 10 }}>
                                <Text>login</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            {/* <View style={{ justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}>
            <View style={{ shadowColor: 'black', elevation: 1, borderRadius: 20, backgroundColor: 'lightgreen', padding: 15 ,flexDirection:'row'}} >

                <TouchableOpacity onPress={() => { buttonManager() }} >
                    <View >
                        <Text>{button} </Text>
                    </View>
                </TouchableOpacity>
                
            </View>
            </View> */}
            
        </View>
    );
}