import React from 'react'
import { Pressable } from 'react-native'
import { View,Text, StyleSheet,Image } from 'react-native'

const ChatDivSection = ({item,onPress}) => {
    //console.log("hi",item)
  return <Pressable
  android_ripple={{color:"#ccc"}}
  style={({pressed})=>[styles.button,pressed?styles.buttonPressed:null]}
  onPress={onPress}
 >
  <View style={styles.Outer}>
         <View style={styles.ProfilePic}>
         <Image
        style={styles.tinyLogo}
        source={{
          uri:'https://i.pinimg.com/564x/1d/29/e9/1d29e99a08e9e627476975502be47e74.jpg'
        }}
      />
          </View>
         <View style={styles.Name}><Text>Mark Zukerberg</Text></View>
         <View style={styles.Time}><Text>12:00 am</Text></View>
    
    </View>
    </Pressable>
}

export default ChatDivSection
const styles = StyleSheet.create({
  Outer:{
    flex:1,
    flexDirection:"row",
    borderColor:'#fff',
    borderWidth:1,
    paddingHorizontal:5,
    paddingVertical:5
  },
  ProfilePic:{
    flex:2,
    marginHorizontal:'3%',
    fontSize:16,
    marginBottom:"1%",
    justifyContent:'flex-start'
},
Name:{
flex:4,
// justifyContent:'flex-between',
fontSize:25,
fontWeight:'50',
justifyContent:'center',
fontWeight:'bold',
 alignItems:'flex-start',

},
Time:{
flex:2,
// justifyContent:'flex-end',
justifyContent:'center',
alignItems:'center'
},
tinyLogo:{
  alignItems:"center",
    justifyContent:"center",
    paddingRight:5,
    width: 60,
    height:60,
    borderRadius:40
}
})