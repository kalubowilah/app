import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function LastDetails() {
    const [details, setdetails] = useState([

    ]);

    return (
        <View >
            <View>
                <Text style={styles.fields}>Patient's Name</Text>
                <TextInput
                    keyboardType={'default'}
                    style={styles.inputs}
                    onChangeText={(val) => setdetails(val)} />
            </View>

            <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
                <Text style={styles.age_gender1}>Age</Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={styles.age_gender2}
                    onChangeText={(val) => setdetails(val)} />
            
                <Text style={styles.age_gender1}>Gender</Text>
                <TextInput
                    keyboardType={'default'}
                    style={styles.age_gender2}
                    onChangeText={(val) => setdetails(val)} />
            </View>

            <View>
                <Text style={styles.fields}>B.H.T</Text>
                <TextInput
                    keyboardType={'default'}
                    style={styles.inputs}
                    onChangeText={(val) => setdetails(val)} />
            </View>

            <View>
                <Text style={styles.fields}>Surgery</Text>
                <TextInput
                    keyboardType={'default'}
                    style={styles.inputs}
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

    fields: {
        paddingTop: 10,
        marginLeft: 25,
        width: 150,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#0000CD',
      },
    
      inputs: {
        marginLeft: 20,
        borderWidth: 2,
        borderColor: '#00008B',
        paddingLeft: 10,
        width: 350,
        height: 40,
        fontStyle: "italic",
        fontWeight: 'bold',
      },

      age_gender1:{
        paddingTop: 25,
        marginLeft: 25,
        paddingBottom:10,
        width: 80,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#0000CD',
      },
      age_gender2:{
        marginTop: 20,
        marginLeft: 10,
        borderWidth: 2,
        borderColor: '#00008B',
        width: 70,
        height: 40,
        fontStyle: "italic",
        fontWeight: 'bold',
      },
})