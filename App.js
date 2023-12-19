import React from "react";
import { SafeAreaView, Text, View, Button, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
//Stack Navigation:
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Tab Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LittleLemonHeader from "./components/LittleLemonHeader";
import WelcomeScreen from "./components/WelcomeScreen";
import SectionListMenu from "./components/SectionListMenu";
import FlatListMenu from "./components/FlatListMenu";
import stylesMenu from "./styles/stylesMenu";
import FeedbackForm from "./components/FeedbackForm";
import LoginScreen from "./components/LoginScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      source={require("./assets/images/chef.png")}
      style={{
        height: 40,
        width: 30,
        resizeMode: "contain",
        alignSelf: "center",
      }}
    />
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <NavigationContainer>
      {/* <SafeAreaView style={stylesMenu.container}></SafeAreaView> */}
      {/* <LittleLemonHeader /> */}
      {/* <Stack.Navigator
        initialRouteName="MainTabs"
        screenOptions={{
          headerStyle: { backgroundColor: "#FBDABB" },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: true,
            headerTitle: (props) => <LogoTitle {...props} />, }}
        />
      </Stack.Navigator> */}

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Login") {
              iconName = focused ? "ios-log-in" : "ios-log-in-outline";
            } else if (route.name === "Welcome") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "SectionList") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            } else if (route.name === "FlatList") {
              iconName = focused ? "ios-albums" : "ios-albums-outline";
            } else if (route.name === "Feedback") {
              iconName = focused
                ? "information-circle"
                : "information-circle-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login",
            // headerShown: true,
          }}
        />
        <Tab.Screen
          name="Welcome"
          component={WelcomeScreen}
          // options={{ headerShown: false }}
        />
        <Tab.Screen
          name="SectionList"
          component={SectionListMenu}
          // options={{ headerShown: false }}
        />
        <Tab.Screen
          name="FlatList"
          component={FlatListMenu}
          // options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Feedback"
          component={FeedbackForm}
          // options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
