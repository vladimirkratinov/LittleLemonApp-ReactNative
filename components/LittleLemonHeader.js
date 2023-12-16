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
    backgroundColor: "orange",
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    height: 50, // You can adjust the height as needed
  },
  text: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold"
  }
});
