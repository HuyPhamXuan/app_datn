import { background, color } from "native-base/lib/typescript/theme/styled-system";
import React, { Component } from "react"
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import Ionicons  from 'react-native-vector-icons/Ionicons'
const {width, height}=Dimensions.get("window");
class BoxCategory extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <TouchableOpacity  style = { styles.box }
                onPress={()=>{this.props.navigation.navigate(this.props.name_screen, {data:this.props.data, category:this.props.text})}}
            >
                <View style = { styles.boxicon }>
                    <Ionicons name = {this.props.icon_name} size = {25} color ={"#FF4500"}/>
                </View>
                <View style={ styles.boxtext }>
                    <Text style = {{fontSize: 14, color: "#00008B"}}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
            </>
        )
    }
}
class RowBoxCategpry extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <View style = { styles.rowboxmenu}>
                <View style = {{ flex:1, marginLeft: 15, }}>
                    <BoxCategory 
                        text = {this.props.text1} 
                        navigation = {this.props.navigation} 
                        icon_name = {this.props.icon_name1}
                        name_screen = {this.props.name_screen1}
                        data = { this.props.data1}
                        >

                    </BoxCategory>
                </View>
                <View style = {{ flex:1, marginLeft: 7,  }}>
                    <BoxCategory 
                        text = {this.props.text2} 
                        navigation = {this.props.navigation} 
                        icon_name = {this.props.icon_name2}
                        name_screen = {this.props.name_screen2}
                        data = { this.props.data2}
                        >
    
                    </BoxCategory>
                </View>
            </View>
            </>
        )
    }
}
export { RowBoxCategpry, BoxCategory };
var styles = StyleSheet.create({
    box: {
        width: width/2 - 24,
        height: 0.42*(width/2-25),
        backgroundColor:"#FFFFFF",
        borderRadius:7,
        elevation:5
    },
    boxtext:{
        justifyContent:"center",
        flex:1,
        marginLeft:20,
        bottom: 5
    },
    boxicon:{
        justifyContent:"center",
        flex:1,
        marginLeft:20,
        bottom:-5,
    },
    rowboxmenu:{
        width: width,
        height: 0.42 * width/2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center",
    },
    subbox1:{
        marginLeft : 15,

    },
    subbox2:{
        marginRight: 15
    }

})