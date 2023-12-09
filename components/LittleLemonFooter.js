import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function LittleLemonFooter() {
  return (
    <View style={footerStyles.container}>
      <Text style={footerStyles.text}>All rights reserved by Little Lemon, 2022</Text>
    </View>
  );
}

const footerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#FFAD84",
  },
  text: {
    fontSize: 12,
    color: "black",
    textAlign: "center",
  },
});
