import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({items,presshandler}){

    return(
        <TouchableOpacity onPress={()=>presshandler(items.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18} color='#333'/>
             <Text style={styles.text}>
                {items.text}
            </Text>
        </View>

        </TouchableOpacity>
    )
    
}
const styles =StyleSheet.create({
    item:
    {
        flexDirection: 'row',
        padding: 18,
        marginTop: 20,
        borderColor: 'red',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 15
        
    },
    text:
    {
       marginLeft:10,
        
    },
    
});