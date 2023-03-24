import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Text, View, Stylesheet, Button, TouchableOpacity, Modal, ImageBackground, Pressable, Alert } from "react-native"
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { BackgroundScreen } from '../backgroundscreen';

export const Register = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [lemail, setlEmail] = useState('')
    const [lpassword, setlPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [button, setButton] = useState(false)
    const [user, setUser] = useState();
    const [eyeicon, setEyeicon] = useState("eye-off")
    const [showpass, setShowpass] = useState(true)
    const [output,setOutput]=useState(null)
    const auth = getAuth();
    // console.log({output})
    const passvisible = () => {
        if (eyeicon === 'eye') {
            setEyeicon('eye-off')
            setShowpass(true)
        }
        else if (eyeicon === 'eye-off') {
            setEyeicon('eye')
            setShowpass(false)
        }
    }
    
    

    const onLogin = (lemail,lpassword) => {
        
        signInWithEmailAndPassword(auth, lemail, lpassword).then((user) => {
            setUser(user);
            setOutput("successfully login")
            console.log("Logged in");
            navigation.navigate("home",{caption:'Successfully Login'});
            console.log("guptaji1")
        }).catch((error) => {
            
        })
    }
    useLayoutEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            // if(user){
            console.log(output)
            // }
            
        })
    },[])
    const onRegister = () => {
        if(password!==confirmPassword)
        {
            Alert.alert('Hi User', 'Enter Same Password in both slot' ,[
                
                {
                    text:'Ok , I Understand',
                    onPress:()=> console.log("Ok pressed")
                }
            ])
        }

        else{
        createUserWithEmailAndPassword(auth, email, password).then((user) => {
            setUser(user);
            setOutput('Register')
            navigation.navigate("home",{caption:'Successfully registered'});
            console.log("guptaji")
        }).catch((error) => {

        })}
    }

    return (


        <View style={{ flex: 1 }} >

            <Text style={{ color: 'red', fontSize: 25, padding: 10, alignSelf: 'center' }}>Welcome to Our Register Page </Text>
            <View style={{ flex: 1, alignItems: 'center', paddingTop: 50 }}>
                <View >
                    <TextInput placeholder="Enter your Email here" style={{ borderWidth: 1, padding: 10, width: 250, margin: 10, borderRadius: 10 }} value={email} onChangeText={(t) => setEmail(t)} />
                    {/* <TextInput placeholder="Enter your Password here" style={{ borderWidth: 1, padding: 10, width: 250, margin: 10, borderRadius: 10 }} value={password} onChangeText={(t) => setPassword(t)} /> */}
                    <View style={{ borderWidth: 1, margin: 10, padding: 10, flexDirection: 'row', borderRadius: 10 }}>
                        <TextInput
                            placeholder="Enter Your Password here"
                            label='password' secureTextEntry={showpass}
                            value={password}
                            textContentType="password"
                            onChangeText={(text) => { setPassword(text) }} />
                        <View style={{ flex: 1, alignSelf: 'flex-end' }}>
                            <Pressable onPress={() => { passvisible() }}>
                                <Ionicons style={{ alignSelf: 'flex-end' }} name={eyeicon} size={22} color="black" />
                            </Pressable>
                        </View>
                    </View>
                    <View style={{ borderWidth: 1, margin: 10, padding: 10, flexDirection: 'row', borderRadius: 10 }}>
                        <TextInput
                            placeholder="Re-Write Password here"
                            label='password' secureTextEntry={showpass}
                            value={confirmPassword}
                            textContentType="password"
                            onChangeText={(text) => { setConfirmPassword(text) }} />
                        <View style={{ flex: 1, alignSelf: 'flex-end' }}>
                            <Pressable onPress={() => { passvisible() }}>
                                <Ionicons style={{ alignSelf: 'flex-end' }} name={eyeicon} size={22} color="black" />
                            </Pressable>
                        </View>
                    </View>

                    {/* <TextInput placeholder="Re-Write your Password here" style={{ borderWidth: 1, padding: 10, width: 250, margin: 10, borderRadius: 10 }} value={confirmPassword} onChangeText={(t) => setConfirmPassword(t)} /> */}
                </View>
                <TouchableOpacity onPress={() => onRegister(email, password)}  >
                    <View style={{ borderRadius: 20, backgroundColor: 'lightgreen', alignItems: 'center', padding: 10 }}>
                        <Text style={{ padding: 10, fontSize: 15 }}>Register</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Text>Already Registered?
                    </Text>
                    <TouchableOpacity onPress={() => { setButton(true) }} >
                        <View >
                            <Text style={{ color: 'blue' }}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>


            <Modal visible={button}
                transparent={true}>
                <BackgroundScreen>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 22
                    }} >
                        <View style={{
                            margin: 20,
                            backgroundColor: 'white',
                            borderRadius: 20,
                            padding: 20,
                            alignItems: 'center',
                            shadowColor: 'black',
                            elevation: 10,
                        }}>
                            <View >
                                <TextInput placeholder="Enter your Email here" style={{ borderWidth: 1, padding: 10, width: 250, margin: 10, borderRadius: 10 }} value={lemail} onChangeText={(t) => setlEmail(t)} />
                                <View style={{ borderWidth: 1, margin: 10, padding: 10, flexDirection: 'row', borderRadius: 10 }}>
                                    <TextInput
                                        placeholder="Enter Your Password here"
                                         secureTextEntry={showpass}
                                        value={lpassword}
                                        textContentType="password"
                                        onChangeText={(text) => { setlPassword(text) }} />
                                    <View style={{ flex: 1, alignSelf: 'flex-end' }}>
                                        <Pressable onPress={() => { passvisible() }}>
                                            <Ionicons style={{ alignSelf: 'flex-end' }} name={eyeicon} size={22} color="black" />
                                        </Pressable>
                                    </View>
                                </View>
                                {/* <TextInput placeholder="Enter your Password here" style={{ borderWidth: 1, padding: 10, width: 250, margin: 10, borderRadius: 10 }} value={lpassword} onChangeText={(t) => setlPassword(t)} /> */}
                            </View>

                            <TouchableOpacity onPress={() => onLogin(lemail, lpassword)}  >
                                <View style={{ borderRadius: 20, backgroundColor: 'lightgreen', alignItems: 'center', padding: 10, shadowColor: 'black', elevation: 10 }}>
                                    <Text style={{ padding: 8, fontSize: 15 }}>Login</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                <Text>Or Go Back To
                                </Text>
                                <TouchableOpacity onPress={() => { setButton(false) }} >
                                    <View >
                                        <Text style={{ color: 'blue' }}>Register</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </BackgroundScreen>
            </Modal>
        </View>


    );
}