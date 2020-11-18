import React,{useState,useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import BackgroundScreen from "./BackgroundScreen";
import TabButton from "./TabButton";
import {connect} from "react-redux";
import Task from "./Task";
import Test from "../Test";
import InputPickDate from "./InputPickDate";
import InputTask from "./InputTask";


function CreateTaskScreen(props) {
   
 
  return (
    <BackgroundScreen>
        <View style={{backgroundColor:"#FFB842",width:"100%",height:"12%",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
          
            <SimpleLineIcons style={{paddingBottom:0}} name="emotsmile" size={30} color="black" />
            <Text style={{fontFamily:"dancing-script",fontSize:40,color:"black"}}>Tạo một nhiệm vụ mới</Text>
            </View>
        <View style={styles.table}>
          <Text  style={{fontSize:17,paddingLeft:20,paddingBottom:3}}>Ngày tạo</Text>
           <InputTask showDate={true} heightOfText={25} fontSize={20} multiLine={false} showButton={false}/>
          <Text style={{fontSize:17,paddingLeft:20,paddingBottom:3}}>Tên nhiệm vụ</Text>
           <InputTask heightOfText={25} fontSize={20} multiLine={false} showButton={false}/>
          <Text style={{fontSize:17,paddingLeft:20,paddingBottom:3}}>Chi tiết</Text>
           <InputTask heightOfText={75} fontSize={20} multiLine={true} showButton={false}/>
          <Text style={{fontSize:17,paddingLeft:20,paddingBottom:3}}>Ngày thực hiện</Text>
           <InputTask heightOfText={25} fontSize={20} multiLine={false} showButton={false}/>
          <Text style={{fontSize:17,paddingLeft:20,paddingBottom:3}}>Chế độ nhắc</Text>
           <InputTask heightOfText={25} fontSize={20} multiLine={false} showButton={false}/>
           <View style={{paddingRight:20,paddingTop:20,alignItems:"flex-end"}}>
           <TouchableOpacity style={{backgroundColor:"#FFB842",height:45,width:110,justifyContent:"center",alignItems:"center",borderRadius:5,shadowOpacity:0.7,shadowOffset:{width:4,height:4}}} >
                <Text style={{color:"white",fontSize:17}}>Tạo nhiệm vụ</Text>
          </TouchableOpacity>
          </View>
        </View >
    </BackgroundScreen>
  );
}
const styles = StyleSheet.create({
  table:{
    width:"100%",
    backgroundColor:"#343B45",
    shadowOffset:{width:4,height:-5},
    shadowOpacity:0.5,
    height:"75%",
    paddingTop:10
  }
})

const mapStateToProps =(state)=>{
  return {
  }
}

const mapDisPatchToProps=(dispatch)=>{
  return {
    
  }
}
export default connect(mapStateToProps,mapDisPatchToProps)(CreateTaskScreen);