import React from "react";
import { SafeAreaView, Text, View, Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import LittleLemonHeader from "./components/LittleLemonHeader";
import WelcomeScreen from "./components/WelcomeScreen";
import SectionListMenu from "./components/SectionListMenu";
import FlatListMenu from "./components/FlatListMenu";
import stylesMenu from "./styles/stylesMenu";
import FeedbackForm from "./components/FeedbackForm";
import LoginScreen from "./components/LoginScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => {
      const iconMapping = {
        Login: "ios-log-in",
        Welcome: "ios-home",
        SectionList: "ios-list",
        FlatList: "ios-albums",
        Feedback: "information-circle",
      };
      const iconName = iconMapping[route.name] || "ios-home-outline";
      return {
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? iconName : `${iconName}-outline`}
            size={size}
            color={color}
          />
        ),
      };
    }}
  >
    <Tab.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
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
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <SafeAreaView style={stylesMenu.container}>
      <LittleLemonHeader />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainTabs">
          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
