import React from 'react'
import { View,Text,FlatList,StyleSheet,Pressable,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const StatusDivSection = () => {
const navigation = useNavigation()
return <Pressable
android_ripple={{color:"#ccc"}}
style={({pressed})=>[styles.button,pressed?styles.buttonPressed:null]}
onPress={()=>{navigation.navigate('StoryScreen')}}
>
<View style={styles.Outer}>
       <View style={styles.ProfilePic}>
       <Image
      style={styles.tinyLogo}
      source={{
        uri:'https://i.pinimg.com/736x/7e/67/3b/7e673b67c32bc4f6b4fd50aa7ba22916.jpg'
      }}
      />
    </View>
<View style={{flex:6,flexDirection:'column',paddingVertical:2}}>
<View style={styles.Name}><Text style={{fontSize:16}}>Hafsa</Text></View>
<View style={styles.about}><Text style={{fontSize:13}}>18 minutes ago</Text></View>
</View>

  </View>
  {/* <View><Text style={{fontSize:13,marginBottom:1}}>Recent update</Text></View> */}
  
  </Pressable>
}
export default StatusDivSection

const styles = StyleSheet.create({
  Outer:{
    flex:1,
    flexDirection:"row",
    borderColor:'#fff',
    borderWidth:1,
    paddingHorizontal:5,
    justifyContent:'center',
    alignItems:'center'
    
  },
  ProfilePic:{
    // flex:1,
    marginHorizontal:'1%',
    fontSize:16,
    // marginBottom:"1%",
    justifyContent:'flex-start'
},
Name:{
fontSize:25,
fontWeight:'bold',
 color:'black',
 paddingLeft:10,
 paddingVertical:12,
 justifyContent:'center',
//  alignItems:'center'
},
about:{
fontSize:20,
fontWeight:'bold',
 color:'black',
 paddingLeft:10,
 paddingHorizontal:10
//  alignItems:'center'
//  paddingBottom:17
//  justifyContent:'center'
},
tinyLogo:{
  alignItems:"center",
    justifyContent:"center",
    paddingRight:5,
    width: 60,
    height:60,
    borderRadius:40
},

})

