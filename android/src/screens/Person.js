import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, FlatList, Image } from 'react-native'
import Header from '../components/Header'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
const { width, height } = Dimensions.get("window")
class Person extends Component{
    render(){
        return(
            <>
            <Header
                center = { <Text style = {{ fontSize: 20, color:"white"}}>Person</Text>}
            />
            <View style = {styles.box_avt}>
                <View style = {{flex:1, justifyContent:"center", alignItems:"center", }}>
                <Ionicons name = "ios-person-circle-outline" size={80} color ={"#FF4500"}/>
                </View>
                <View style = {{flex:4, justifyContent:"center",  }}>
                    <Text style = {{fontSize:25, fontWeight:"bold", fontStyle:"italic", marginLeft:10}}>Hi, Pham Xuan Huy</Text>
                </View>
            </View>
            <TouchableOpacity 
                style = {styles.box_sub}
                onPress = {()=>{
                    this.props.navigation.navigate("Rate")
                }}
            >
                <Text style = {{fontSize:18, fontWeight:"bold", fontStyle:"italic"}}>Đánh giá</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.box_sub}
                onPress = {()=>{
                    this.props.dispatch({
                        type:'DELETE_RATE',
                    })
                }}
            >
                <Text style = {{fontSize:18, fontWeight:"bold", fontStyle:"italic"}}>Xóa dữ liệu</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.box_sub}>
                <Text style = {{fontSize:18, fontWeight:"bold", fontStyle:"italic"}}>Đăng xuất</Text>
            </TouchableOpacity>
            </>
        )
    }
}
function mapStatetoProps(state){
    return {
        rate: state.rate,
        numberId: state.numberId
    };
}
export default connect(mapStatetoProps)(Person);
var styles = StyleSheet.create({
    box_avt:{
        flexDirection:"row",
        width:width,
        height: 80,
        marginTop:10,
    },
    box_sub:{
        width:width-20,
        justifyContent:"center",
        borderBottomWidth:0.2,
        height:60,
        marginLeft:10,
        borderColor:"gray"
    }
})