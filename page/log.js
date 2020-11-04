
import React,{Component} from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, ImageBackground, Button,Image,Appbar} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
export default class log extends React.Component {
  state={
    name:"",
    password:""
  }
  render(){
    const { navigate } = this.props.navigation;
    
    return (
  
      <View style={styles.container}>

       <Text style={styles.inputTexttopic}>Colombo South Teaching Hospital</Text> 
       <Text style={styles.inputTexttopic1}>- Kalubowila -</Text> 
       
       <Text style={styles.inputTexttopic2}>WOC</Text> 
       <Text style={styles.inputTexttopic3}>-නම දාන්න ඔනේ-</Text> 



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
    fontSize: 19,
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
    width:300,
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
  forgot1:{
    fontWeight: "bold",
    color:"black",
   textAlign:"center",
   marginBottom:15,
   marginTop:15,
  },
  inputTexttopic2:{
    fontWeight: "bold",
    color:"black",
    fontSize: 40,

   textAlign:"center",
  },
  inputTexttopic3:{
    fontWeight: "bold",
    color:"black",
    fontSize: 15,
    marginBottom:60,
   textAlign:"center",
  },
  
});
