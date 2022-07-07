import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, FlatList } from 'react-native'
import Header from '../components/Header'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import storage from '@react-native-firebase/storage';
const {width, height } = Dimensions.get("window")
class BoxList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <TouchableOpacity style = { styles.box_list}
                onPress = {()=>{
                    this.props.navigation.navigate("Chapter", {link:this.props.link})
                }}
            >
                <Text style = {{fontSize:18, marginLeft:20}}>Chương {this.props.idx}</Text>
            </TouchableOpacity>
            <View style = {styles.line}></View>
            </>
        )
    }
}
export default class ListChapter extends Component{
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
                center = { <Text style = {{ fontSize: 20, color:"white"}}>List Chapter</Text>}
            />
            <View style = {{
                marginLeft:20,
                marginTop:10,
                marginBottom:10
            }}>
                <Text style = {{fontSize:20, fontWeight:"bold",}}>Danh sách chương</Text>
            </View>
            <ScrollView style = {styles.box}>
            {
                this.props.route.params.link.map((val, idx) =>{
                    return(
                        <BoxList idx = {idx+1} navigation = {this.props.navigation} link = {val}/>
                    )
                })
            }
            </ScrollView>
            </>
        )
    }
}
var styles = StyleSheet.create({
    box:{

        backgroundColor:"white",
        
    },
    box_title:{
        width:width,
        height: 40,
        marginLeft:10,
        marginTop:10
    },
    title:{
        fontSize:24,
        color:"black",
        fontWeight:"bold"
    },
    box_content:{
        marginLeft:10,
        width:width-20,
        justifyContent:"center",
        alignItems:"center"
    },
    text_content:{
        fontSize:16,
        color:"black",

    },
    box_list:{
        width: width,
        height:50,
        justifyContent:"center",
    },
    line:{
        width:width-20,
        height:0.5,
        borderWidth:0.2,
        borderColor:"#A9A9A9",
        marginLeft:10
    }
})