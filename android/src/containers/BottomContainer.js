import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import HomeContainer from './HomeContainers'
import CategoryContainer from './CategoryContainer';
import BottomNavigator from '../components/BottomNav';
import PersonContainer from './PersonContainer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Bottom = createBottomTabNavigator()
export default class BottomContainer extends Component{
    render(){
        return(
            <Bottom.Navigator
            tabBar={props => <BottomNavigator {...props}/>}
            screenOptions={{headerShown :false, tabBarHideOnKeyboard: true}}   
            >
                <Bottom.Screen name = 'HomeContainer' component={HomeContainer}/>
                <Bottom.Screen name = 'CategoryContainer' component={CategoryContainer}/>
                <Bottom.Screen name = 'PersonContainer' component={PersonContainer}/>
            </Bottom.Navigator>
        )
    }
}