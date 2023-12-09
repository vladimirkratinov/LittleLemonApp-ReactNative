import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const emojis = ['😀', '😂', '😊', '👍', '🎉', '📱', '💬', '📞', '🙌', '👋', '🥳', '📧', '📅', '🕒', '🚀', '🔥', '💡', '🌈', '👏', '🤔'];

const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

const MockData = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  text: `New message: ${getRandomEmoji()} Hello! How are you? ${getRandomEmoji()}`,
}));

const ScrollList = () => {
  return (
    <ScrollView style={styles.container}>
      {MockData.map(item => (
        <Text key={item.id} style={styles.item}>
          {item.text}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    marginBottom: 0,
    backgroundColor: "#FFC47E"
  },
  item: {
    fontSize: 14,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
});

export default ScrollList;
