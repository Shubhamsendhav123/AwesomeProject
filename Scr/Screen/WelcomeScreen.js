import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Tiffin Vista</Text>
      <View></View>
      <View style={styles.hr8D} />
      <Text style={styles.text}>Get ready to explore variety of tiffins</Text>
      <View style={styles.hr8D} />
      <View style={styles.btnoutput}>
        <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
          <Text style={styles.btn } >Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.btn}> Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  colors: {
    col1: "white",
    text1: "red",
    text2: "grey",
  },
  hr8D: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  title: {
    marginTop: 20,
    fontSize: 40,
    color: "black",
    textAlign: "center",
    marginBottom: 300,
    fontWeight: "400",
  },
  text: {
    color: "black",
    fontWeight: "400",
    fontSize: 18,
    width: "100%",
    textAlign: "center",
    fontStyle: "italic",
  },
  btnoutput: {
    flexDirection: "row",
  },
  btn: {
    fontSize: 20,
    marginVertical: 30,
    fontWeight: "70",
    backgroundColor: "#fff",
    borderRadius: 20,
    textAlign: "center",
    color: "black",
    marginHorizontal: 10,
    padding: 40,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default WelcomeScreen;
