import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, TextInput } from 'react-native'
import Header from "../components/Header"
import Ionicons  from 'react-native-vector-icons/Ionicons'

const { width, height } = Dimensions.get("window")
class Star extends Component{
    constructor(props){
        super(props)
        this.state = {
            array:[ 1, 2, 3, 4, 5]
        }
    }

    render(){
        return(
            <>
            <View style = {styles.box_sub_23}>
            {
                this.state.array.map((val)=>{
                    return(
                        <Ionicons name = "ios-star" size={27} color ={val <= 5 - this.props.number?"black":"#FF4500"}/>
                    )
                })
            }
            </View>
            </>
        )
    }
}
export default class BoxList3 extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <>
            
            <TouchableOpacity 
                style ={styles.box}
                onPress = {()=>{
                    this.props.navigation.navigate("DetailContainer", {val: this.props.value})
                }}
            >
                <View style ={ styles.box_img }>
                    <Ionicons name = "alarm-sharp" size={50} color ={"#FF4500"}/>

                </View>
                <View style = { styles.box_text }>
                    <View style = {styles.box_title}>
                        <Text style = {{fontSize: 16, color :"#4682B4", marginRight:10, fontWeight:"bold"}}>{this.props.value.title}</Text>
                    </View>
                    <View style = {styles.sub_line}></View>
                    <View style ={styles.box_2}>
                        <View style = {styles.box_sub_21}>
                            <Text style ={{fontStyle:"italic",  color:"#FF8C00" , fontWeight:"bold"}}>Tác giả: </Text>
                            <Text>Phạm Xuân Huy</Text>
                        </View>
                        <View style = {styles.box_sub_22}>
                            <Text style ={{fontStyle:"italic",  color:"#FF8C00" , fontWeight:"bold"}}>Thể loại: </Text>
                            <View style = {{width:width -170, height:50}}>
                                <Text>{this.props.value.genres}</Text>
                            </View>
                        </View>
                        <Star number = {this.props.value.number}/>
                    </View>
                </View>
            </TouchableOpacity>
            </>
        )
    }
}
var styles = StyleSheet.create({
    box:{
        flexDirection:"row",
        height: 155,
        width: width - 40,
        marginLeft: 20,
        borderRadius:5,
        backgroundColor:"#FFFFFF",
        elevation:9
    },
    img:{
        height: 60,
        width: 60,
    },
    box_text:{
        flex:4,
    },
    box_title:{
        flex: 1.3,
        justifyContent: "center"
    },
    box_2:{
        flex: 2,
        justifyContent: "center"
    },
    line:{
        marginTop: 10,
    },
    sub_line:{
        height: 0.4,
        width: width - 140,
        marginTop: 7,
        marginBottom: 3,
        borderWidth: 0.2,
        borderColor:"gray"
        
    },
    box_img:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    box_sub_21:{
        flexDirection: "row",
        flex: 1.3,
        alignItems:"center",
    },
    box_sub_22:{
        flexDirection: "row",
        flex: 2.5,
        marginRight:10,

    },
    box_sub_23:{
        flexDirection: "row",
        flex: 2.5,
        marginRight:20,
        justifyContent:"flex-end"
    }
})