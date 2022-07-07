import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native'
import Header from '../components/Header'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import BoxAvt from '../components/BoxAvt'
import Menu from '../components/Menu'
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
const {width, height } = Dimensions.get("window")
const data = [5,4,3,2,1]
export default class Detail extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:"",
            number: 0,
            link: []
        }
    }
    componentDidMount(){

        storage().ref('/war').list().then(res => {
            let arr = []
            res.items.map((val, idx) => {
                arr.push("/"+ val.path)
            })
            this.setState({
                number: res.items.length,
                link: arr
            })
        })
    }
        
    render(){
        return(
            <>
            <Header
                left = {
                    <TouchableOpacity
                        onPress={()=>{this.props.navigation.goBack()}}
                    >
                        <Ionicons name ="chevron-back-outline" size={35} color = "white"/>
                    </TouchableOpacity>
                   }            
                center = { <Text style = {{ fontSize: 20, color:"white"}}>Detail</Text>}
            />
            <ScrollView style = {styles.box}>
                <View style = {{marginTop:15, width:width-20, marginLeft:10, justifyContent:"center", alignItems:"center"}}>
                   <Text style = {{fontWeight:"900", fontSize:24, color:"#4682B4"}}>{this.props.val.title}</Text>
                </View>
                <BoxAvt value = {this.props.val}/>
                <Menu value = {this.props.val} navigation = {this.props.navigation} link = {this.state.link}/>
                <View style ={{height:height - width/4 - 195, backgroundColor:"white", marginLeft:15, marginRight:15,  justifyContent:"center", alignItems:"center"}}>
                    <View style = {{marginTop:15}}></View>
             
                    <View style = {{marginTop:15}}></View>
                </View>
                <View style = {{marginTop:15}}>

                </View>
            </ScrollView>
            </>
        )
    }
}
var styles = StyleSheet.create({
    box:{
        flex:1,
        backgroundColor:"white"
        
    }
})