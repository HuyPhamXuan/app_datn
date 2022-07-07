import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, FlatList, Image, Button } from 'react-native'
import Header from '../components/Header'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { connect } from 'react-redux'
import { war_data } from "../extend/war_movies"
import BoxList3 from '../components/BoxList3';
const { width, height } = Dimensions.get("window")
class Rate extends Component{
    constructor(props){
        super(props)
        this.state = {
            buffer_data:[],
            index:0,
            check:false
        }
    }
    componentDidMount(){
        let arr = []
        if (this.props.rate.length > 10){
            for(let i =0; i<10; i++){
                arr.push(this.props.rate[i])
            }
            this.setState({
                buffer_data:arr,
                index:9,
                check:true
            })
        }
        else{
            this.setState({
                buffer_data:this.props.rate,
                index:9
            })
        }
    }
    onEndReached = () =>{
        if (this.state.index == this.props.rate.length - 1){
            return
        }
        let arr = this.state.buffer_data
        for(let i = this.state.index; i < this.state.index + 10; i++){
            arr.push(this.props.rate[i])
        }
        this.setState({
            buffer_data:arr,
            index: this.state.index + 10
        })

    }
    onGoogleButtonPress = async () =>{
        const { idToken } = await GoogleSignin.signIn()

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken)
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential)
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
                center = { <Text style = {{ fontSize: 20, color:"white"}}>Đánh giá</Text>}
            />
            <ScrollView>
                {
                    this.props.rate.map((val)=>{
                        return(
                            <>
                            <BoxList3 value = {val}  navigation = {this.props.navigation} />
                            <View style = {{marginTop:10}}></View>
                            </>
                        )
                    })
                }
            </ScrollView>
            </>
        )
    }
}
function mapStatetoProps(state){
    return {
        rate: state.rate
    };
}
export default connect(mapStatetoProps)(Rate);
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