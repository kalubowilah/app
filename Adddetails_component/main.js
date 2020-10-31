import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './component/header';
import DTP from './component/dtp';
import LastDetails from './component/lastdetails';
import FlatButton from './component/button';     

export default function App() {

  const [details, setdetails] = useState([

  ]);

  return (
     
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('Dismissed Keyboard');
    }}>
      
      <View style={styles.container}>
      
        <Header />
        <DTP />

        <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
          <View>
            <Text style={styles.doctorfield}>Doctor's Name</Text>
            <TextInput
              keyboardType={'default'}
              style={styles.doctor}
              placeholder='Dr.'
              onChangeText={(val) => setdetails(val)} />
          </View>
        </View>
        <Text></Text>
        <Text>-------------------------------------------------</Text>

        <LastDetails />
        
        <StatusBar style="auto" />
        <FlatButton text='Submit'/>
        <FlatButton text='Reset'/>
        <FlatButton text='Exit'/>
      </View>
      
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  doctorfield: {
    marginTop: 15,
    paddingLeft: 85,
    alignSelf: 'center',
    width: 300,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#0000CD',
  },
  doctor: {
    borderWidth: 2,
    borderColor: '#00008B',
    marginLeft: 5,
    marginRight: 5,
    width: 340,
    height: 40,
    fontStyle: "italic",
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },

});S