import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import LittleLemonHeader from "./components/LittleLemonHeader";
import WelcomeScreen from "./components/WelcomeScreen";
import SectionListMenu from "./components/SectionListMenu";
import FlatListMenu from "./components/FlatListMenu";
import ScrollListMenu from "./components/ScrollListMenu";
import menuStyles from "./menuStyles";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={menuStyles.container}>
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
              } else if (route.name === "ScrollList") {
                iconName = focused ? "ios-menu" : "ios-menu-outline";
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
            name="ScrollList"
            component={ScrollListMenu}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
