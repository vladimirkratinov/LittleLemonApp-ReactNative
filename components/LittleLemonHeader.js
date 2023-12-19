import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function LittleLemonHeader( {navigation} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🍋 Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#86d3ea",
    flexDirection: "row",
    justifyContent: "flex-end", // Center content vertically
    alignItems: "center", // Center content horizontally
    height: 50, // You can adjust the height as needed
  },
  backButton: {
    marginLeft: 10,
    // fontSize: 20,
    // color: "black",
    // fontWeight: "bold"
  },
  text: {
    marginRight: 10,
    fontSize: 20,
    color: "black",
    fontWeight: "bold"
  }
});
