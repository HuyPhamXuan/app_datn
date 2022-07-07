import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions } from 'react-native'
import Header from '../components/Header'
import BoxList from "../components/BoxList"
import { postData } from '../connect'
import { data } from '../extend/movie_fi'
import { connect } from 'react-redux'
const { width, height } = Dimensions.get("window")
class Nominations extends Component {
    constructor(props){
        super(props)
        this.state = {
            buffer_data:[],
            index:0,
            data: []
        }
    }
    componentDidMount(){
        this.onNomination()

    }
    onClick = () =>{
        this.onNomination()
    }

    onNomination = () => {
        postData({
            "data": this.props.numberId
        }, "https://ggdatn.herokuapp.com/predict").then((res) =>{
            console.log(res)
            let arr = []
            res.result.data.forEach(element => {
                for( let i = 0 ; i < 20108; i++){
                    if(element == data[i].movieId){
                        arr.push(data[i])
                    }
                }
            });

            this.setState({
                data:arr
            })
            let arr2 = []
            for(let i =0; i<10; i++){
                arr2.push(arr[i])
            }
            this.setState({
                buffer_data:arr2,
                index:9
            })
        })
    }
    onEndReached = () =>{
        if (this.state.index == this.state.data.length - 1){
            return
        }
        let arr = this.state.buffer_data
        for(let i = this.state.index; i < this.state.index + 10; i++){
            arr.push(this.state.data[i])
        }
        this.setState({
            buffer_data:arr,
            index: this.state.index + 10
        })

    }
    render(){
        return(
            <>
            <TouchableOpacity style = {styles.button}
                onPress = {()=>{
                    this.onClick()
                }}
            >
                <Text>Get</Text>
            </TouchableOpacity>
            <FlatList
                data={ this.state.data}
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
function mapStatetoProps(state){
    return {
        rate: state.rate,
        numberId: state.numberId
    };
}
export default connect(mapStatetoProps)(Nominations);
var styles = StyleSheet.create({
    background:{ 
        backgroundColor:"#D3D3D3"
    },
    line:{
        marginTop: 15,
    },
    button:{height:40, 
            width:width -40, 
            backgroundColor:"red", 
            justifyContent:"center", 
            alignItems:"center",
            marginLeft:20
    }
})