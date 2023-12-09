import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function WelcomeScreen() {
  return (
    <View style={welcomeStyles.container}>
      <Text style={welcomeStyles.text}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 0.27,
    backgroundColor: "#FFE382",
  },
  text: {
    padding: 0,
    marginVertical: 8,
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
});
