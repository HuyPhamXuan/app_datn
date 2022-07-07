import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import Category from '../screens/Category'
import ListByCategory from '../screens/ListByCategory'
const Stack = createStackNavigator()

export default class CategoryContainer extends Component{
    render(){
        return(
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name = "Category" component={Category}/>
                <Stack.Screen name = "ListByCategory" component={ListByCategory}/>
            </Stack.Navigator>
        )
    }
}