import React from 'react'
import { Pressable } from 'react-native'
import { View,Text, StyleSheet,Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const CallSection = () => {
  return <Pressable
  android_ripple={{color:"#ccc"}}
  style={({pressed})=>[styles.button,pressed?styles.buttonPressed:null]}
 >
  <View style={styles.Outer}>
         <View style={styles.ProfilePic}>
         <Image
        style={styles.tinyLogo}
        source={{
          uri:'https://i.pinimg.com/originals/7d/0e/0c/7d0e0c7d5e16a58051b42938338a13e8.jpg'
        }}
      />
          </View>
         <View style={styles.Name}><Text>Mark Zukerberg</Text></View>
         <View style={styles.Time}><FontAwesome name="phone" size={24} color="green" /></View>
    
    </View>
    </Pressable>
}

export default CallSection
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
alignItems:'flex-end',
paddingRight:10
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
