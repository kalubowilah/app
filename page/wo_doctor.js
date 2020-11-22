import React from 'react';
import { StyleSheet, Text, View ,TextInput,SafeAreaView, ImageBackground,Image,ScrollView,TextField,Reinput,Button, Alert } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';



  // redio button allergies 
  var allergies = [
  {label: "Allergies occur.", value: "Allergies occur."},
   {label: "Does not cause allergies.", value: "Does not cause allergies."},
   
  ];

export default class wo_docter extends React.Component {

  constructor() {
    super();
    this.state = {
      PatientName: '',
      PatientAge: '',
      PatientAddress: '',
      PatientSex: '',
      PatientAllergies: '',
      PatientBht: '',
      PatientWard : '',
      PatientDoctor : '',
      PatientTheater : '',
      PatientTime : '',
      PatientType : '',
      PatientDate : '',
    };
  

  }
  componentDidMount() {
    var that = this;

    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    that.setState({
      //Setting the value of the date time
      date:
        date + '/' + month + '/' + year + ' ',
      time:
      hours + ':' + min + ':' + sec,
    });
  }

  PatientRegistrationFunction = () =>{

 

    // return console.log(1)

    // if(
    //   this.state.PatientName === '' ||
    //   this.state.patientAge === '' ||
    //   this.state.PatientAddress === '' ||
    //   this.state.patientSex === '' ||
    //   this.state.patientAllergies === '' ||
    //   this.state.patientBht=== ''  ||
    //   this.state.patientWard=== ''  ||
    //   this.state.patientDoctor=== ''  ||
    //   this.state.patientTheater=== ''  ||
    //   this.state.patientTime=== ''  ||
    //   this.state.patientType=== ''  ||
    //   this.state.patientDate=== ''  
    // )  {
    //   return Alert.alert('Please fill all fields')
    // }
  
    // if(this.state.UserPassword.length < 6){
    //   return Alert.alert("Password should be 6 characters minimum")
    // }
  
  
    // var pattern = /^([0-9]{9}[X|V]|[0-9]{12})$/gm
    // if(!this.state.UserNic.match(pattern)){
    //   return Alert.alert("Invalid NIC")
    // }
    // let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm;
    // if(!this.state.UserEmail.match(emailPattern)){
    //   return Alert.alert("Invalid Email")
    // }
  
    // if(this.state.UserPhone.length !== 10){
    //   return Alert.alert("Invalid Phone Number")
    // }
  
    // if(this.state.ConfirmPassword !== this.state.UserPassword){
    //   return Alert.alert('Passwords don\'t match')
    // }
  
   
   
    fetch('http://192.168.1.101/CSTH_PHP/register_patient.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
    
        name: this.state.PatientName,
        age: this.state.PatientAge,
        address: this.state.PatientAddress,
        sex: this.state.PatientSex,
        allergies: this.state.PatientAllergies,
        bht: this.state.PatientBht,
        date: this.state.PatientDate,
        doctor: this.state.PatientDoctor,
        theatre: this.state.PatientTheater,
        time: this.state.PatientTime,
        type: this.state.PatientType,
        ward: this.state.PatientWard
    
      })
    
    }).then((response) => response.json())
          .then((responseJson) => {
    
            console.log(responseJson)
            return Alert.alert(responseJson.message)
    // Showing response message coming from server after inserting records.
            // Alert.alert(responseJson);
    
          }).catch((error) => {
            console.error(error);
          });
   
  }

  render(){
    const { navigate } = this.props.navigation;
//picker (Allergies)
    this.state2 = {
      allergies: 'Allergies'
  }

  //picker (operation theatri)
  this.state1 = {
    opt: 'Theatre'
}
 //picker (operation theatri)
 this.state3 = {
  Sex: 'Male'
}
this.state4 = {
  Permission: 'Ready to Surgery'
}

    
    return (
      <SafeAreaView>
      <ScrollView>
       <View style={styles.container}>

         
       <Text style={styles.inputTexttopic}>Admisson of patients</Text> 
       <Text style={styles.inputTexttopic1}>- Kalubowila -</Text> 

       
      



             <Text style={styles.Subtopic}> Admisson information </Text> 

              <Text style={styles.inputText}>Editer name :</Text> 
                <View style={styles.inputsview} >
                               <Text  
                                     style={styles.inputText1}
                                        placeholder="Name" 
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={text => this.setState({password:text})}
                              > {this.props.user_id} </Text>
                        
                 </View>

                  
                 {/* <Text style={styles.inputText}>Date :</Text>
                 <View style={styles. inputsview} >
                               <Text 
                                        style={styles.inputText1}
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={text => this.setState({password:text})}
                              >{this.state.date}</Text>
                        
                 </View> */}



                 

                 {/* <Text style={styles.inputText}>Time</Text>
                 <View style={styles. inputsview} >
                               <Text 
                                        style={styles.inputText1}
                                       
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={text => this.setState({password:text})}
                              >{this.state.time}</Text>
                        
                 </View> */}



                 <Text style={styles.Subtopic}>Patient information </Text> 

                 <Text style={styles.inputText}>Patient name :</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="sadun" 
                                       // keyboardType = 'numeric'
                                        placeholderTextColor="#DCDCDC"
                                       onChangeText={name => this.setState({PatientName:name})}
                              />
                        
                 </View>

                 <Text style={styles.inputText}>Patient age (years) :</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="18" 
                                        placeholderTextColor="#DCDCDC"
                                       onChangeText={age => this.setState({PatientAge:age})}
                              />
                        
                 </View>

                 <Text style={styles.inputText}>Patient address:</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholderTextColor="#DCDCDC"
                                       onChangeText={address => this.setState({PatientAddress:address})}
                                      multiline={true}
                              />
                        
                 </View>
      
                 <Text style={styles.inputText}>Sex (male / female)</Text>
                 <View style={styles.picker1}> 
            <DropDownPicker
                       items={[ 
                            {label: 'Male', value: 'Male',  hidden: true},
                            {label: 'Female', value: 'Female' },
                          
                    ]}
                       defaultValue={this.state. Sex}
                       containerStyle={{height: 40}}
                       style={styles.inputText1}
                       style={{backgroundColor: '#fafafa'}}
                       itemStyle={{
                       justifyContent: 'flex-start'
                    }}
                          dropDownStyle={{backgroundColor: '#fafafa'}}
                          onChangeItem={item => this.setState({
                          PatientSex: item.value
                    })}
                     >
             </DropDownPicker>
             </View>

                 <Text style={styles.inputText}>Allergies </Text>
                 <View style={styles.picker1}> 
            <DropDownPicker
                       items={[ 
                            {label: 'Allergies', value: 'Allergies',  hidden: true},
                            {label: 'Does not cause allergies', value: 'Does not cause allergies' },
                          
                    ]}
                       defaultValue={this.state. allergies}
                       containerStyle={{height: 40}}
                       style={styles.inputText1}
                       style={{backgroundColor: '#fafafa'}}
                       itemStyle={{
                       justifyContent: 'flex-start'
                    }}
                          dropDownStyle={{backgroundColor: '#fafafa'}}
                          onChangeItem={item => this.setState({
                          PatientAllergies: item.value
                    })}
                     >
             </DropDownPicker>
             </View>


                 <Text style={styles.Subtopic}> Surgery information </Text> 

                 <Text style={styles.inputText}>B.H.T.</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="" 
                                       
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={bth => this.setState({PatientBht:bth})}
                              />
                        
                 </View>

                 <Text style={styles.inputText}>Ward</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="Eg - 19/20 " 
                                       
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={ward => this.setState({PatientWard:ward})}
                              />
                        
                 </View>
                        
                 <Text style={styles.inputText}>Surgery Doctor name :</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="Sadun Tharaka" 
                                       
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={doctor => this.setState({PatientDoctor:doctor})}
                              />
                        
                 </View>

   <Text style={styles.inputText}>Select Surgery theatre:</Text>
         <View style={styles.picker1}> 
            <DropDownPicker
                       items={[ 
                            {label: 'Theatre', value: 'Theatre',  hidden: true},
                            {label: 'Anesthesiologist doctor', value: 'ot1' },
                            {label: 'Ward doctors', value: 'ot2'},
                            {label: 'ward consultant.', value: 'ward consultant.'},
                    ]}
                       defaultValue={this.state.opt}
                       containerStyle={{height: 40}}
                       style={styles.inputText1}
                       style={{backgroundColor: '#fafafa'}}
                       itemStyle={{
                       justifyContent: 'flex-start'
                    }}
                          dropDownStyle={{backgroundColor: '#fafafa'}}
                          onChangeItem={item => this.setState({
                          PatientTheater: item.value
                    })}
                     >
             </DropDownPicker>
             </View>

             <Text style={styles.inputText}>Surgery time (H):</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="eg - 15:30" 
                                       
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={text => this.setState({PatientTime:text})}
                                        
                              />
                        
                 </View>
                 <Text style={styles.inputText}>Surgery type:</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={text => this.setState({PatientType:text})}
                                        
                              />
                        
                 </View>

                 <Text style={styles.inputText}>Surgery date (D/M/Y):</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="eg - 03/10/2020" 
                                        // keyboardType="decimal-pad"
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={text => this.setState({PatientDate:text})}
                                        
                              />
                        
                 </View>

                 <Text style={styles.inputText}>Add your Permission:</Text>
         <View style={styles.picker1}> 
            <DropDownPicker
                       items={[                          
                            {label: 'Ready to Surgery', value: 'Ready to Surgery' },
                            {label: 'Problem to Surgery', value: 'Problem to Surgery'},
                        
                    ]}
                       defaultValue={this.state.Permission}
                       containerStyle={{height: 40}}
                       style={styles.inputText1}
                       style={{backgroundColor: '#fafafa'}}
                       itemStyle={{
                       justifyContent: 'flex-start'
                    }}
                          dropDownStyle={{backgroundColor: '#fafafa'}}
                          onChangeItem={item=> this.setState({position:item.value})}
                     >
             </DropDownPicker>
             </View>
             <Text style={styles.inputText}>Note:</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholderTextColor="#DCDCDC"
                                      //  onChangeText={text => this.setState({password:text})}
                                      multiline={true}
                              />
                        
                 </View>

                 <View style={styles.buttons}>
                       <Button
                        title="Submit"
                        onPress={this.PatientRegistrationFunction}
                         color="#32a882" 
                         
                      />
                   </View>

                   <View style={styles.buttonsback}>
               <Button 
                       onPress={() =>navigate('Select')}
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
},
Subtopic:{
  fontWeight: "bold",
  color:"black",
  fontSize: 20,
  marginLeft:20,
  textDecorationLine: 'underline',
  marginBottom:20,
  marginTop:20
},
inputsview:{
 
  borderColor:'#777',
 marginRight:20,
  marginLeft:20,
  marginBottom:15,
  fontWeight: "bold",
},
redio1:{
  
  
    borderColor:'#777',
   marginRight:40,
    marginLeft:40,
    marginBottom:20,
    fontWeight: "bold",
},
});
