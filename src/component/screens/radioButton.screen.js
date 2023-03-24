import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SectionList } from 'react-native';

export const RadioButtonScreen = () => {
   
    const User = [
        {
            id: 1,
            title: 'Tom', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },
        {
            id: 2,
            title: 'Tom', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },
        {
            id: 3,
            title: 'Tom', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },
        {
            id: 4,
            title: 'Jerry', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },
        {
            id: 5,
            title: 'Bruno', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },
        {
            id: 6,
            title: 'Tom', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },
        {
            id: 7,
            title: 'Jerry', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },
        {
            id: 8,
            title: 'Bruno', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },
        {
            id: 9,
            title: 'Tom', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },
        {
            id: 10,
            title: 'Jerry', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },]

    return (
        <SectionList
            sections={User}
            renderItem={({ item }) => <UserData item={item} />}
            renderSectionHeader={({ section: { title } }) => <Userheader title={title} />}
        />
    );
}

const UserData = ({ item }) => {
    console.log(item)
    console.log(item)
    
    const [radiobutton, setRadiobutton] = useState(1);
    const rbutton=(radiobutton)=>{
       if(radiobutton===1)
       {
        setRadiobutton(radiobutton+1)
        return true;}
       else if(radiobutton===2)
       return false;
    }
    return (
        <View >
            <TouchableOpacity onPress={()=>{rbutton(radiobutton)}}>
                <View style={styles.radiowrapper}>
                    <View style={styles.radio}>
                        {   radiobutton===1?
                            <View style={styles.radiobg}></View> : null
                        }
                    </View>
                    <Text style={styles.text}>{item}</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}
const Userheader = (promos) => {
    const title = promos.title
    return (
        <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({

    text: {
        fontSize: 24,
        flex: 1,
        margin: 5,
        color: 'orange',
        backgroundColor: 'lightblue',
        textAlign: 'center',
        borderRadius: 15,
        width: 150,
        alignSelf: 'center'
    },
    box: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'red',
        flexDirection: 'row',
        margin: 10,
        width: 200,
        alignSelf: 'center'
    },
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
