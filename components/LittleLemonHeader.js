import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.18,
    backgroundColor: "#F2F2F2",
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
