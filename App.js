import 'react-native-gesture-handler';
import React, { useEffect,useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { StyleSheet, Text, View, Button,TouchableWithoutFeedback,Keyboard } from "react-native";
import LoginScreen from "./TodoApp/LoginScreen";
import Test from "./Test";
import InputComponent from "./TodoApp/InputComponent";
import SignupScreen from "./TodoApp/SignupScreen";
import Logo from "./TodoApp/Logo"
import BackgroundScreen from './TodoApp/BackgroundScreen';
import TaskListScreen from './TodoApp/TaskListScreen';


import {createStore} from "redux";
import rootReducer from "./Reducers";
import {Provider} from "react-redux";
import CreateTaskScreen from './TodoApp/CreateTaskScreen';
const store = createStore(rootReducer)
const Stack = createStackNavigator();

export default function App() {
  const [fontLoad,setFontLoad]=useState(false);
  const fetchFonts =async () => {
    await Font.loadAsync({
      "dancing-script": require("./assets/fonts/DancingScript-VariableFont_wght.ttf"),
    });
    setFontLoad(true);
  };
  useEffect(() => {
    console.log("ky");
    fetchFonts();
  },[]);
  console.log(fontLoad);
  if(fontLoad){
  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="LoginPage" component={LoginScreen} />
    //     <Stack.Screen name="SignupPage" component={SignupScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <TaskListScreen/>
    <Provider store={store}>
    {/* <TaskListScreen/> */}
    <CreateTaskScreen/>
    </Provider>
  );
  }else{
    return null}
}

const styles = StyleSheet.create({
});
