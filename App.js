
import { StyleSheet, Text, View,StatusBar } from "react-native";
import LoginScreen from "./Scr/Screen/LoginScreen";
import RootNavigation from "./Scr/RootNavigation";
import Categories from "./Scr/components/Categories";
import OfferSlider from "./Scr/components/OfferSlider";
import HomeHeadNav from "./Scr/HomeScreen";

export default function App() {
  return ( 
 <View>
  <Categories/>
  <RootNavigation/>
 
 </View>
);
}
