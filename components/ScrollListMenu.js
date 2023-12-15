import { ScrollView, Text, StyleSheet } from "react-native";
import React from "react";

const randomTextMessages = [
  "Embrace the chaos; life's beauty lies in unpredictability.",
  "Coffee: a magical potion that turns 'Leave me alone' into 'Good morning!'",
  "Dream big, work hard, stay focused, and surround yourself with good people.",
  "In a world of algorithms, be someone's unexpected human connection.",
  "Chase your dreams, but don't forget to enjoy the scenery along the way.",
  "The best way to predict the future is to create it. Start now!",
  "Sunshine mixed with a little hurricane; that's the recipe for joy.",
  "Find joy in the ordinary, magic in the mundane, and beauty in the details.",
  "Life is short. Smile while you still have teeth!",
  "Adventure awaits outside your comfort zone. Take the first step.",
  "Kindness is free. Sprinkle it everywhere you go.",
  "Dance like no one is watching, sing like no one is listening.",
  "Create a life you don't need a vacation from.",
  "The best is yet to come. Keep going, and don't look back.",
  "Happiness is a journey, not a destination.",
  "Believe you can, and you're halfway there.",
  "Celebrate small victories; they lead to big achievements.",
  "Surround yourself with those who make you happy.",
  "Be the reason someone believes in the goodness of people.",
  "Life is too short for boring hair and bad vibes."
];

const ScrollListMenu = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {randomTextMessages.map((message, index) => (
        <Text key={index} style={styles.item}>{message}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 0,
    backgroundColor: "#FFFFFF",
  },
  item: {
    fontSize: 14,
    padding: 3,
    marginBottom: 0,
  },
});

export default ScrollListMenu;
