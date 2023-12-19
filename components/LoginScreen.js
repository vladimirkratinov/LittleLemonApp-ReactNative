import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  View,
} from "react-native";
import React from "react";

export default function LoginScreen() {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [loggedIn, onLogin] = React.useState(false);
  const handlePress = () => {
    //Handle Press action here:
    // console.log("Button pressed!");
    if ((loggedIn) && (email.trim() === "" && password.trim() === "")) {
      alert("Enter your email and password");
    } else {
      onLogin(!loggedIn);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* <Text style={styles.headerText}>Welcome!</Text> */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          margin: 40,
        }}
      >
        <Image
          source={require("../assets/images/chef.png")}
          style={{
            height: 120,
            width: 120,
            resizeMode: "contain",
          }}
        />
      </View>
      {loggedIn && (
        <>
          <Text style={styles.regularText}>Login to continue</Text>
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
      {!loggedIn && (
        <>
          <Text style={styles.regularText}>
            You are successfully logged in!
          </Text>
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
    // backgroundColor: "white",
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
    // backgroundColor: "#A9D8B8",
    backgroundColor: "#A9D8B8",
  },
  button: {
    backgroundColor: "#E05263",
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
