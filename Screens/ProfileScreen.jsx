import React from 'react'
import { View,Text,StyleSheet,Image, Pressable } from 'react-native'
import { MaterialIcons,MaterialCommunityIcons,AntDesign,FontAwesome5,FontAwesome,Feather,Entypo,Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
  const navigation = useNavigation()
  return <ScrollView><View style={{flex:1}}>
    <View>
  <View style={{flex:2,padding:25}}><Text></Text></View>
  </View>
  
  <View style={{flex:6}}>
<View style={styles.Outer}>
<View style={styles.DpInnerComponent1}><View style={{flexDirection:'row',flex:1}}>
  <Pressable onPress={()=>{navigation.goBack()}}><View style={{flex:1,alignItems:'flex-start'}}><Ionicons name="arrow-back-outline" size={24} color="black" /></View></Pressable>
  <View style={{flex:4,alignItems:'center',justifyContent:'center',padding:25,paddingRight:10}}>
  <Image
        style={styles.tinyLogo}
        source={{
          uri:'https://i.pinimg.com/736x/7e/67/3b/7e673b67c32bc4f6b4fd50aa7ba22916.jpg'
        }}
      />
  </View>
  <View style={{flex:1,alignItems:'flex-end'}}><Entypo name="dots-three-vertical" size={24} color="black" /></View>
  </View></View>
<View style={styles.DpInnerComponent2}>
  <View><Text style={{fontSize:21}}>Asmara</Text></View>
  <View><Text style={{fontSize:20,color:'#747474',padding:6}}>+91 8171037655</Text></View>
</View>
<View style={styles.DpInnerComponent3}>
  <View style={{flex:1,flexDirection:'column',paddingLeft:25,padding:5}}><FontAwesome name="phone" size={24} color="black" />
  <Text>Audio</Text>
  </View>
  <View style={{flex:1,flexDirection:'column'}}><Ionicons name="videocam" size={24} color="black" />
  <Text>Video</Text>
  </View>
  
  <View style={{flex:1,flexDirection:'column'}}><FontAwesome name="rupee" size={24} color="black" /><Text>Pay</Text>
  </View>
  
  <View style={{flex:1,flexDirection:'column'}}><Feather name="search" size={24} color="black" /><Text>Search</Text>
  </View>
  
</View>
</View>

  </View>
  <View style={{flex:1,elevation:4,
    shadowColor:'black',
    shadowOpacity:0.25,
    shadowOffset:{width:0,height:12},
    shadowRadius:8,padding:6}}><Text style={{fontSize:18,padding:10}}>Hey there! I am using Whatsapp</Text></View>
  <View style={{flex:1,elevation:4,
    shadowColor:'black',
    shadowOpacity:0.25,
    shadowOffset:{width:0,height:12},
    shadowRadius:8,padding:6}}><Text style={{fontSize:18,padding:10}}>Media,links,and docs</Text></View>
  
  <View style={{flexDirection:'column',flex:1,elevation:4,
    shadowColor:'black',
    shadowOpacity:0.25,
    shadowOffset:{width:0,height:12},
    shadowRadius:8,padding:6}}>
    <View style={{flex:1,flexDirection:'row',padding:10}}>
    <FontAwesome name="bell" size={24} color="black" />
    <Text style={{fontSize:18,paddingLeft:10}}>Mute notifications</Text>
    </View>

    <View style={{flex:1,flexDirection:'row',padding:10}}>
    <FontAwesome5 name="itunes-note" size={24} color="black" />
    <Text style={{fontSize:18,paddingLeft:10}}>Custom notifications</Text>
    </View>

    <View style={{flex:1,flexDirection:'row',padding:10}}>
    <AntDesign name="picture" size={24} color="black" />
    <Text style={{fontSize:18,paddingLeft:10}}>Media visibility</Text>
    </View>
  </View>
  
  <View style={{flexDirection:'column',flex:1,elevation:4,
    shadowColor:'black',
    shadowOpacity:0.25,
    shadowOffset:{width:0,height:12},
    shadowRadius:8,padding:6}}>
    <View style={{flex:1,flexDirection:'row',padding:10}}>
    <FontAwesome name="lock" size={24} color="black" />
    <Text style={{fontSize:18,paddingLeft:10}}>Encryption</Text>
  </View>
  <View style={{flex:1,flexDirection:'row',padding:10}}>
  <MaterialCommunityIcons name="clock-check-outline" size={24} color="black" />
    <Text style={{fontSize:18,paddingLeft:10}}>Disappearing messages</Text>
  </View>
  </View>

<View>
<View style={{flexDirection:'column',flex:1,padding:10,elevation:4,
    shadowColor:'black',
    shadowOpacity:0.25,
    shadowOffset:{width:0,height:12},
    shadowRadius:8,padding:6}}></View>
<Text style={{fontSize:15,color:'#747474',paddingLeft:10}}>No groups in common</Text>
<View style={{flex:1,flexDirection:'row',padding:10}}>
<Ionicons name="people-sharp" size={24} color="black" />
    <Text style={{fontSize:18,paddingLeft:10}}>Create group with Asmara</Text>
  </View>
</View>
<View style={{flexDirection:'column',flex:1,padding:10,elevation:4,
    shadowColor:'black',
    shadowOpacity:0.25,
    shadowOffset:{width:0,height:12},
    shadowRadius:8}}>
    <View style={{flex:1,flexDirection:'row',padding:10}}>
    <MaterialIcons name="do-not-disturb" size={24} color="red" />
    <Text style={{fontSize:18,paddingLeft:10}}>Block Asmara</Text>
    </View>
    <View style={{flex:1,flexDirection:'row',padding:10}}>
    <MaterialIcons name="thumb-down-alt" size={24} color="red" />
    <Text style={{fontSize:18,paddingLeft:10}}>Report Asmara</Text>
    </View>
    </View>
  </View></ScrollView>
}

export default ProfileScreen
const styles = StyleSheet.create({
  Outer:{
    flexDirection:'column',
    flex:1
  },
  DpInnerComponent1:{
flex:2,
flexDirection:'column'
  },
DpInnerComponent2:{
flex:1,
flexDirection:'column',
justifyContent:'center',
alignItems:'center'
},
DpInnerComponent3:{
flex:1
,flexDirection:'row',justifyContent:'center',alignItems:'center'
},
tinyLogo:{
  alignItems:"center",
    justifyContent:"center",
    // paddingRight:10,
    width: 120,
    height:120,
    borderRadius:70
}
})