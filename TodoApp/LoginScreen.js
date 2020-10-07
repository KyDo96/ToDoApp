import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
export default function LoginScreen() {
  return (
    <>
      <View style={{ alignItems: "center", marginTop: 100, marginBottom: 40 }}>
        <View
          style={[styles.loGoBackGround, { transform: [{ rotate: "45deg" }] }]}
        ></View>
        <View
          style={{
            position: "absolute",
            height: 100,
            justifyContent: "center",
          }}
        >
          <SimpleLineIcons name="emotsmile" size={80} color="black" />
        </View>
      </View>
      <Text style={styles.allText}>Luôn bên cạnh để</Text>
      <Text style={styles.allText}>
        <Text style={styles.mainText}>Nhắc</Text> bạn
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  loGoBackGround: {
    backgroundColor: "#FFB842",
    width: 100,
    height: 100,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.5,
  },
  allText: {
    fontFamily: "dancing-script",
    color: "white",
    fontSize: 20,
  },
  mainText: {
    fontSize: 30,
    // fontWeight: "500",
  },
});
