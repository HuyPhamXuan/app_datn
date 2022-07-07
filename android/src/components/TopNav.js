import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default class TopNavigator extends Component{
    render(){
        return(
            <>
            <View>
                
            </View>
            </>
        )
    }
}
var styles = StyleSheet.create({
    box:{
        height:55,
        flexDirection:"row",
        justifyContent:"center",
        alignItems: "center",
        backgroundColor:"#FF4500",
    },
    capnhat:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",      

    },
    decu:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",      

    },
    dafull:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",      

    },

})