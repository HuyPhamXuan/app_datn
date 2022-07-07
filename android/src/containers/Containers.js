import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import BottomContainer from './BottomContainer'
import DetailContainer from './DetailContainer'
import { createStackNavigator } from "@react-navigation/stack"
const Stack = createStackNavigator()

export default class Container extends Component{
    render(){
        return(
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name = "BottomContainer" component={BottomContainer}/>
                <Stack.Screen name = "DetailContainer" component={DetailContainer}/>
            </Stack.Navigator>
        )
    }
}