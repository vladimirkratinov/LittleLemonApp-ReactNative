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
    flex: 0.10,
    // backgroundColor: "#F2F2F2",
    backgroundColor: "orange"
  },
  text: {
    padding: 0,
    marginTop: 20,
    marginLeft: 10,
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "left",
  }
});
