import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import InputComponent from "./InputComponent";
import Logo from "./Logo";
import BackgroundScreen from "./BackgroundScreen";
import {LoginServer} from '../TodoListServer/callServer'
import {connect} from 'react-redux';


function LoginScreen(props) {
  let ten='';
  let matKhau='';
  const handleOnchangeText=(value,name)=>{
    switch(name){
      case 'ten':
        
        ten=value;
        break;
      case 'matKhau':
        matKhau=value;
        break;
      default:
        break;
    }
  }
  const Login=()=>{
      LoginServer(ten)
      .then((result)=>{console.log(result[0].get('matKhau'));console.log(matKhau);if(result[0].get('matKhau')===matKhau){props.saveUser(result);props.navigation.navigate('UserPage') }else{Alert.alert('Mật khẩu không đúng','',
      [{text:'Thử lại'}])}})
      ;
  }
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
          <InputComponent getValue={true} name='ten' handleOnchangeText={handleOnchangeText} hideText={false} icon="user" placeholder="Tên đăng nhập"/>
          <InputComponent getValue={true} name='matKhau' handleOnchangeText={handleOnchangeText} hideText={true} icon="lock" placeholder="Mật khẩu"/>
          <View style={{width:260,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <TouchableOpacity>
              <Text style={{color:"#ffffff90",fontSize:17,paddingLeft:10}} >Quên mật khẩu?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={Login} style={{backgroundColor:"#FFB842",height:45,width:110,justifyContent:"center",alignItems:"center",borderRadius:5,shadowOpacity:0.7,shadowOffset:{width:3,height:3}}} >
                <Text style={{color:"white",fontSize:17}}>Đăng nhập</Text>
              </TouchableOpacity>
          </View>
          <View style={{width:260,flexDirection:"row",marginTop:90}}>
            <View style={{flex:1,backgroundColor:"#3e4750",borderTopLeftRadius:5,borderBottomLeftRadius:5,justifyContent:"center",alignItems:"center"}}>
              <Text style={{color:"#ffffff90",fontSize:17}} >Đăng ký tài khoản</Text>
              </View>
              <TouchableOpacity style={{backgroundColor:"#FFB842",height:45,width:45,justifyContent:"center",alignItems:"center",borderTopRightRadius:5,borderBottomRightRadius:5,shadowOpacity:0.7,shadowOffset:{width:3,height:3}}} onPress={()=>props.navigation.navigate('SignupPage')}>
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
  },
})
const mapDispatchToState=(dispatch)=>{
    return{ saveUser:(user)=>{
      const action={
        type:'SAVE_USER',
        payload:user
      }
      dispatch(action)
    }
  }
}
export default connect(null,mapDispatchToState)(LoginScreen)

