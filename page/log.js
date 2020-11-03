
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
    const image = { uri: "https://i.pinimg.com/originals/89/20/47/892047cce5cb9cce9972699fb83e3b42.jpg" };
    return (
  
     // <View style={styles.container}>

      <ImageBackground source={image} style={styles.image}>
     
     
     <Text>ckmkdkmc</Text>
     <View style={styles.inputView} >
   
                   <TextInput  
                    style={styles.inputText}
                        placeholder="Name..." 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({email:text})}
                    />
                        
               </View>
               <View style={styles.inputView} >
                   <TextInput  
                    style={styles.inputText}
                        placeholder="Password..." 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({password:text})}
                    />
                        
               </View>
              <Button 
                       title="    Login    "
                       color="#00ff00"
                       accessibilityLabel="Learn more about this purple button"
                    marginTop= "50"
              />

               <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password? </Text>
               </TouchableOpacity>
              
           
               <Button 
                       onPress={() =>navigate('Registration')}
                       title="     Signup    "
                       color="#00ff00"
                       
              />
             
            </ImageBackground>     
     // </View >
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
 
  forgot:{
    color:"black",
    fontSize:15,
    paddingBottom:10.0,
  },
  inputText:{
    height:50,
    color:"black"
  },
  inputView:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  forgot:{
    color:"white",
    fontSize:11,
    paddingBottom:10.0,
  },
  inputs:{
    height:50,
    width:300,
    marginLeft:10,
    borderBottomColor: '#FFFFFF',
    flex:1,
  

  },

 
 
  image: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
