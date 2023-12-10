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
    backgroundColor: "#FFAD84",
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
    color: "black",
    textAlign: "center",
    fontStyle: 'italic',
  },
});
