
import React,{Component} from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, ImageBackground, Button,Image,Appbar} from 'react-native';

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
                   <TextInput  
                    style={styles.inputs}
                        placeholder="User name" 
                        underlineColorAndroid='transparent'
                        onChangeText={text => this.setState({email:text})}
                    />
                     <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/user.png'}}/>   
               </View>
               < View style={styles.inputContainer1}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/password.png'}}/>
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
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginTop:250,
    marginBottom:10,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputContainer1: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,

    marginBottom:10,
    flexDirection: 'row',
    alignItems:'center',

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
    height:45,
    marginLeft:16,
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
