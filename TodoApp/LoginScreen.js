import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import InputComponent from "./InputComponent";
import Logo from "./Logo";
import BackgroundScreen from "./BackgroundScreen";



export default function LoginScreen({navigation}) {
  return (
    <BackgroundScreen>
          <View style={{marginTop: 100, marginBottom: 40 }}>
            <Logo kichThuoc={100}/>
          </View>
          <Text style={styles.allText}>Luôn bên cạnh để</Text>
          <View style={{marginBottom:50}}>
          <Text style={styles.allText}>
            <Text style={styles.mainText}>Nhắc</Text> bạn
          </Text>
          </View>
          <InputComponent hideText={false} icon="user" placeholder="Tên đăng nhập"/>
          <InputComponent hideText={true} icon="lock" placeholder="Mật khẩu"/>
          <View style={{width:260,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <TouchableOpacity>
              <Text style={{color:"#ffffff90",fontSize:17,paddingLeft:10}} >Quên mật khẩu?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate('UserPage')}} style={{backgroundColor:"#FFB842",height:45,width:110,justifyContent:"center",alignItems:"center",borderRadius:5,shadowOpacity:0.7,shadowOffset:{width:3,height:3}}} >
                <Text style={{color:"white",fontSize:17}}>Đăng nhập</Text>
              </TouchableOpacity>
          </View>
          <View style={{width:260,flexDirection:"row",marginTop:90}}>
            <View style={{flex:1,backgroundColor:"#3e4750",borderTopLeftRadius:5,borderBottomLeftRadius:5,justifyContent:"center",alignItems:"center"}}>
              <Text style={{color:"#ffffff90",fontSize:17}} >Đăng ký tài khoản</Text>
              </View>
              <TouchableOpacity style={{backgroundColor:"#FFB842",height:45,width:45,justifyContent:"center",alignItems:"center",borderTopRightRadius:5,borderBottomRightRadius:5,shadowOpacity:0.7,shadowOffset:{width:3,height:3}}} onPress={()=>navigation.navigate('SignupPage')}>
                <View style={{flexDirection:"row"}}>
              <SimpleLineIcons name="arrow-right" size={13} color="white" />
              <SimpleLineIcons style={{marginLeft:-5}} name="arrow-right" size={13} color="white" />
              </View>
              </TouchableOpacity>
          </View>
          </BackgroundScreen>
  );
            }
const styles = StyleSheet.create({
  allText: {
    fontFamily: "dancing-script",
    color: "white",
    fontSize: 20,
  },
  mainText: {
    fontSize: 30,
    // fontWeight: "500",
  },
})

