import React ,{Component} from 'react';
import {TouchableOpacity, View, Text, TextInput, Image, Button} from 'react-native';
import NativeHeadlessJsTaskSupport from 'react-native/Libraries/ReactNative/NativeHeadlessJsTaskSupport';

class Login extends Component{

  constructor(props){
    super(props)
    this.state={
      username : "",
      password : ""
    }

  }
  _onPressLogin = () =>{
    if(this.state.username=='admin' && this.state.password=='secret') {
        alert("Login success!") 
        this.setState({ username: '' })
        this.setState({ password: '' })
        this.props.navigation.push('Main Menu')

    }else{
        alert("Login failed")
        this.setState({password:''})
    }
}

_onPressCancel = () =>{
    this.setState({ username: '' })
    this.setState({ password: '' })
}

  /*
  validate_field=()=>{
    const {username, password} = this.state
    if (username == ""){
      alert("Username jangan dikosongi")
      return false
    } else if(password == ""){
      alert("Password jangan dikosongi")
      return false  
    }
    return true
  }
/*
  making_api_call=()=>{
    if(this.validate_field()){
          alert("Berhasil Login")
    }
 */
state = {  }
render(){
  return(
    <View style={{width : "100%" , height : "100%" , justifyContent :"center" , alignSelf : "center" , alignContent : "center" , alignItems : "center"
          }}>
      <Image 
       style={{width: 200, height: 200}}
       resizeMode="contain"
       source = {require('./logo.png')} 
      />     
            <TextInput placeholder={"Username"}
            onChangeText={(value)=> this.setState({username : value})}
            style={{ height : 42 , width : "80%" , borderBottomWidth : 1}}
            />
            <TextInput placeholder={"Password"}
            onChangeText={(value)=> this.setState({password : value})}
            style={{ height : 42 , width : "80%" , borderBottomWidth : 1}}
            />
         
    <View style={{marginTop : "10%" , width : "80%",}}>
            <TouchableOpacity style={{ borderWidth : 1, height : 42, width : "80%"
            , justifyContent : "center" , alignItem : "center", borderRadius : 40 ,
            backgroundColor : "black" , alignSelf : "center" , textAlign : "center"
            }}
            onPress={this._onPressLogin}
            >       
                  <Text style={{color : "white", marginRight : 6, textAlign :'center'}}> LOGIN </Text>
            </TouchableOpacity>
    </View>
   
    
    </View>   
  )
}
}

export default Login ;