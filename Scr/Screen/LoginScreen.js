import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors, btn1, text1, hr80 } from "../style";

const LoginScreen = ({navigation}) => {
  const [emailfocus, setEmailfocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [showpassword, setShowpassword] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Sign in</Text>
      <View style={styles.inputout}>
        <AntDesign
          name="user"
          size={24}
          color={emailfocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onFocus={() => {
            setEmailfocus(true);
            setPasswordfocus(true);
          }}
        />
      </View>
      <View style={styles.inputout}>
        <AntDesign
          name="lock1"
          size={24}
          color={passwordfocus == false ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={showpassword === false ? true : false}
        />
        <AntDesign
          name={showpassword == true ? "eye-with-line" : "eye"}
          size={24}
          color="black"
          onPress={() => setPasswordfocus(!showpassword)}
        />
      </View>
      <TouchableOpacity style={btn1} onPress={()=>navigation.navigate('Home')}>
        <Text //style={{ color: "white", fontSize: "40", fontWeight: "bold" }} */
        >
          sign in
        </Text>
      </TouchableOpacity>
      <Text style={styles.forgot}> forgot password ?</Text>
      <Text style={styles.or}>OR</Text>
      <Text style={styles.gftxt}>Sign In with</Text>
      <View style={styles.gf}>
        <TouchableOpacity>
          <View style={styles.gficon}>
            <AntDesign name="google" size={24} color="orange" />
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.gficon}>
            <FontAwesome name="facebook-f" size={24} color="blue" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={hr80}></View>
      <Text style={styles.signup}> Dont't have an account? 
      <Text onPress={()=>navigation.navigate('Signup')}> Sign Up</Text></Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  head1: {
    fontSize: 30,
    color: "orange",
    
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "400",
  },
  inputout: {
    flexDirection: "row",
    width: "80%",
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 20,
    alignSelf: "center",
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "80%",
  },
  focus: {
    color: "red",
  },
  forgot: {
    backgroundColor: "white",
    borderRadius: 10,
    color: "black",
    marginTop: 20,
    marginBottom: 10,
    elevation:20,
  },
  or: {
    backgroundColor: "white",
    borderRadius: 10,
    color: "black",
    marginVertical: 20,
   // fontWeight: "bold",
    elevation:20,
  },
  gftxt: {
    backgroundColor: "white",
    borderRadius: 10,
    color: "black",
    marginVertical: 20,
    fontWeight: "bold",
    elevation:20,
  },
  gf: {
    flexDirection: "row",
  },
  gficon:{
    width:50,
    margin:10,
    borderRadius:10,
    padding:10,
    alignItems:'center',
    elevation:20,
  },
  signup:{
color:colors.text1,
  },
});
export default LoginScreen;
