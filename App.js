import React from "react";
import { View, Text } from "react-native";
import Nav from "./Navgation/AppNavigator";
import Push from "./pushNotification/pushNotification";

export default function componentName() {
  return (
    <>
      <Push />
      <Nav />
    </>
  );
}
