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
import { Feather } from "@expo/vector-icons";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors, btn1, text1, hr80,text2 } from "../style";

const SignupScreen = ({ navigation }) => {
  const [namefocus, setNamefocus] = useState(false);
  const [emailfocus, setEmailfocus] = useState(false);
  const [phonefocus, setPhonefocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [showpassword, setShowpassword] = useState(false);
  const [showcpassword, setShowcpassword] = useState(false);
  const [cpasswordfocus, setcPasswordfocus] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Sign up</Text>
      <View style={styles.inputout}>
      <AntDesign
          name="user"
          size={24}
          color={namefocus === true ? colors.text1 : colors.text2}
        />
     
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          onFocus={() => {
            setEmailfocus(false);
            setNamefocus(true);
            setPhonefocus(false);
            setPasswordfocus(false);
            setcPasswordfocus(false);
            
            
          }}
        />
      </View>
      <View style={styles.inputout}>
      <Entypo name="email" size={24} 
      color={emailfocus === true ? colors.text1 : colors.text2}
      />
       
        <TextInput
          style={styles.input}
          placeholder="Email"
          onFocus={() => {
            
            setEmailfocus(true);
            setNamefocus(false);
            setPhonefocus(false);
            setPasswordfocus(false);
            setcPasswordfocus(false);
            
          }}
        />
      </View>
      <View style={styles.inputout}>
      <FontAwesome name="phone" size={24} 
                color={phonefocus === true ? colors.text1 : colors.text2}
      />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onFocus={() => {
            setEmailfocus(false);
            setNamefocus(false);
            setPhonefocus(true);
            setPasswordfocus(false);
            setcPasswordfocus(false);
          }}
        />
      </View>
      <View style={styles.inputout}>
        <AntDesign
          name="lock1"
          size={24}
          color={passwordfocus == true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={showpassword === false ? true : false}
          onFocus={() => {
            setEmailfocus(false);
            setNamefocus(false);
            setPhonefocus(false);
             setcPasswordfocus(false);
            setPasswordfocus(true);
           
          }}
        />
        <AntDesign
          name={
            showpassword == true ? (
              <Feather name="eye-off" size={24} 
              color={phonefocus === false ? colors.text1 : colors.text2}
               />
            ) : (
              "eye"
            )
          }
          size={24}
          color="black"

          onPress={() => setPasswordfocus(!showpassword)}
        />
      </View>
      <View style={styles.inputout}>
        <AntDesign
          name="lock1"
          size={24}
          color={cpasswordfocus == true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onFocus={() => {
            
            setEmailfocus(false);
            setNamefocus(false);
            setPhonefocus(false);
            setPasswordfocus(false);
            setcPasswordfocus(true);
          }}
          secureTextEntry={showcpassword === false ? true : false}

        />
        <AntDesign
          name={showcpassword == true ? "eye-with-line" : "eye"}
          size={24}
          color="black"
          onPress={() => setcPasswordfocus(!showcpassword)}
        />
      </View>
     <Text style={styles.address}>Please enter your address</Text>
     <View  style={styles.inputout}>
      <TextInput style={styles.input1} placeholder="Enter your address"/>
     </View>
      <TouchableOpacity style={btn1}>
        <Text //style={{ color: "white", fontSize: "40", fontWeight: "bold" }} */
        >
          sign up
        </Text>
      </TouchableOpacity>
     {/* <Text style={styles.forgot}> forgot password ?</Text>*/}
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
      <Text style={styles.signup}>
        already have an account?
        <Text onPress={() => navigation.navigate("Login")}> Sign in </Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    //justifyContent: "center",
  },
  head1: {
    fontSize: 30,
    color: "orange",
    borderColor: " black ",
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
    elevation: 20,
  },
  or: {
    backgroundColor: "white",
    borderRadius: 10,
    color: "black",
    marginVertical: 20,
    fontWeight: "bold",
    elevation: 20,
  },
  gftxt: {
    backgroundColor: "white",
    borderRadius: 10,
    color: "black",
    marginVertical: 20,
    fontWeight: "bold",
    elevation: 20,
  },
  gf: {
    flexDirection: "row",
  },
  gficon: {
    width: 50,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 20,
  },
  signup: {
    color: colors.text1,
  },
  signup: {
    color: colors.text1,
},
address: {
    fontSize: 18,
    color: colors.text2,
    textAlign: 'center',
    marginTop: 20,
},
errormsg: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
},
successmessage: {
    color: 'green',
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
},
});
export default SignupScreen;
