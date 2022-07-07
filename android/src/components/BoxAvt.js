import React, { Component } from "react"
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native"
import Ionicons  from 'react-native-vector-icons/Ionicons'
import RNFS from "react-native-fs"
const {width, height}=Dimensions.get("window");
export default class BoxAvt extends Component{

    render(){
        return(
            <>
            <View style ={ styles.box }
                onPress = {() => {

                }}
            >
                <View style = { styles.boxavt }>
                    <Image source={require("../img/1.jpg")} style ={{height: 90, width: 90}} />
                </View>
                <View style = { styles.boxtext }>
                    <View style = { styles.boxsubtext2 }>
                        
                    </View>
                    <View style = { styles.boxsubtext1 }>
                        <Text style = {styles.text1} >Tác giả:</Text>
                        <Text style = {styles.text2} >Phạm Xuân Huy</Text>
                    </View>
                    <View style = { styles.boxsubtext3 }>
                        <Text style = {styles.text1}>Thể loại:</Text>
                        <View style = {{width:width-200, height:65}}>
                            <Text style = {styles.text2}>{this.props.value.genres}</Text>
                        </View>
                    </View>
                    <View style = { styles.boxsubtext2 }>
                        
                    </View>
                </View>
            </View>
            </>
        )
    }
}

var styles = StyleSheet.create({
    box: {
        width: width -30,
        height: width/4 ,
        flexDirection: "row",
        marginLeft: 15,
        backgroundColor:"white"
    },
    boxavt:{
        flex:2,
        justifyContent:"center",

    },
    boxtext:{
        flex:6,
        flexDirection:"column",
        justifyContent:"center",
    },
    boxsubtext1:{
        flex:1,
        flexDirection:"row"
    },
    boxsubtext2:{
        flex:0.6,
        justifyContent:"center",
    },
    boxsubtext3:{
        flex:2,
        justifyContent:"center",
        flexDirection:"row",

    },
    text1:{ 
        marginLeft:10, 
        fontSize:16, 
        fontWeight:"bold",
        color:"#FF8C00" 
    },
    text2:{ 
        marginLeft:10, 
        fontSize:16,
        fontStyle:"italic"
    }

})