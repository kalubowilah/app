import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Operation List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:60,
        marginTop:30,
        backgroundColor:'#009ACD',
    },

    title: {
        textAlign:'center',
        color:'#fff',
        fontSize:40,
        fontWeight:'bold',
    }
});