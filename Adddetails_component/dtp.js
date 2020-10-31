import React, { useState }from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function DTP() {
    const [details, setdetails] = useState([

    ]);
  
    return (
        <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
            <View>
                <Text style={styles.field}>Date</Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={styles.input}
                    placeholder='dd/mm/yyyy'
                    onChangeText={(val) => setdetails(val)} />
            </View>
            <View>
                <Text style={styles.field}>Time</Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={styles.input}
                    placeholder='00.00'
                    onChangeText={(val) => setdetails(val)} />
            </View>
            <View>
                <Text style={styles.field}>Place</Text>
                <TextInput
                    keyboardType={'default'}
                    style={styles.input}
                    placeholder='OT'
                    onChangeText={(val) => setdetails(val)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    field: {
        marginTop: 30,
        alignSelf: 'center',
        width: 60,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#0000CD',
    },

    input: {
        borderWidth: 2,
        borderColor: '#00008B',
        marginLeft: 5,
        marginRight: 5,
        width: 120,
        height: 40,
        fontStyle: "italic",
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },
})