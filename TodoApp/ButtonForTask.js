import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import {connect} from "react-redux";

function ButtonForTask(props) {
    const styles = StyleSheet.create({
        button:{
          width:props.size,
          height:props.size,
          backgroundColor:"#FFB842",
          borderRadius:props.size/2,
          shadowOffset:{width:3,height:3},
            shadowOpacity:1,
            justifyContent:"center",
            alignItems:"center",
            marginLeft:10
        }
      })
  return (
    <>
        <TouchableOpacity onPress={()=>{if(props.icon==="arrow-right-circle"){
          props.changeScreen(2)}}} style={styles.button}>
        <SimpleLineIcons name={props.icon} size={props.size*2/3} color="white" />
        </TouchableOpacity>
    </>
  );
}
const mapDispatchToProps=(dispatch)=>{
  return {
      changeScreen:(index)=>{
          const action={
              type:"CHANGE_SCREEN",
              index,
          }
          dispatch(action)
      }
  }
}
export default connect(null,mapDispatchToProps)(ButtonForTask)