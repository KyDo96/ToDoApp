import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Animated,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
  FlatList
} from "react-native";

import {connect} from "react-redux";
import Task from "./TodoApp/Task";
const renderTask=({item})=><Task name={item.name}/>
 function Test(props) {
  return (
   
    <View style={{backgroundColor:"green"}}>
     <FlatList removeClippedSubviews={true} data={props.listAll} renderItem={renderTask} keyExtractor={(item)=>item.id}/>
     </View>
  );
}
const styles = StyleSheet.create({
  redBox: {
    backgroundColor: "red",
    height: 30,
    marginTop: 60,

    marginBottom: 60,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    shadowOpacity: 1,
    shadowOffset: { width: 10, height: 10 },
  },
  blueBox: {
    backgroundColor: "blue",
    width: 200,
    height: 30,
    marginTop: 60,
    marginBottom: 60,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    shadowOpacity: 1,
    shadowOffset: { width: 10, height: 10 },
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
const mapStateToProps =(state)=>{
  return {
    //key:value
    //key la props cua component: value la state duoc luu tren store
    taskList:state.taskListReducer.taskList,
    todayList:state.taskListReducer.todayList,
    listAll:state.taskListReducer.listAll
  }
}

const mapDisPatchToProps=(dispatch)=>{
  return {
    //key: value
    //key la props cua component: value la phuong thuc gui action len store
    changeTab:()=>{
      const action ={
        type:"CHANGE_TAB",
        // payload :status,
      };
      console.log("pressButton");
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps,mapDisPatchToProps)(Test);