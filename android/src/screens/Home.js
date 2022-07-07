import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../components/Header'
import TabContainer from '../containers/TabTopContainer'
import database from '@react-native-firebase/database';
import { createInput } from '../func';
export default class Home extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        /*
        database().ref('/user').once('value').then(snapshot => {
            console.log('User data: ', snapshot.val());
        })
        
       let a = createInput(["151", "223", "253", "296", "541"])
       console.log("khong ra af = ",a)
       */

    }
    render(){
        return(
            <>
            <Header
                center = { <Text style = {{ fontSize: 20, color:"white"}}>Home</Text>}
            />
            <TabContainer navigation = {this.props.navigation}/>
            </>

        )
    }
}
