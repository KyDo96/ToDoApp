
import Parse from "parse/react-native.js";
import  {AsyncStorage}  from "react-native";
const User = Parse.Object.extend('TodoListUser');
const query = new Parse.Query(User);
const SignUpServer=(soDienThoai,ten,matKhau)=>{
    const user = new User();
    user.set('soDienThoai',soDienThoai);
    user.set('ten',ten);
    user.set('matKhau',matKhau);
    return user.save()
}
const LoginServer=(ten)=>{
    query.equalTo('ten', ten);
    return query.find();
    
}
export {SignUpServer,LoginServer}