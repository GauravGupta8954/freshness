import React, { useState } from "react";
import { Text, View, TextInput, Pressable, Button, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [display, setDisplay] = useState(true)
    const [showpass, setShowpass] = useState(true)
    const [eyeicon, setEyeicon] = useState("eye-off")
    const [radiobutton, setRadiobutton] = useState(1)

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
    const changebutton = () => {

    }
    return (
        <View >
            <View style={{ flex: 0.4, backgroundColor: 'lightgreen' }}>
                <Text style={{ fontSize: 30, alignItems: 'center' }}>Register Screen</Text>
            </View>
            <View style={{ paddingTop: 50, }} >
                <TextInput placeholder='Enter Your Name Here ' style={{ borderWidth: 1, margin: 10, padding: 5 }} value={name} onChangeText={(text) => { setName(text) }} />
                <TextInput placeholder='Enter Your Email Here ' style={{ borderWidth: 1, margin: 10, padding: 5 }} value={email} onChangeText={(text) => { setEmail(text) }} />
                <View style={{ borderWidth: 1, margin: 10, padding: 5, flexDirection: 'row', }}>
                    <TextInput placeholder='Enter Your Password Here ' style={{ paddingRight: 150, }} label='password' secureTextEntry={showpass} value={password} onChangeText={(text) => { setPassword(text) }} />
                    <Pressable onPress={() => { passvisible() }}>
                        <Ionicons name={eyeicon} size={24} color="black" />
                    </Pressable>
                </View>
            </View>
            <View style={{ margin: 10 }}>
                <Button title='Go to login Screen ' onPress={() => { navigation.navigate("login") }} />
            </View>
            <View style={{ margin: 10 }}>
                <Button title='Go to radio array button page ' onPress={() => { navigation.navigate("radioArray") }} />
            </View>
            <View style={{ margin: 10 }}>
                <Button title='Go to radio arrayofobjects button page ' onPress={() => { navigation.navigate("radioArrayofobject") }} />
            </View>
            <View style={{ margin: 10 }}>
                <Button title='Go to Modal button page ' onPress={() => { navigation.navigate("ModalPage") }} />
            </View>
            <View style={styles.main}>
                <TouchableOpacity onPress={() => { setRadiobutton(1) }}>
                    <View style={styles.radiowrapper}>
                        <View style={styles.radio}>
                            {radiobutton === 1 ?
                                <View style={styles.radiobg}></View> : null
                            }
                        </View>
                        <Text >Radio Button 1</Text>
                    </View>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => { setRadiobutton(2) }}>
                    <View style={styles.radiowrapper}>
                        <View style={styles.radio}>
                            {radiobutton === 2 ?
                                <View style={styles.radiobg}></View> : null
                            }
                        </View>
                        <Text >Radio Button 2</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    radio: {
        borderWidth: 2,
        borderColor: 'skyblue',
        height: 40,
        width: 40,
        borderRadius: 20,
        margin: 10,

    },
    radiowrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    radiobg: {
        backgroundColor: 'skyblue',
        height: 30,
        width: 30,
        borderRadius: 15,
        margin: 3,

    }
})