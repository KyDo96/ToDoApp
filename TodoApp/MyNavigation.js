import 'react-native-gesture-handler';
import React, { useEffect,useState } from "react";
import { StyleSheet, Text, View, Button,TouchableWithoutFeedback,Keyboard } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {connect} from "react-redux";
import { SimpleLineIcons } from "@expo/vector-icons";

function MyNavigation(props) {

    const renderTabBar=()=>{
        return props.children.map((item,index)=>{
            let shadowO=0;
            let iconColor="black"
            if(index===props.screenIndex){
                shadowO=1;
                iconColor="white"
            }
    return <TouchableOpacity key={index} style={props.styleTab[index]} onPress={()=>{props.changeScreen(index)}}>
        <SimpleLineIcons name={props.iconTab[index]} size={25} color={iconColor} />
        <Text  style={{ shadowOffset:{width:3,height:3},shadowOpacity:shadowO,color:iconColor ,fontFamily:"dancing-script",fontSize:17}}>{props.contentTab[index]}</Text>
    </TouchableOpacity >
        })
    }
  return (
    <>
    {props.children[props.screenIndex]}
    <View style={{width:"100%",position:"absolute",bottom:0,flexDirection:"row",justifyContent:"center",paddingBottom:10}}>
      {renderTabBar()}
    </View>
    </>
  )
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
const mapStateToProps=(state)=>{
    return {
        screenIndex:state.screenReducer.screenIndex,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyNavigation)