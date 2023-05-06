import React from 'react'
import {Text,View,StyleSheet,Image} from 'react-native'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import Message from '../component/Message'
import TextInputInChat from '../component/TextInputInChat'
import { Ionicons } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const ChattingScreen = () => {
  const navigation = useNavigation()
  function onPressHandler(){
    navigation.navigate('ProfileScreen')
  }
function ChatMessage(chat){
    return <Message prop={chat}/>
}
return <View style={{flex:1}}>

<View style={{flex:2}}>
<View style={{flex:1,justifyContent:'space-between',flexDirection:'row',backgroundColor:'#075E54'}}>

  <View style={styles.HeaderText}>
      <Pressable onPress={()=>{navigation.goBack()}}><View ><Ionicons name="arrow-back" size={24} color="white" /></View></Pressable>
        
      <View >
         <Image
        style={styles.tinyLogo}
        source={{
          uri:'https://i.pinimg.com/564x/1d/29/e9/1d29e99a08e9e627476975502be47e74.jpg'
        }}
      />
          </View>
        <Pressable onPress={onPressHandler}><View style={{paddingRight:6}}><Text style={{paddingBottom:4,paddingLeft:8,fontSize:16,fontWeight:'bold',color:'#fff'}}>Mark Zukerberg</Text></View></Pressable>
        
  </View>

      <View style={{alignItems:'flex-end',marginHorizontal:'1%',flex:6,flexDirection:'row',justifyContent:'flex-end',padding:10,paddingLeft:3}}>
  <View style={{padding:3}}><FontAwesome name="video-camera" size={24} color="white"/></View>
  <View style={{padding:3}}><Zocial name="call" size={24} color="white" /></View>
  <View style={{padding:3}}><MaterialCommunityIcons name="dots-vertical" size={24} color="white" /></View>
  </View>


</View>
</View>



<View style={{flex:15}}>
  <FlatList
data={[1,2,3,4,5,6,7,8,9,10]}
renderItem={({item})=>ChatMessage(item)}
/>
</View>

<TextInputInChat/>
</View>
}

export default ChattingScreen
const styles = StyleSheet.create({
  HeaderText:{
    justifyContent:'flex-end',
    padding:10,
    paddingLeft:20,
    paddingVertical:12,
    fontWeight:'bold',
    flex:7,
    alignItems:'flex-end',
    fontSize:18,
    flexDirection:'row'
  },
  tinyLogo:{
    alignItems:"center",
    justifyContent:"center",
    paddingRight:5,
    width: 35,
    height:35,
    borderRadius:40
  }
})