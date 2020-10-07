import React, { useEffect } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { StyleSheet, Text, View, Button } from "react-native";
import LoginScreen from "./TodoApp/LoginScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "dancing-script": require("./assets/fonts/DancingScript-VariableFont_wght.ttf"),
  });
};

export default function App() {
  useEffect(() => {
    console.log("ky");
    fetchFonts();
  });
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343B45",
    alignItems: "center",
    // justifyContent: "center",
  },
});
