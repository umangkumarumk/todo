import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}
const styles =StyleSheet.create({
    header:
    {
        height: 80,
        padding:20,
        backgroundColor : 'pink',
    },
    title:
    {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
       fontStyle: ('normal','italic'),
        
    }
});