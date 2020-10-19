import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";

export default function TabButton(props) {
    const styles = StyleSheet.create({
        buttonTab:{
           height:30,
            width:100,
            backgroundColor:"#343B45",
            position:"absolute",
            top:props.topDis,
            borderTopRightRadius:8,
            borderTopLeftRadius:8,
            justifyContent:"center",
            alignItems:"center",
            left:props.leftDis,
            shadowOffset:{height:props.shadowHeight,width:props.shadowWidth},
            shadowOpacity:0.5,
            transform:[{ translateY:-30 }]
        }
      })
  return (
   
        <View  style={styles.buttonTab}>
          <TouchableOpacity onPress={props.changeTab} style={{width:"100%",alignItems:"center",}}>
            <Text style={{fontSize:17}}>{props.tittle}</Text>
            </TouchableOpacity>
          </View>
        
  );
}
