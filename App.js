import 'react-native-gesture-handler';
import React, { useEffect,useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from "expo-font";
import  {AsyncStorage}  from "react-native";
import LoginScreen from "./TodoApp/LoginScreen";
import SignupScreen from "./TodoApp/SignupScreen";


import {createStore} from "redux";
import rootReducer from "./Reducers";
import {Provider} from "react-redux";
import UserComponent from './TodoApp/UserComponent';

import keys from './constants/Keys';
import Parse from "parse/react-native.js";
import CreateTaskScreen from './TodoApp/CreateTaskScreen';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(keys.applicationId, keys.javascriptKey);
Parse.serverURL = keys.serverURL;

  
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
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={LoginScreen} />
        <Stack.Screen name="SignupPage" component={SignupScreen} />
        <Stack.Screen name="UserPage" component={UserComponent}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
  }else{
    return null}
}
