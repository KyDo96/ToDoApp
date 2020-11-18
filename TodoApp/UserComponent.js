import 'react-native-gesture-handler';
import React, { useEffect,useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button,TouchableWithoutFeedback,Keyboard } from "react-native";
import TaskListScreen from './TaskListScreen';
import CreateTaskScreen from './CreateTaskScreen';
import DetailScreen from './DetailScreen';

import { SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity } from 
'react-native-gesture-handler';
import MyNavigation from './MyNavigation'
import UserScreen from './UserScreen';
import {connect} from 'react-redux';
const Tab = createMaterialBottomTabNavigator();


function UserComponent(props) {
  const logOut = ()=>{
    props.navigation.navigate('LoginPage')
  }
  useEffect(() => {
    let date = new Date().getDate();
    let month = new Date().getMonth()+1;
    let year = new Date().getFullYear();
    props.setCurrentDate(
      date + '/' + month + '/' + year
    );
  }, []);
  
  return (
    <MyNavigation styleTab={[
      {height:50,
        width:85,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        backgroundColor:"#FFB842",
        justifyContent:"center",
        alignItems:"center",
        shadowOffset:{width:3,height:3},
        shadowOpacity:1,
      },
      {height:50,
        width:90,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
        backgroundColor:"#FFB842",
        justifyContent:"center",
        alignItems:"center",
        borderLeftWidth:1,
        borderRightWidth:0,
        shadowOffset:{width:3,height:3},
        shadowOpacity:1,
      },
      {height:50,
        width:90,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
        backgroundColor:"#FFB842",
        justifyContent:"center",
        alignItems:"center",
        borderLeftWidth:1,
        borderRightWidth:1,
        shadowOffset:{width:3,height:3},
        shadowOpacity:1,
      },
      {height:50,
        width:90,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        backgroundColor:"#FFB842",
        justifyContent:"center",
        alignItems:"center",
        shadowOffset:{width:3,height:3},
        shadowOpacity:1,
      }
      ]}
      contentTab={[
        "Tạo mới",
        "Danh sách",
        "Chỉnh sửa",
        "Người dùng"
      ]}
      iconTab={["plus",'list','pencil','user']}
      >
      <CreateTaskScreen/>
      <TaskListScreen />
      <DetailScreen />
      <UserScreen logOut={logOut}/>
    </MyNavigation>
  )
}

const styles = StyleSheet.create({
});
const mapDispatchToState=(dispatch)=>{
  return{ setCurrentDate:(date)=>{
    const action={
      type:'SET_DATE',
      payload:date
    }
    dispatch(action)
  }
}
}
export default connect(null,mapDispatchToState)(UserComponent)