import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";

export default function LoginScreen() {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [loggedIn, onLogin] = React.useState(false);
  const handlePress = () => {
    //Handle Press action here:
    // console.log("Button pressed!");
    onLogin(!loggedIn);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome!</Text>
      {loggedIn && (
        <>
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
        </>
      )}
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{loggedIn ? "Log In" : "Log Out"}</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerText: {
    marginTop: 60,
    padding: 10,
    fontSize: 24,
    color: "black",
    textAlign: "center",
  },
  regularText: {
    fontSize: 15,
    padding: 10,
    marginVertical: 10,
    color: "black",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    marginHorizontal: 40,
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    borderColor: "black",
    backgroundColor: "#F4CE14",
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 24,
    margin: 12,
    borderRadius: 8,
    marginHorizontal: 40,
    elevation: 3,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
