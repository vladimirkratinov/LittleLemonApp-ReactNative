import {
  View,
  Image,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import stylesFeedback from "../styles/stylesFeedback";
import { useHeaderHeight } from "@react-navigation/elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function FeedbackForm() {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [message, onChangeMessage] = useState("");
  const headerHeight = useHeaderHeight();

  return (
    // <KeyboardAvoidingView
    //   style={{ flex: 1 }}
    //   keyboardVerticalOffset={headerHeight + 105}
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    // >

    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
      extraScrollHeight={Platform.OS === "ios" ? headerHeight + 55 : 0}
      extraHeight={Platform.select({ android: 100 })}
      style={{ flexGrow: 1 }}
    >
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        style={stylesFeedback.container}
      >
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
          and classic cocktails in a lively but casual environment. We would
          love to hear your experience with us!
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
          multiline={true}
          numberOfLines={4} // Adjust the number of lines as needed
          maxLength={250}
        />
      </ScrollView>
    </KeyboardAwareScrollView>
  );
}
