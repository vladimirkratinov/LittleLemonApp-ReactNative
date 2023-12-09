import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#495E57",
      }}
    >
    <LittleLemonHeader />
    <WelcomeScreen />
    <LittleLemonFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    backgroundColor: "#495E57",
    alignItems: "center",
    justifyContent: "center",
  },
});
