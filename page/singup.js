import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, ImageBackground,Image,ScrollView,TextField,Reinput } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
export default class signup extends React.Component {

  render(){
    const { navigate } = this.props.navigation;
    state = {
      language: 'java',
    };

    return (
      
       <View style={styles.container}>
              
               <View style={styles. inputContainer} >
                
                       <Fumi style={styles.inputs}
                          label={'Dr. Name'}
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
                       label={'Address'}
                       iconClass={FontAwesomeIcon}
                       iconName={'home'}
                       iconColor={'#f95a25'}
                       iconSize={20}
                       iconWidth={20}
                       inputPadding={16}
                 />  
              </View>

        
        <View style={styles. inputContainer} >
                
                <Fumi style={styles.inputs}
                   label={'Phone No :'}
                  iconClass={FontAwesomeIcon}
                   iconName={'phone'}
                   iconColor={'#f95a25'}
                 iconSize={20}
                 iconWidth={20}
                 inputPadding={16}
                 />  
        </View>
        <View style={styles. inputContainer} >
                
                <Fumi style={styles.inputs}
                   label={'Re. number :'}
                  iconClass={FontAwesomeIcon}
                   iconName={''}
                   iconColor={'#f95a25'}
                 iconSize={20}
                 iconWidth={20}
                 inputPadding={16}
                 />  
        </View>

       </View>

                       
       
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
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
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

});
