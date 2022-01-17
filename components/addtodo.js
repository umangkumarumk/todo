import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput,Button} from 'react-native';


export default function AddTodos({submithandler}){

    const [text,setText]=useState('');
    const changehandler=(val)=>{
        setText(val);
    }
    return (
        <View>
        <TextInput
            style={styles.input}
            placeholder='Add todo..'
            onChangeText={(val)=>changehandler(val)}
        />
        <Button onPress={()=>submithandler(text)} title='add' color='coral'/>
        
        </View>
    )
}

const styles =StyleSheet.create({
    input:
    {
        marginBottom:10,
        paddingHorizontal: 8,
        paddingBottom: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
        
    },
    
});