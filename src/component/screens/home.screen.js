import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, ScrollView, TouchableOpacity, SectionList } from 'react-native';
import { useRoute } from '@react-navigation/native';
export const HomeScreen = () => {
    const [bcolor, setBcolor] = useState("blue");
    const back = () => {
        
        if (bcolor == 'blue') {
            setBcolor('red')
            
        }
        else if (bcolor == 'red') {
            setBcolor('blue')
            
        };
    }
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
        },
        {
            id: 11,
            title: 'Bruno', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },
        {
            id: 12,
            title: 'Tom', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },
        {
            id: 13,
            title: 'Jerry', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },
        {
            id: 14,
            title: 'Bruno', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },
        {
            id: 15,
            title: 'Jerry', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },
        {
            id: 16,
            title: 'Bruno', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },
        {
            id: 17,
            title: 'Tom', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },
        {
            id: 18,
            title: 'Jerry', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },
        {
            id: 19,
            title: 'Bruno', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },
        {
            id: 20,
            title: 'Tom', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },
        {
            id: 21,
            title: 'Jerry', email: 'Tom@gmail.com', data: ['PHP', 'JAVA', 'C++', 'C']
        },
    ]
    const route = useRoute();
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, color: 'green', padding: 10 }}>
                Welocome to Our Home Page
            </Text>
            <Text style={{ fontSize: 20, color: 'lightblue', padding: 10 }}>
                It's Pleasure to meet you
            </Text>
            <Text style={{ fontSize: 20, color: 'black', padding: 10 }}>
                {route.params.caption}
            </Text>
            <SectionList
                sections={User}
                renderItem={({ item }) => <UserData item={item} />}
                renderSectionHeader={({ section: { title } }) => <Userheader title={title} />}
            />
            <View>
                {
                    User.map(() => {
                        <TouchableOpacity >
                            <View style={styles.radiowrapper}>
                                <View style={styles.radio}>
                                    
                                        <View style={styles.radiobg}></View> 
                                    
                                </View>
                                <Text >Radio Button 2</Text>
                            </View>
                        </TouchableOpacity>
                    })
                }
            </View>

        </View>
    );
}

const UserData = ({ item }) => {
    

    return (
        <View >
            <TouchableOpacity>
                <Text style={styles.text}>{item}</Text>
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
