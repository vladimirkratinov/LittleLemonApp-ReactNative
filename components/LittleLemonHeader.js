import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.text}>Little Lemon</Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    flex: 0.21,
    backgroundColor: "#FFAD84",
  },
  text: {
    padding: 0,
    marginTop: 65,
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  }
});
