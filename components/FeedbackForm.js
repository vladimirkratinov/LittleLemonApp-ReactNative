import { View, Image, Text, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import stylesFeedback from "../styles/stylesFeedback";

export default function FeedbackForm() {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [message, onChangeMessage] = useState("");

  return (
    <ScrollView style={stylesFeedback.container}>
      <Text style={stylesFeedback.headingSection}>
        How was your visit to Little Lemon?
      </Text>
      <View style={stylesFeedback.imageContainer}>
        <Image
          source={require("../assets/feedback.png")}
          style={stylesFeedback.image}
        />
      </View>
      <Text style={stylesFeedback.infoSection}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
      <TextInput
        style={stylesFeedback.input}
        value={firstName}
        placeholder="First Name"
        onChangeText={onChangeFirstName}
      />
      <TextInput
        style={stylesFeedback.input}
        value={lastName}
        placeholder="Last Name"
        onChangeText={onChangeLastName}
      />
      <TextInput
        style={stylesFeedback.input}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={onChangeEmail}
      />
      <TextInput
        style={stylesFeedback.messageInput}
        value={message}
        placeholder="Type here your feedback..."
        onChangeText={onChangeMessage}
      />
    </ScrollView>
  );
}
