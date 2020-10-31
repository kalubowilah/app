
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
     
     
     <View style={styles. inputContainer} >
                
                <Fumi style={styles.inputs}
                   label={'User name:'}
                   iconClass={FontAwesomeIcon}
                   iconName={'user'}
                   iconColor={'#f95a25'}
                   iconSize={20}
                   iconWidth={20}
                   inputPadding={16}
                 />  
        </View>

        <View style={styles. inputContainer} >
                
                <Fumi style={styles.inputs}
                   label={'Password:'}
                   secureTextEntry={true}
                   iconClass={FontAwesomeIcon}
                   iconName={'phone'}
                   iconColor={'#f95a25'}
                   iconSize={20}
                   iconWidth={20}
                   inputPadding={16}
                 />  
        </View>
           
        

              <Button 
                       title="    Login    "
                       color="#841584"
                       accessibilityLabel="Learn more about this purple button"
                    marginTop= "50"
              />

               <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password? </Text>
               </TouchableOpacity>
              
              
               <Button 
                       onPress={() =>navigate('SecondPage')}
                       title="     Signup    "
                       color="#841584"
                        accessibilityLabel="Learn more about this purple button"
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
 
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    width:300,
    marginBottom:10,
    flexDirection: 'row',
    shadowColor: "#808080",
    
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputs:{
    height:50,
    width:300,
    marginLeft:10,
    borderBottomColor: '#FFFFFF',
    flex:1,
  

  },

  loginBtn:{
    width:"50%",
    backgroundColor:"#00ff00",
    borderRadius:25,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
  },
  singBtn:{
    width:"50%",
    backgroundColor:"#00ff00",
    borderRadius:25,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
