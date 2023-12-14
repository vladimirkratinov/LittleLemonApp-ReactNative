import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function LittleLemonFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>All rights reserved by Little Lemon, 2022</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    marginBottom: 0,
  },
  text: {
    fontSize: 12,
    color: "#CCCCCC",
    textAlign: "center",
    fontStyle: 'italic',
  },
});
