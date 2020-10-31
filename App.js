//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import FirstPage from './page/log';
import SecondPage from './page/singup';
//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any d
    FirstPag: { screen: FirstPage }, 
    //First entry by default be our first screen if we do not define initialRouteName
    SecondPage: { screen: SecondPage }, 
  },
 // {
   // initialRouteName: 'FirstPag',
 // }
);
export default createAppContainer(App);