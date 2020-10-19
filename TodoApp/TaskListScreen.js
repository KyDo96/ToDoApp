import React,{useState,useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import BackgroundScreen from "./BackgroundScreen";
import TabButton from "./TabButton";
import {connect} from "react-redux";
import Task from "./Task";
import Test from "../Test";


const TaskListScreen=(props)=> {
    const [currentDate, setCurrentDate] = useState('');
  const stringDayOfWeek = (day)=>{
    switch (day){
        case 0:
            return "Chủ nhật";
        case 1:
            return "Thứ hai";
        case 2:
            return "Thứ ba";
        case 3:
            return "Thứ tư";
        case 4:
            return "Thứ năm";
        case 5:
            return "Thứ sáu";
        case 6:
            return "Thứ bảy";
    }
  }
  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth()+1;
    var year = new Date().getFullYear();
    var dayOfWeek = new Date().getDay();
    var stringDay= stringDayOfWeek(dayOfWeek);
    setCurrentDate(
      stringDay+','+ date + '/' + month + '/' + year 
    );
  }, []);
  const tabBehind=()=>{
    if(props.taskList){
      return <TabButton changeTab={props.changeTab} shadowWidth={0} shadowHeight={0} tittle="Tất cả" topDis="100%"  leftDis="65%"/>
    }else{
      return <TabButton changeTab={props.changeTab} shadowWidth={0} shadowHeight={0} tittle="Hôm nay" topDis="100%"  leftDis="10%"/>
    }
  }
  const tabFront=()=>{
    if(props.taskList){
      return <TabButton shadowWidth={4} shadowHeight={-4} tittle="Hôm nay" topDis={0} leftDis="10%"/>
    }else{
      return <TabButton shadowWidth={4} shadowHeight={-4} tittle="Tất cả" topDis={0} leftDis="65%"/>
    }
  }
  const renderTask=({item})=><Task name={item.name}/>
  
  const renderTaskList=()=>{
    if(props.taskList){
    return <FlatList removeClippedSubviews={true} data={props.todayList} renderItem={renderTask} keyExtractor={(item)=>item.id}/>
    }else{
      return <FlatList removeClippedSubviews={true} data={props.listAll} renderItem={renderTask} keyExtractor={(item)=>item.id}/>
    }
  }
  return (
    <>
        <View style={{backgroundColor:"#FFB842",height:"28%",width:"100%",flexDirection:"row",justifyContent:"space-between"}}>
            <View style={{paddingTop:30,paddingLeft:30}}>
            <Text style={{fontFamily:"dancing-script",color:"white"}}>
            <Text style={{fontSize:28}}>Xin chào,{"\n"}</Text>
            <Text style={{fontSize:40,color:"black"}}>KyDo{"\n"}</Text>
            <Text style={{fontSize:17,lineHeight:25}}>
            {currentDate}
            </Text>
            </Text>
            </View>
            <View style={{paddingTop:30,paddingRight:30}}>
                <SimpleLineIcons style={{paddingBottom:10}} name="emotsmile" size={30} color="black" />
                <Text style={{fontFamily:"dancing-script",lineHeight:25,fontSize:20}}>Chúc bạn một ngày{"\n"} vui vẻ</Text>
            </View>
            {tabBehind()}
        </View >
        <View style={styles.list}>
          {tabFront()}
          {renderTaskList()}
        </View>
    </>
  );
}
const styles = StyleSheet.create({
  list:{
    width:"100%",
    flex:1,
    backgroundColor:"#343B45",
    shadowOffset:{width:4,height:-5},
    shadowOpacity:0.5,
    alignItems:"center",
    paddingTop:20,
    paddingBottom:30
  }
})

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
export default connect(mapStateToProps,mapDisPatchToProps)(TaskListScreen);