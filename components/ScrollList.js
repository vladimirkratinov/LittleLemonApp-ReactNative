import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import emojis from './emojis.js';

const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

const MockData = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  text: `New message: Hello! How are you? ${getRandomEmoji()}`,
}));

const ScrollList = () => {
  return (
    <ScrollView style={scrollListStyles.container}>
      {MockData.map((item) => (
        <Text key={item.id} style={scrollListStyles.item}>
          {item.text}
        </Text>
      ))}
    </ScrollView>
  );
};

const scrollListStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    marginBottom: 0,
    backgroundColor: "#FFC47E",
  },
  item: {
    fontSize: 14,
    padding: 8,
    flexWrap: "wrap",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
});

export default ScrollList;
