import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import Header from '../components/Header'
import BoxList from "../components/BoxList"
import { data } from "../extend/movie_fi"
export default class Update extends Component {
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
            arr.push(data[i])
        }
        this.setState({
            buffer_data:arr,
            index:9
        })
    }
    onEndReached = () =>{
        if (this.state.index == data.length - 1){
            return
        }
        let arr = this.state.buffer_data
        for(let i = this.state.index; i < this.state.index + 10; i++){
            arr.push(data[i])
        }
        this.setState({
            buffer_data:arr,
            index: this.state.index + 10
        })

    }
    render(){
        return(
            <>
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