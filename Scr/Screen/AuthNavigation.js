import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignupScreen from "./SignupScreen";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "../HomeScreen";
const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen}
      options={{
        headerShown : false,
      }}
      />
      <Stack.Screen name="Signup" component={SignupScreen} 
       options={{
        headerShown : false,
      }}/>
      <Stack.Screen name="Login" component={LoginScreen}
       options={{
        headerShown : false,
      }} />
      <Stack.Screen name="Home" component={HomeScreen} 
       options={{
        headerShown : false,
      }}/>
    </Stack.Navigator>
  );
};

export default AuthNavigation;
