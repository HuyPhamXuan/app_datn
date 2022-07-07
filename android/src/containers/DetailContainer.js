import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Detail from '../screens/Detail'
import { createStackNavigator } from "@react-navigation/stack"
import Chapter from '../screens/Chapter'
import ListChapter from '../screens/ListChapter'
const Stack = createStackNavigator()
export default class DetailContainer extends Component{

    render(){
        return(
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name = "Detail" component={()=> <Detail val = {this.props.route.params.val} navigation = {this.props.navigation}/>}/>
                <Stack.Screen name = "Chapter" component={Chapter}/>
                <Stack.Screen name = "ListChapter" component={ListChapter}/>
            </Stack.Navigator>
        )
    }
}