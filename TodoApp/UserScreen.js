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


export default function UserScreen(props) {
   
 
  return (
    <BackgroundScreen>
        <View style={{backgroundColor:"#FFB842",width:"100%",height:"12%",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
            <SimpleLineIcons style={{paddingBottom:0}} name="emotsmile" size={30} color="black" />
            <Text style={{fontFamily:"dancing-script",fontSize:40,color:"black"}}>Thông tin người dùng</Text>
            </View>
        <View style={styles.table}>
          <Text style={{fontSize:17,paddingLeft:20,paddingBottom:3}}>Tên đăng nhập</Text>
           <InputTask heightOfText={25} fontSize={20} multiLine={false} showButton={false}/>
          <Text style={{fontSize:17,paddingLeft:20,paddingBottom:3}}>Tiến độ thực hiện nhiệm vụ trong hôm nay</Text>
           <InputTask heightOfText={25} fontSize={20} multiLine={false} showButton={false}/>
           <Text style={{fontSize:17,paddingLeft:20,paddingBottom:3}}>Tiến độ thực hiện các nhiệm vụ đã lưu</Text>
           <InputTask heightOfText={25} fontSize={20} multiLine={false} showButton={false}/>
           <View style={{paddingRight:20,paddingTop:20,alignItems:"flex-end"}}>
           <TouchableOpacity onPress={props.logOut} style={{backgroundColor:"#FFB842",height:45,width:110,justifyContent:"center",alignItems:"center",borderRadius:5,shadowOpacity:0.7,shadowOffset:{width:4,height:4}}} >
                <Text style={{color:"black",fontSize:17}}>Đăng xuất</Text>
          </TouchableOpacity>
          </View>
          <View style={{paddingRight:20,paddingTop:20,alignItems:"flex-end"}}>
           <TouchableOpacity onPress={props.logOut} style={{backgroundColor:"#FFB842",height:45,width:110,justifyContent:"center",alignItems:"center",borderRadius:5,shadowOpacity:0.7,shadowOffset:{width:4,height:4}}} >
                <Text style={{color:"black",fontSize:17}}>Đổi mật khẩu</Text>
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
