import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome,Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const TextInputInChat = () => {
  return <View style={{flex:1, flexDirection:'row',
  justifyContent:"space-between",
  alignItems:"center",borderColor:'black',borderWidth:3,borderRadius:25,}}>
<Entypo name="emoji-happy" size={24} color="black" style={{flex:1,alignItems:'flex-start'}}/>
<TextInput placeholder='Message' style={{marginBottom:5,flex:4}}/>
<Entypo name="attachment" size={24} color="black" style={{flex:1,alignItems:'flex-end'}}/>
<FontAwesome name="rupee" size={24} color="black" style={{flex:1,alignItems:'flex-end'}}/>
<Entypo name="camera" size={24} color="black" style={{flex:1,alignItems:'flex-end'}}/>
</View>

}

export default TextInputInChat