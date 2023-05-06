import React from 'react'
import { View,Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ChatDivSection from '../component/ChatDivSection'
import { useNavigation } from '@react-navigation/native'

const ChatScreen = () => {
  const navigation = useNavigation()
  function ChatDiv(item1){
    function pressHandler(){
      navigation.navigate('Mark Zukerberg2')
    }
    return <ChatDivSection item={item1} onPress={pressHandler}/>
  }
  return <View >

  <FlatList
data={[1,2,3,4,5,6,7,8,9,10]}
renderItem={({item})=>ChatDiv(item)}
/>
</View>

}

export default ChatScreen