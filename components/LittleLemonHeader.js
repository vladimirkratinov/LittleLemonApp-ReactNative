import { View, Text } from "react-native";
import React from "react";

export default function LittleLemonHeader() {
  return (
    <View
      style={{
        flex: 0.2,
        backgroundColor: "#FFF78A",
      }}
    >
      <Text
        style={{
          padding: 0,
          marginTop: 60,
          fontSize: 30,
          color: "black",
          fontWeight: "bold",
          justifyContent: "center",
          textAlign: "center",
        }}
        numberOfLines={1}
      >
        Little Lemon
      </Text>
    </View>
  );
}
