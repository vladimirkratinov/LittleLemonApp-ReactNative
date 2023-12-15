import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import LittleLemonHeader from "./components/LittleLemonHeader";
import WelcomeScreen from "./components/WelcomeScreen";
import SectionListMenu from "./components/SectionListMenu";
import FlatListMenu from "./components/FlatListMenu";
import stylesMenu from "./styles/stylesMenu";
import FeedbackForm from "./components/FeedbackForm";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={stylesMenu.container}>
      <NavigationContainer>
        <LittleLemonHeader />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Welcome") {
                iconName = focused ? "ios-home" : "ios-home-outline";
              } else if (route.name === "SectionList") {
                iconName = focused ? "ios-list" : "ios-list-outline";
              } else if (route.name === "FlatList") {
                iconName = focused ? "ios-albums" : "ios-albums-outline";
              } else if (route.name === "Feedback") {
                iconName = focused ? "information-circle" : "information-circle-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="SectionList"
            component={SectionListMenu}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="FlatList"
            component={FlatListMenu}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Feedback"
            component={FeedbackForm}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
