//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import FirstPage from './page/log';
import SecondPage from './page/singup';
import ThirdPage from './page/foget_password.js';
import FourthPage from './page/wo_doctor.js';
//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any d
    Welcome: { screen: FirstPage }, 
    //First entry by default be our first screen if we do not define initialRouteName
    Registration : { screen: SecondPage }, 

    Forgot: { screen: ThirdPage }, 
    addpatien: { screen: FourthPage }, 
  },
 // {
   // initialRouteName: 'FirstPag',
 // }
);
export default createAppContainer(App);