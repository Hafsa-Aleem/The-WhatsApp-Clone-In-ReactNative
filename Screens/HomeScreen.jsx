import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from './ChatScreen';
import StatusScreen from './StatusScreen';
import CallScreen from './CallScreen';
import CustomHeader from '../component/CustomHeader';


const Tab = createMaterialTopTabNavigator();
const HomeScreen = () => {
  return <View style={{flex:1}}>
    <CustomHeader/>
    
  <View style={{flex:8}}>
  <Tab.Navigator>
  <Tab.Screen name="Chat" component={ChatScreen} 
  />
  <Tab.Screen name="Status" component={StatusScreen} />
  <Tab.Screen name="Calls" component={CallScreen}/>
</Tab.Navigator>
</View>
</View>
}

export default HomeScreen
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