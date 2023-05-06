import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { View,StyleSheet,Text } from 'react-native';

const CustomHeader = () => {
  return <View style={{flex:1,justifyContent:'space-between',flexDirection:'row',backgroundColor:'#075E54'}}>
      
  <View style={styles.HeaderText}><Text style={{fontSize:20,fontWeight:'bold',color:'#fff'}}>Whatsapp</Text></View>
  
  <View style={{alignItems:'flex-end',marginHorizontal:'1%',flex:6,flexDirection:'row',justifyContent:'flex-end',padding:10,paddingLeft:3}}>
  <View style={{padding:3}}><Feather name="camera" size={20} color="white" /></View>
  <View style={{padding:3}}><AntDesign name="search1" size={20} color="white" /></View>
  <View style={{padding:3}}><Entypo name="dots-three-vertical" size={20} color="white" /></View>
  </View>


</View>
}

export default CustomHeader
const styles = StyleSheet.create({
    HeaderText:{
        justifyContent:'flex-end',
    padding:5,
    paddingLeft:20,
    paddingVertical:12,
    fontWeight:'bold',
    flex:3,
    alignItems:'flex-start',
    fontSize:18
    }
})