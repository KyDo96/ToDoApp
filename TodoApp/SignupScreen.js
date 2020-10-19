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



export default function SignupScreen({navigation}) {
  return (
    <BackgroundScreen>
      <View style={{marginTop:90,marginBottom:50}}>
        <Logo kichThuoc={50}/>
      </View>   
      <InputComponent hideText={false} icon="phone" placeholder="Số điện thoại" />
      <InputComponent hideText={false} icon="user" placeholder="Tên đăng nhập" />
      <InputComponent hideText={true} icon="lock" placeholder="Mật khẩu" />
      <InputComponent hideText={true} icon="lock" placeholder="Nhập lại mật khẩu" />
      <View style={{width:260,flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
          <TouchableOpacity style={{backgroundColor:"#FFB842",height:45,width:110,justifyContent:"center",alignItems:"center",borderRadius:5,shadowOpacity:0.7,shadowOffset:{width:3,height:3}}}>
                <Text style={{color:"white",fontSize:17}}>Đăng ký</Text>
          </TouchableOpacity>
      </View>
      <View style={{width:260,flexDirection:"row",marginTop:110}}>
            <TouchableOpacity style={{backgroundColor:"#FFB842",height:45,width:45,justifyContent:"center",alignItems:"center",borderTopLeftRadius:5,borderBottomLeftRadius:5,shadowOpacity:0.7,shadowOffset:{width:0,height:3}}} onPress={()=>navigation.navigate('LoginPage')}>
                <View style={{flexDirection:"row"}}>
              <SimpleLineIcons name="arrow-left" size={13} color="white" />
              <SimpleLineIcons style={{marginLeft:-5}} name="arrow-left" size={13} color="white" />
              </View>
            </TouchableOpacity>
            <View style={{flex:1,backgroundColor:"#3e4750",borderTopRightRadius:5,borderBottomRightRadius:5,justifyContent:"center",alignItems:"center"}}>
              <Text style={{color:"#ffffff90",fontSize:17}} >Quay lại trang đăng nhập</Text>
            </View>
            
      </View>
    </BackgroundScreen>
  );
}
const styles = StyleSheet.create({
  
})

