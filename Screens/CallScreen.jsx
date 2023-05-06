import React from 'react'
import { View,Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import CallSection from '../component/CallSection'
import { useNavigation } from '@react-navigation/native'

const CallScreen = () => {
  const navigation = useNavigation()
  function CallDiv(item1){
    return <CallSection item={item1} />
  }
  return <View >

  <FlatList
data={[1,2,3,4,5,6,7,8,9,10]}
renderItem={({item})=>CallDiv(item)}
/>
</View>

}

export default CallScreen