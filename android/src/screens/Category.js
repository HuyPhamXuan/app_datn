import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../components/Header'
import { RowBoxCategpry, BoxCategory } from '../components/BoxCategory'
import { war_data } from "../extend/war_movies"
import { action_data } from "../extend/action_movies"
import { comedy_data } from "../extend/comedy_movies"
import { different_data } from "../extend/different_movies"
import { drama_data } from "../extend/drama_movie"
import { fantasy_data } from "../extend/fantasy_movies"
import { romance_data } from "../extend/romance_movies"
import { thriller_data } from "../extend/thriller_movies"
export default class Category extends Component{
    render(){
        return(
            <>
            <Header
                center = { <Text style = {{ fontSize: 20, color:"white"}}>Thể loại</Text>}
            />
            <View style = {{ marginTop:10}}></View>
            <RowBoxCategpry
                text1 = "Action"
                text2 = "Comedy"
                icon_name1 = "md-brush"
                icon_name2 = "md-brush"
                navigation = { this.props.navigation }
                name_screen1 = "ListByCategory"
                name_screen2 = "ListByCategory"
                data1 = {action_data}
                data2 = {comedy_data}
            ></RowBoxCategpry>
            <View style = {{ marginTop:10}}></View>
            <RowBoxCategpry
                text1 = "Drama"
                text2 = "Thriller"
                icon_name1 = "md-brush"
                icon_name2 = "md-brush"
                navigation = { this.props.navigation }
                name_screen1 = "ListByCategory"
                name_screen2 = "ListByCategory"
                data1 = {drama_data}
                data2 = {thriller_data}
            ></RowBoxCategpry>
            <View style = {{ marginTop:10}}></View>
            <RowBoxCategpry
                text1 = "War"
                text2 = "Different"
                icon_name1 = "md-brush"
                icon_name2 = "md-brush"
                navigation = { this.props.navigation }
                name_screen1 = "ListByCategory"
                name_screen2 = "ListByCategory"
                data1 = {war_data}
                data2 = {different_data}
            ></RowBoxCategpry>
            </>
        )
    }
}