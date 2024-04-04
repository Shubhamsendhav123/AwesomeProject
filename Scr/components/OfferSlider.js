import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { colors, col1, btn1, text1, hr80 } from "../style";

const OfferSlider = () => {
  return (
    <View>
      <View style={styles.offerSlider}>
        <Swiper autoplay={true} autoplayTimeout={4} showsButtons={true} dotColor={colors.text4} activeDotColor={colors.text1}>
          <View style={styles.slide}>
            <Image
              source={require("../../assets/Character-of-house-wife-preparing-food-Small-size.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../../assets/a737f0da2d72634b80a53d5d4d4bf3ce.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../../assets/944b3d4610846b8b17857498df75b5d2.jpg")}
              style={styles.image}
            />
          </View>
          

        </Swiper>
      </View>
    </View>
  );
};

export default OfferSlider;

const styles = StyleSheet.create({
  offerSlider: {
    width: "100%",
    height: 200,
    backgroundColor: colors.col1,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  slide: {
    width: "100%",
    height: 200,
    backgroundColor: colors.col1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  buttonText: {
    color: colors.text1,
    fontSize: 40,
    fontWeight: "500",
    backgroundColor: "white",
    borderRadius: 20,
    width: 40,
    height: 40,
    textAlign: "center",
    lineHeight: 40,
  },
});
