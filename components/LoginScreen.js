import { ScrollView, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

export default function LoginScreen() {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome!</Text>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Email"
        autoCapitalize={"none"}
        keyboardType={"email-address"}
        onChangeText={(email) => onChangeEmail(email.toLowerCase())}
      />
      <TextInput
        style={styles.input}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={onChangePassword}
      />
      {/* {console.log(password)} */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  headerText: {
    marginTop: 60,
    padding: 10,
    fontSize: 24,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 15,
    padding: 10,
    marginVertical: 10,
    color: "#EDEFEE",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    borderColor: "black",
    backgroundColor: "#F4CE14",
  },
});
