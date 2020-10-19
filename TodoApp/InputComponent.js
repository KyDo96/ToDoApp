import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
  } from "react-native";
  import { SimpleLineIcons } from "@expo/vector-icons";
export default function InputComponent(props) {
    return (
        <View style={styles.input}>
            <View style={styles.iconBackground}>
              <SimpleLineIcons name={props.icon} size={20} color="white"/>
              </View>
          <TextInput secureTextEntry={props.hideText} style={styles.textInput} placeholder={props.placeholder}  placeholderTextColor="#ffffff50" />
          </View>
    )
}
const styles = StyleSheet.create({
    input:{
      flexDirection:"row",
      marginBottom:15
    },
    iconBackground:{
        padding:10,
        backgroundColor:"#2e3339",
        borderTopLeftRadius:7,
        borderBottomLeftRadius:7,
    },
    textInput: {
      borderTopRightRadius:7,
      borderBottomRightRadius:7,
      width: 220,
      backgroundColor:"#3e4750",
      fontSize:17,
      lineHeight:20,
      paddingLeft:5,
      color:"white"
    }
})