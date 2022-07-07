import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import { createStackNavigator } from "@react-navigation/stack"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Update from "../screens/Update"
import Full from '../screens/Full'
import Nominations from '../screens/Nominations'
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator()
export default class TabContainer extends Component{
    render(){
        return(
            <Tab.Navigator>
                <Tab.Screen name = 'Full' component={Full}/>
                <Tab.Screen name = "Nominations" component={Nominations}/>
                <Tab.Screen name = "Update" component={Update}/>
            </Tab.Navigator>
        )
    }
} 