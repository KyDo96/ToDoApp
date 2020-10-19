import React from 'react'
import { StyleSheet, Text, View, Button,TouchableWithoutFeedback,Keyboard } from "react-native";

export default function BackgroundScreen(props) {
    return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={styles.container}>
        {props.children}
    </View>
    </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343B45",
    alignItems: "center",
    // justifyContent: "center",
  },
});