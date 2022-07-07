import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Chapter from '../screens/Chapter'
import ListChapter from '../screens/ListChapter'
import { createStackNavigator } from "@react-navigation/stack"
const Stack = createStackNavigator()

export default class HomeContainer extends Component{
    render(){
        return(
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name = "Home" component={Home}/>
            </Stack.Navigator>
        )
    }
}