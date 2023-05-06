import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const Message = ({prop}) => {
  return <View>
    <View>
    <View style={styles.container}>
    <View style={styles.OuterText1}>
        <Text style={styles.Text1}>Nice Message</Text>
    </View>
    <View style={styles.OuterText2}>
    <Text style={styles.Text2}>Message</Text>
    </View>
  </View>
  </View>
  </View>
}

export default Message
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        borderColor:'black',
        // borderWidth:1,
        paddingHorizontal:5,
        paddingVertical:5
    },
    OuterText1:{
        justifyContent:"space-between",flex:1,borderWidth:2,borderRadius:9,paddingHorizontal:10,
        marginVertical:5,backgroundColor:'black'
    },
    OuterText2:{
        alignItems:'flex-end',flex:1,borderWidth:2,borderRadius:9,paddingHorizontal:10,
        marginVertical:5,backgroundColor:'black'
    },
    Text1:{
        paddingHorizontal:5,paddingVertical:9,color:'white'
    },
    Text2:{
        paddingHorizontal:5,paddingVertical:9,color:'white'
    }
})