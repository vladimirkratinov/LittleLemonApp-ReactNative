import React from "react";
import { StyleSheet, View } from "react-native";
// Components:
import LittleLemonHeader from "./components/LittleLemonHeader";
import WelcomeScreen from "./components/WelcomeScreen";
import SectionListMenu from "./components/SectionListMenu";
import FLatListMenu from "./components/FlatListMenu";
import ScrollListMenu from "./components/ScrollListMenu";
// Tab Icons:
import { FontAwesome5 } from "@expo/vector-icons";
// Navigation:
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const tabIconMappings = {
  Welcome: "home",
  "Section List": "stream",
  "Flat List": "tasks",
  "Scroll List": "scroll",
};

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5
                name={tabIconMappings[route.name]}
                size={size}
                color={color}
              />
            ),
          })}
        >
          <Tab.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Section List"
            component={SectionListMenu}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Flat List"
            component={FLatListMenu}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Scroll List"
            component={ScrollListMenu}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
