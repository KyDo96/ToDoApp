import React from 'react'
import { StyleSheet, View,Text } from 'react-native'
import ButtonForTask from './ButtonForTask'

export default function Task(props) {
    return (
        <View style={styles.containner}>
            <Text style={styles.text}>{props.name}</Text>
            <View style={{flexDirection:"row"}}>
            <ButtonForTask icon="check"/>
            <ButtonForTask icon="trash"/>
            <ButtonForTask icon="arrow-right-circle"/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  containner:{
      width:340,
      height:55,
      backgroundColor:"#3e4750",
      borderRadius:10,
      shadowOffset:{width:4,height:4},
        shadowOpacity:0.5,
        alignItems:"center",
        padding:10,
        flexDirection:"row",
        justifyContent:"space-between",
        marginRight:15,
        marginLeft:15,
        marginBottom:10
  },
  text:{
      fontSize:20,
      color:"white",
  }
})
