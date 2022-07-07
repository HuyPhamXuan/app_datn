import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Linking } from 'react-native'
import Header from '../components/Header'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import * as OpenAnything from "react-native-openanything"
import Pdf from 'react-native-pdf';
import storage from '@react-native-firebase/storage';
const {width, height } = Dimensions.get("window")
export default class Chapter extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:"",
            source :{ uri: "https://docdro.id/CxGi4dE", cache: false },
            link:[]
        }
    }
    componentDidMount(){
        storage().ref(this.props.route.params.link).getDownloadURL().then(res=>{
            console.log(res)
            this.setState({
                source: {uri: res, cache: false}
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
                center = { <Text style = {{ fontSize: 20, color:"white"}}>Chapter</Text>}
            />
            <Pdf
                     source={this.state.source}
                     trustAllCerts={false}
                     onLoadComplete={(numberOfPages,filePath) => {
                         console.log(`Number of pages: ${numberOfPages}`);
                     }}
                     onPageChanged={(page,numberOfPages) => {
                         console.log(`Current page: ${page}`);
                     }}
                     onError={(error) => {
                         console.log(error);
                     }}
                     onPressLink={(uri) => {
                         console.log(`Link pressed: ${uri}`);
                     }}
                     style={styles.pdf}/>
            </>
        )
    }
}
var styles = StyleSheet.create({
    box:{

        backgroundColor:"#D3D3D3",
        
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
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
})