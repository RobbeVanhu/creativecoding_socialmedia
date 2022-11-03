//import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "./styles";

import { useFonts } from "expo-font";
import { useEffect, useCallback } from "react";

import HomeScreen from "./screens/Home";
import SearchScreen from "./screens/Search";
import PostScreen from "./screens/Post";
import ProfileScreen from "./screens/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require("./assets/boat.png")}
                  style={{ width: 30, height: 30 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require("./assets/boat.png")}
                  style={{ width: 30, height: 30 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Post"
            component={PostScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require("./assets/boat.png")}
                  style={{ width: 30, height: 30 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require("./assets/boat.png")}
                  style={{ width: 30, height: 30 }}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
