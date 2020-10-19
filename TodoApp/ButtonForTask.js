import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function ButtonForTask(props) {
    const styles = StyleSheet.create({
        button:{
          width:35,
          height:35,
          backgroundColor:"#FFB842",
          borderRadius:17.5,
          shadowOffset:{width:3,height:3},
            shadowOpacity:1,
            justifyContent:"center",
            alignItems:"center",
            marginLeft:10
        }
      })
  return (
    <>
        <TouchableOpacity style={styles.button}>
        <SimpleLineIcons name={props.icon} size={25} color="white" />
        </TouchableOpacity>
    </>
  );
}
