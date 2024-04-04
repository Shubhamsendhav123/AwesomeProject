import { View, Text, StatusBar, StyleSheet, TextInput } from "react-native";
import { colors, col1, btn1, text1, hr80 } from "./style";
import React from "react";
import HomeHeadNav from "./components/HomeHeadNav";
import Categories from "./components/Categories";
import OfferSlider from "./components/OfferSlider";

import { AntDesign } from "@expo/vector-icons";

const HomeScreen =() => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Categories />

      <HomeHeadNav />
      <View style={styles.searchbox}>
        <AntDesign
          name="search1"
          size={24}
          color="black"
          style={styles.searchicon}
        />
        <TextInput style={styles.input} placeholder="Search" />
      </View>

      <OfferSlider />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 500,
    flex: 1,
    backgroundColor: colors.col1,
    // alignItems: 'center',
    width: "100%",
    height: "100%",
  },
  searchbox: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: colors.col1,
    borderRadius: 30,
    alignItems: "center",
    padding: 10,
    margin: 20,
    elevation: 10,
  },
  input: {
    marginLeft: 10,
    width: "90%",
    fontSize: 18,
    color: colors.text1,
  },
  searchicon: {
    color: colors.text1,
  },
  seacrhresultsouter: {
    width: "100%",
    marginHorizontal: 30,
    height: "100%",
    backgroundColor: colors.col1,
  },
  searchresultsinner: {
    width: "100%",
  },
  searchresult: {
    width: "100%",
    flexDirection: "row",
    // alignItems: 'center',
    padding: 5,
  },
  searchresulttext: {
    marginLeft: 10,
    fontSize: 18,
    color: colors.text1,
  },
  bottomnav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: colors.col1,
    zIndex: 20,
  },
});

export default HomeHeadNav;
