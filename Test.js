import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Animated,
} from "react-native";

export default function Test() {
  // const [box, setBox] = useState(styles.redBox);

  console.log("function");
  const changeBox = () => {
    // if (box == styles.redBox) {
    //   setBox(styles.blueBox);
    // } else {
    //   setBox(styles.redBox);
    // }
    console.log("changeBox");
    console.log(widthValue);
    console.log("to 100");
    Animated.timing(widthValue, {
      toValue: 100,
      duration: 2000,
    }).start();
  };
  const widthValue = new Animated.Value(0);
  const [test, setTest] = useState(0);
  const testValue = () => {
    const test1 = test + 1;
    setTest(test1);
  };
  console.log(widthValue);
  useEffect(() => {
    changeBox();
  }, []);
  return (
    <>
      <View style={{ alignItems: "center" }}>
        <Animated.View
          style={[styles.redBox, { width: widthValue }]}
        ></Animated.View>

        <Button title="Click" onPress={changeBox} />

        {/* <Text>{widthValue}</Text> */}
        <Text>{test}</Text>
        <Button title="Click2" onPress={testValue} />
      </View>
    </>
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
});
