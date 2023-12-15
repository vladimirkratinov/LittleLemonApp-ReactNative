import React from "react";
import { StyleSheet, View } from "react-native";
// Components:
import LittleLemonHeader from "./components/LittleLemonHeader";
import WelcomeScreen from "./components/WelcomeScreen";
import SectionListMenu from "./components/SectionListMenu";
import FLatListMenu from "./components/FlatListMenu";
import ScrollListMenu from "./components/ScrollListMenu";
// Tab Icons:
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// Navigation:
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// Tab Animation:
import { createStackNavigator } from "react-navigation-stack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Welcome') {
                iconName = 'home';
              } else if (route.name === 'Section List') {
                iconName = 'stream';
              } else if (route.name === 'Flat List') {
                iconName = 'tasks';
              } else if (route.name === 'Scroll List') {
                iconName = 'scroll';
              }

              // You can return any component that you like here!
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Section List" component={SectionListMenu} options={{ headerShown: false }}/>
          <Tab.Screen name="Flat List" component={FLatListMenu} options={{ headerShown: false }}/>
          <Tab.Screen name="Scroll List" component={ScrollListMenu} options={{ headerShown: false }}/>
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
