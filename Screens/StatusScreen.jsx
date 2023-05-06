import React from 'react'
import { View,Text,FlatList,StyleSheet,Pressable,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import StatusDivSection from '../component/StatusDivSection'

const StatusScreen = () => {

  function StatusDiv(item1){
    function pressHandler(){
      navigation.navigate('Story')
    }
    return <StatusDivSection item={item1} onPress={pressHandler}/>
    console.log(item1)
  }
return <View style={{flex:1}}>
  <View style={{flex:6}}>
  <FlatList
data={[1]}
renderItem={({item})=>StatusDiv(item)}
/>
<View style={{flex:2,alignItems:'flex-start',justifyContent:'flex-end'}}>
  <Text style={{fontSize:17,paddingLeft:10}}>Recent updates</Text>
  </View>
</View>

<View style={{flex:8}}>
  <FlatList
data={[1,2]}
renderItem={({item})=>StatusDiv(item)}
/>
</View>


<View style={{flex:2,alignItems:'flex-start',justifyContent:'flex-end'}}>
  <Text style={{fontSize:17,paddingLeft:10}}>Viewed updates</Text>
  </View>
  <View style={{flex:20}}>
  <FlatList
data={[1,2,3,4,5,6,7,8,9]}
renderItem={({item})=>StatusDiv(item)}
/>
</View>
</View>
} 

export default StatusScreen
const styles = StyleSheet.create({
  tinyLogo:{
  alignItems:"center",
  justifyContent:"center",
  paddingRight:5,
  width: 60,
  height:60,
  borderRadius:40
}
})


   