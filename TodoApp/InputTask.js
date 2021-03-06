import React from 'react'
import { StyleSheet, View,Text,TextInput } from 'react-native'
import ButtonForTask from './ButtonForTask'
import {connect} from 'react-redux'
function InputTask(props) {
    const setEditable=()=>{
        if(props.showDate){
            return false;
        }else{return true}
    }
    const showDate=()=>{
        if(props.showDate){
            return props.currentDate;
        }else{return null}
    }
    const showButton=()=>{
        if(props.showButton){
            return <ButtonForTask size={25} icon="pencil"/>
        }
    }
    const styles = StyleSheet.create({
        containner:{
            width:340,
            backgroundColor:"#3e4750",
            borderRadius:10,
            shadowOffset:{width:4,height:4},
              shadowOpacity:0.5,
              alignItems:"center",
              padding:8,
              flexDirection:"row",
              justifyContent:"space-between",
              marginRight:15,
              marginLeft:15,
              marginBottom:10
        },
        text:{
          width:270,
          height:props.heightOfText,
            fontSize:props.fontSize,
            color:"white",
            
        }
      })
    return (
        <View style={styles.containner}>
            <TextInput value={showDate()} editable={setEditable()} multiline={props.multiLine} style={styles.text}/>
            {showButton()}
        </View>
    )
    
}
const mapStateToProps =(state)=>{
    return {
      currentDate:state.taskListReducer.currentDate
    }
  }
  
  const mapDisPatchToProps=(dispatch)=>{
    return {
      
    }
  }
  export default connect(mapStateToProps,mapDisPatchToProps)(InputTask);

