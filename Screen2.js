import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

const Screen2 = () => {
  //   let text = "1";
  const [text, setText] = useState("1");
  const changeText = () => {
    if (text == "1") {
      setText("2");
    } else {
      setText("1");
    }
  };

  console.log("render Screen2");
  return (
    <>
      <Text style={{ color: "white", padding: 20, fontSize: 25 }}>{text}</Text>
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor={"black"}
        onPress={changeText}
        style={{
          height: 50,
          width: "80%",
          borderRadius: 5,
          margin: 50,
        }}
      >
        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "pink",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            // margin: 50,
          }}
        >
          <Text>Button</Text>
        </View>
      </TouchableHighlight>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Screen2;
