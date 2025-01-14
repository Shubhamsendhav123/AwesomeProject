import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNavigation from "./Screen/AuthNavigation";

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
