import React from 'react';
import { StyleSheet, Text, View ,TextInput,SafeAreaView, ImageBackground,Image,ScrollView,TextField,Reinput,Button,Alert } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import DropDownPicker from 'react-native-dropdown-picker';
 
export default class Project extends React.Component {
 
constructor(props) {
 
    super(props)
 
    this.state = {
 
      // UserName: '',
      // UserEmail: '',
      // UserPassword: ''
      UserName: '',
      UserEmail: '',
      UserPassword: '',
      // UserNic: ''
 
    }
 
  }
 
UserRegistrationFunction = () =>{

   console.log(123)
  return console.log(this.state.UserName)
 
  fetch('http://192.168.1.101/CSTH_PHP/register_user.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      name: this.state.UserName,
  
      email: this.state.UserEmail,
  
      password: this.state.UserPassword,
      // nic: this.state.UserNic
  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
          console.log(responseJson)
  // Showing response message coming from server after inserting records.
          // Alert.alert(responseJson);
  
        }).catch((error) => {
          console.error(error);
        });
 
}
 
render(){
    const { navigate } = this.props.navigation;
    state = {
      language: 'java',

    };

 
    this.state = {
      role: 'Director'
  }

    return (
      <SafeAreaView>
      <ScrollView>
       <View style={styles.container}>

         
       <Text style={styles.inputTexttopic}>Colombo South Teaching Hospital</Text> 
       <Text style={styles.inputTexttopic1}>- Kalubowila -</Text> 

       
       <Text style={styles.inputText}>Select your position:</Text>
       <View style={styles.picker1}> 
            <DropDownPicker
                       items={[ 
                            {label: 'Director', value: 'Director',  hidden: true},
                            {label: 'Anesthesiologist doctor', value: 'Anesthesiologist doctor' },
                            {label: 'Ward doctors', value: 'Ward doctors'},
                            {label: 'ward consultant.', value: 'ward consultant.'},
                    ]}
                       defaultValue={this.state.role}
                       containerStyle={{height: 40}}
                       style={styles.inputText1}
                       style={{backgroundColor: '#fafafa'}}
                       itemStyle={{
                       justifyContent: 'flex-start'
                    }}
                          dropDownStyle={{backgroundColor: '#fafafa'}}
                          onChangeItem={item => this.setState({
                          country: item.value
                    })}
                     >
             </DropDownPicker>
             </View>






              <Text style={styles.inputText}>Enter your name :</Text> 
                <View style={styles. inputs} >
                               {/* <TextInput  
                                     style={styles.inputText1}
                                        placeholder="eg- Sadun Tharaka." 
                                        placeholderTextColor="#DCDCDC"
                                        // ref={(el) => {this.TextInputName = el; }}
                                        onChangeText={TextInputName => this.setState({UserName : TextInputName})}
                                        // value = {this.state.name}
                              /> */}
                              <TextInput
                              placeholder="Enter User Name"
                              onChangeText={name => this.setState({UserName : name})}
                              underlineColorAndroid='transparent'
                              style={styles.inputText1}
                              />
                        
                 </View>

                 <Text style={styles.inputText}>Your registration number :</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="XXXX" 
                                        placeholderTextColor="#DCDCDC"
                                        // onChangeText={TextInputEmail => this.setState({email : TextInputEmail})}
                              />
                        
                 </View>

                 <Text style={styles.inputText}>NIC number :</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="XXXXXXXXXXV" 
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={TextInputNIC => this.setState({nic : TextInputNIC})}
                              />
                        
                 </View>

                 <Text style={styles.inputText}>Enter your phone No: :</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="eg- +94*********" 
                                        keyboardType = 'numeric'
                                        placeholderTextColor="#DCDCDC"
                                        // onChangeText={text => this.setState({password:text})}
                              />
                        
                 </View>

                 <Text style={styles.inputText}>Email address: :</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="" 
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={TextInputEmail => this.setState({email:TextInputEmail})}
                              />
                        
                 </View>

                 <Text style={styles.inputText}>Password :</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="Must have at least 8 chatacters." 
                                        secureTextEntry={true}
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={text => this.setState({password:text})}
                              />
                        
                 </View>
        
                 <Text style={styles.inputText}>Re-enter password :</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="" 
                                        secureTextEntry={true}
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={text => this.setState({password:text})}
                              />
                        
                 </View>
              
                 <View style={styles.buttons}>
                       <Button
                        title="Submit"
                        onPress={this.UserRegistrationFunction}
                         color="#32a882" S
                         
                      />
                   </View>

                   <View style={styles.buttonsback}>
               <Button 
                       onPress={() =>navigate('Welcome')}
                       title="Back"
                       color="#32a882" 
                       
              />
              </View >
       </View>

       </ScrollView>              
       </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    
  },
  inputs:{
    borderBottomWidth: 1,
    borderColor:'#777',
   marginRight:20,
    marginLeft:20,
    marginBottom:20,
    fontWeight: "bold",
    

  },
  inputText:{
    fontWeight: "bold",
    color:"black",
    fontSize: 17,
    marginLeft:20,
  },
  inputText1:{
    fontWeight: "bold",
    color:"green",
    fontSize: 16,
    
  },
buttons:{

  alignContent:"center",
   marginLeft:20,
   marginRight:20,
   height: 40,
   marginTop:40,
},

buttonsback:{

  alignContent:"center",
 marginLeft:20,
 marginRight:20,
 height: 40,
 marginTop:10,
 marginBottom:50,
 
},
inputTexttopic:{
  fontWeight: "bold",
  color:"black",
  fontSize: 22,
  marginTop:25,
  
 textAlign:"center",
},
inputTexttopic1:{
  fontWeight: "bold",
  color:"black",
  fontSize: 22,
 
  marginBottom:40,
 textAlign:"center",


},
picker1:{
  alignContent:"center",
  marginLeft:20,
  marginRight:20,
  height: 40,
  marginBottom:10,
  marginTop:5,
}
});