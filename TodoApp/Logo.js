import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function Logo(props) {
    const styles = StyleSheet.create({
        loGoBackGround: {
          backgroundColor: "#FFB842",
          width: props.kichThuoc,
          height: props.kichThuoc,
          borderRadius: props.kichThuoc/10,
          justifyContent: "center",
          shadowOffset: { width: props.kichThuoc/10, height: props.kichThuoc/10 },
          shadowOpacity: 0.5,
        }
    })
    return (
            <View
              style={{ alignItems: "center"}}
            >
              <View
                style={[
                  styles.loGoBackGround,
                  { transform: [{ rotate: "45deg" }] },
                ]}
              ></View>
              <View
                style={{
                  position: "absolute",
                  height: props.kichThuoc,
                  justifyContent: "center",
                }}
              >
                <SimpleLineIcons name="emotsmile" size={props.kichThuoc*4/5} color="black" />
              </View>
            </View>
            )
            }

            