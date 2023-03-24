import React, { useState,useEffect } from "react";
import { Text, View, TextInput, Pressable, Button, FlatList ,TouchableOpacity, TouchableHighlight,StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';



export const LoginScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [display, setDisplay] = useState(true)
    const [showpass, setShowpass] = useState(true)
    const [eyeicon, setEyeicon] = useState("eye-off")
    const [submit,setSubmit]=useState(0);
    const [count,setCount]=useState(true);
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
    const resetForm = () => {
        setDisplay(false)
        setName("")
        setEmail("")
        setPassword("")
    }
     

    return (
        <View>
            <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
                <Text>Login Screen</Text>
            </View>
            <TextInput
                style={{ borderWidth: 1, margin: 10, padding: 5 }}
                placeholder='Enter your email'
                label="E-mail"
                value={email}
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(u) => setEmail(u)} />
            <View style={{ borderWidth: 1, margin: 10, padding: 5, flexDirection: 'row', }}>
                <TextInput
                    placeholder="Enter Password here"
                    style={{ paddingRight: 150, }}
                    label='password' secureTextEntry={showpass}
                    value={password}
                    textContentType="password"
                    onChangeText={(text) => { setPassword(text) }} />
                <Pressable onPress={() => { passvisible() }}>
                    <Ionicons name={eyeicon} size={24} color="black" />
                </Pressable>
            </View>
            <View style={{ margin: 10 }}>
                <Button title='Clear' onPress={() => { resetForm() }} />
            </View>
            <View style={{ margin: 10 }}>
                <Button title='Print Inputs'
                    onPress={() => { setDisplay(true) }} />
            </View>
            <View style={{ margin: 10 }}>
                <Button title='Go to Register Screen ' onPress={() => { navigation.navigate("register") }} />
            </View>
            <View style={{ margin: 10 }}>
                <Button title='Go to home page ' onPress={() => { navigation.navigate("home") }} />
            </View>
            <View style={{ margin: 10 }}>
                <Button title='Go to radio button page ' onPress={() => { navigation.navigate("radio") }} />
            </View>
            <View style={{ margin: 10 }}>
                <Button title='Go to new register page ' onPress={() => { navigation.navigate("register2") }} />
            </View>
            <View>
                {
                    display ?
                        <View>

                            <Text style={{ fontSize: 12, padding: 20 }}>Email Is : {email} </Text>
                            <Text style={{ fontSize: 12, padding: 20 }}>Password Is : {password} </Text>
                        </View>
                        :
                        null
                }
            </View>
            <TouchableOpacity style={{ borderRadius: 10, padding: 10,backgroundColor:'lightblue',margin:20,height:50,width:150 }} onPress={()=>{setSubmit(submit+1)}}>
                <Text style={{ fontSize: 20,textAlign:'center' }}> Submit : {submit}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderRadius: 10, padding: 10,backgroundColor:'lightblue',margin:20,height:50,width:150 }} onPress={()=>{setCount(!count)}}>
                <Text style={{ fontSize: 20,textAlign:'center' }}> Toggle</Text>
            </TouchableOpacity>
            {
                count? <UseToggle/>:null
            }
            <Useapp info={{submit,count}}/>
            <TouchableHighlight>
                <Text style={styles.button}>United</Text>
            </TouchableHighlight>

        </View>
    );
}

const Useapp =(props)=>{
    
    info=props.info
    useEffect (()=>{
        console.warn(info.submit)
    },[info.submit])
    return(
   <Text>Submit : {info.submit}</Text>  
    );
 
 
}
const UseToggle=()=>{
    let timer=setInterval(()=>{console.warn("timer called")},2000)
    useEffect(()=>{return() => {clearInterval(timer)}})
    return(  
    <Text style={{fontSize:20,color:'red'}}>Student Toggle</Text>    
    ) 
 }

const styles=StyleSheet.create({
button:{
    backgroundColor:'grey',
    margin:10,
    shadowColor:'blue',
    elevation:10,
    opacity:1,
    borderRadius:10,
    fontSize:20,
    textAlign:'center',
    padding:10,
}



})