import React, { Component } from "react"
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native"
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { postData } from "../connect";
import RNFS from "react-native-fs"
import Dialog from "react-native-dialog";
import { connect } from 'react-redux'
const {width, height}=Dimensions.get("window");
class Menu extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [16838, 2020, 2155, 1143, 276],
            alert: false,
            rate:[],
            number:0,
            numberId:[]
        }
    }
    componentDidMount(){
        this.setState({
            rate:this.props.rate
        })
    }

    render(){
        return(
            <>
            <View style = {styles.box}>
                <TouchableOpacity style = {[styles.sub_box, {backgroundColor:"#4682B4"}]}
                 onPress = {()=>{
                    this.props.navigation.navigate("Chapter", {link: this.props.link[0]})

                 }}
                >
                    <Ionicons name="book-outline" size={30} color = {"white"}/>
                    <Text style = {{fontSize:11, fontWeight:"bold", color:"white"}}>Đọc truyện</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.sub_box, {backgroundColor:"#008000"}]}
                    onPress = {()=>{
                        this.props.navigation.navigate("ListChapter", {link:this.props.link})
                    }}
                >
                    <Ionicons name="list" size={35} color = {"white"}/>
                    <Text style = {{fontSize:11, fontWeight:"bold", color:"white", bottom:3}}>DS chương</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style = {[styles.sub_box, {backgroundColor:"#B8860B"}]}
                    onPress = {()=>{
                        this.setState({
                            alert:!this.state.alert
                        })
                    }}    
                >
                    <Ionicons name="star-outline" size={30} color = {"white"}/>
                    <Text style = {{fontSize:11, fontWeight:"bold", color:"white"}}>Đánh giá</Text>
                </TouchableOpacity> 
                <TouchableOpacity style = {[styles.sub_box, {backgroundColor:"#F08080"}]}>
                    <Ionicons name="ios-chatbox-ellipses-outline" size={30} color = {"white"}/>
                    <Text style = {{fontSize:11, fontWeight:"bold", color:"white"}}>Bình luận</Text>
                </TouchableOpacity>



            </View>
            <View>
                <Dialog.Container visible={this.state.alert}>
                <Dialog.Title>Nhập đánh giá</Dialog.Title>
                <Dialog.Description>
                    Bạn vui lòng chọn từ 1-5 sao
                </Dialog.Description>
                <Dialog.Input 
                    onChangeText={(text)=>{
                        this.setState({
                            number:text
                        })
                    }}
                />
                <Dialog.Button 
                    label="Cancel" 
                    onPress = {()=>{
                        this.setState({
                            alert:!this.state.alert
                        })
                    }}    
                    
                />
                <Dialog.Button 
                    label="Đánh giá" 
                    onPress={()=>{
                        if(this.state.number>0 && this.state.number<6){
                            let p = this.props.value
                            let q = this.props.value.movieId
                            p["number"] = parseInt(this.state.number)
                            this.state.rate.push(p)
                            this.state.numberId.push(q)
                            this.props.dispatch({
                                type:'ADD_RATE',
                                product:this.state.rate,
                                numberId: this.state.numberId
                            })
                            this.setState({
                                alert:!this.state.alert
                            })
                        }
                        else{
                            
                        }
                    }}
                />
                </Dialog.Container>
            </View>
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
export default connect(mapStatetoProps)(Menu);
var styles = StyleSheet.create({
    box:{
        width:width - 30,
        marginLeft:15,
        elevation:10,
        flexDirection:"row",
        height:80
    },
    sub_box:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})