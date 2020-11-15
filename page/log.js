
import React,{Component} from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, ImageBackground, Button,ScrollView, Alert} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default class log extends React.Component {

  GetValueFunctionX = () =>{
    console.log(1)
    return fetch('http://192.168.1.101/CSTH_PHP/show_all.php')
    .then((response) => response.json())
    .then((responseJson) => {
      
      console.log(responseJson);
      // let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      // this.setState({
      //   isLoading: false,
      //   dataSource: ds.cloneWithRows(responseJson),
      // }, function() {
      //   // In this block you can do something with new state.
      // });
    })
    .catch((error) => {
      console.error(error);
    });
   
  }
 
  constructor(props) {
 
    super(props)
 
    this.state = {
      position:'',
    }
 
  }
 
  GetValueFunction = () =>{
 
 const {position}  = this.state ;

switch(position) {
  case 'Ward_doctors':
    this.props.navigation.push('Addpatien');
    break;
  case 'Director':
   this.props.navigation.push('Director');
    break;
    case 'Anesthesiologist doctor':
      this.props.navigation.push('Anesthesiologist_Doctor');
      break;
    case 'Surgery doctor':
     this.props.navigation.push('Surgery_Doctor');
      break;
      case 'Ward doctors':
        this.props.navigation.push('Select');
        break;
      case 'Nursing':
       this.props.navigation.push('Nursing');
        break;
  default:
    Alert.alert(password);
}
   //Alert.alert(position);
    //this.props.navigation.push('Registration');
  }











  render(){
    const { navigate } = this.props.navigation;

    this.state1 = {
      role: 'Select'
  }

    return (
      <ScrollView>  
      <View style={styles.container}>

       <Text style={styles.inputTexttopic}>WOC</Text> 
       <Text style={styles.inputTexttopic1}>- Colombo South Teaching Hospital -</Text> 
   


       <Text style={styles.inputText}>Select your position:</Text>
         <View style={styles.picker1}> 
            <DropDownPicker
                       items={[ 
                            {label: 'Select', value: 'Select',  hidden: true},
                            {label: 'Director', value: 'Director'},
                            {label: 'Anesthesiologist doctor', value: 'Anesthesiologist doctor' },
                            {label: 'Surgery doctor', value: 'Surgery doctor'},
                            {label: 'Ward doctors', value: 'Ward doctors'},
                            {label: 'Nursing', value: 'Nursing'},
                    ]}
                       defaultValue={this.state.role}
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



                       <Text style={styles.inputText}>Enter user name :</Text>
                          <View style={styles. inputs} >
                               <TextInput  
                                     style={styles.inputText1}
                                        placeholder="User name" 
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={text => this.setState({password:text})}
                              />
                        
                          </View>

                         <Text style={styles.inputText}>Password :</Text>
                         <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="password" 
                                        secureTextEntry={true}
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={text => this.setState({password:text})}
                              />
                         </View>


                         <View style={styles.buttons}>
                                                <Button 
                                                title="Login"
                                                color="#32a882" 
                                             //   onPress={() =>navigate('Anesthesiologist_Doctor')} 
                                             onPress={this.GetValueFunction}
                                                />
                        </View>

               <TouchableOpacity>
                    <Text style={styles.forgot1}
                    onPress={() =>navigate('Forgot')} 
                    >Forgot Password?
                         </Text>
               </TouchableOpacity>
              
                    
               <View style={styles.buttons}>  
               <Button 
                       onPress={() =>navigate('Registration')}
                       title="Signup"
                       color="#32a882" 
                       
              />
              </View >
             
      </View >
   </ScrollView>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
    
  },
 
  forgot:{
    color:"black",
    fontSize:15,
    paddingBottom:10.0,
  },
  
  forgot:{
    color:"white",
    fontSize:11,
    paddingBottom:10.0,
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
  inputs:{
    borderBottomWidth: 1,
    borderColor:'#777',
   marginRight:20,
    marginLeft:20,
    marginBottom:20,
    fontWeight: "bold",
  },
  buttons:{

    alignContent:"center",
   marginLeft:20,
   marginRight:20,
   height: 40,
  },
  inputTexttopic:{
    fontWeight: "bold",
    color:"black",
    fontSize: 45,
    marginTop:5,
    
   textAlign:"center",
  },
  inputTexttopic1:{
    fontWeight: "bold",
    color:"black",
    fontSize: 18,
    marginBottom:110,
   textAlign:"center",
  },
  forgot1:{
    fontWeight: "bold",
    color:"black",
   textAlign:"center",
   marginBottom:15,
   marginTop:15,
  },

  picker1:{
    alignContent:"center",
    marginLeft:20,
    marginRight:20,
    height: 40,
    marginBottom:10,
    
  }
  
});
