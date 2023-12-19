import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🍋 Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#86d3ea",
    justifyContent: "center", // Center content vertically
    alignItems: "flex-start", // Center content horizontally
    height: 50, // You can adjust the height as needed
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
    color: "black",
    fontWeight: "bold"
  }
});
