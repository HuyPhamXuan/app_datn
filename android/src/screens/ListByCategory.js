import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import Header from '../components/Header'
import BoxList from "../components/BoxList"

export default class ListByCategory extends Component {
    constructor(props){
        super(props)
        this.state = {
            buffer_data:[],
            index:0
        }
    }
    componentDidMount(){
        let arr = []
        for(let i =0; i<10; i++){
            arr.push(this.props.route.params.data[i])
        }
        this.setState({
            buffer_data:arr,
            index:9
        })
    }
    onEndReached = () =>{
        if (this.state.index == this.props.route.params.data.length - 1){
            return
        }
        let arr = this.state.buffer_data
        for(let i = this.state.index; i < this.state.index + 10; i++){
            arr.push(this.props.route.params.data[i])
        }
        this.setState({
            buffer_data:arr,
            index: this.state.index + 10
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
                center = { <Text style = {{ fontSize: 20, color:"white"}}>{this.props.route.params.category}</Text>}
            />
            <View style = {{ marginTop:10}}></View>
            <FlatList
                data={ this.state.buffer_data}
                renderItem = {({item})=>{
                    return(
                        <>
                        <BoxList value = {item}  navigation = {this.props.navigation} />
                        <View style ={{marginTop: 10}}></View>
                        </>
                        
                    )
                }}
                onEndReached = {this.onEndReached}
                onEndReachedThreshold = {0.5}
            >

            </FlatList>

            </>
        )
    }
}
var styles = StyleSheet.create({
    background:{ 
        backgroundColor:"#D3D3D3"
    },
    line:{
        marginTop: 15,
    },
})