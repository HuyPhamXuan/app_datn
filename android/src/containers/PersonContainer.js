import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import Person from '../screens/Person'
import Rate from '../screens/Rate'
const Stack = createStackNavigator()
export default class PersonContainer extends Component{
    render(){
        return(
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name = "Person" component={Person}/>
                <Stack.Screen name = "Rate" component={Rate}/>
            </Stack.Navigator>
        )
    }
}