import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function FlatButton({ text, onPress }) {
    
    return (
        <TouchableOpacity onPress={ onPress }>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop:15,
        marginLeft:25,
        marginRight:25,
        borderRadius:40,
        paddingVertical:10,
        paddingHorizontal:10,
        backgroundColor:'#4169E1',
    },
    buttonText:{
        color: 'white',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:16,
        textAlign:'center',
    }

})

