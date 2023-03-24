import React, {useState} from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';

export const RadioArrayofobjects = () => {
    const [radiobutton, setRadiobutton] = useState('');
    const a = [
        {id:1 ,name:'PHP'},
         { id:2, name:'JAVA'},
          { id:3 ,name:'C++'},
          {id:4, name:'C'}
        ]
    
   
    return ( 
        <View>
            {
                a.map((item, key) => 
                     (
                        <View >
                            <TouchableOpacity onPress={()=>{setRadiobutton(item.id)}} >
                                <View style={styles.radiowrapper}>
                                    <View style={styles.radio}>
                                        { radiobutton===item.id?
                                        <View style={styles.radiobg}></View> : null
                                        }
                                    </View>
                                    <Text key={key}>{item.name} </Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    )
                )
            }
        </View>
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
