//import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "./styles";
import * as SplashScreen from "expo-splash-screen";

import { COLORS } from "./configStyles";

import Home from "./assets/icons/home.svg";
import Search from "./assets/icons/search.svg";
import Post from "./assets/icons/post.svg";
import Profile from "./assets/icons/profile.svg";

import { useFonts } from "expo-font";
import { useEffect, useCallback, useState } from "react";

import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/Home";
import SearchScreen from "./screens/Search";
import PostScreen from "./screens/Post";
import RequestScreen from "./screens/Request";
import ProfileScreen from "./screens/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
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
  console.log(isLoggedIn);
  if (isLoggedIn) {
    return (
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: "#FFE236",
              tabBarInactiveTintColor: "#ffffff",
              tabBarStyle: [
                {
                  display: "flex",
                  backgroundColor: "#252525",
                },
                null,
              ],
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Home width={size} height={size} fill={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Search"
              component={SearchScreen}
              options={{
                tabBarIcon: ({ focused, color, size }) => {
                  return (
                    <Search width={size} height={size} fill={color}></Search>
                  );
                },
              }}
            />
            <Tab.Screen
              name="Post"
              component={PostScreen}
              options={{
                tabBarIcon: ({ focused, color, size }) => {
                  return <Post width={size} height={size} fill={color}></Post>;
                },
              }}
            />
            <Tab.Screen
              name="Request"
              component={RequestScreen}
              options={{
                tabBarIcon: ({ focused, color, size }) => {
                  return <Post width={size} height={size} fill={color}></Post>;
                },
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({ focused, color, size }) => {
                  return (
                    <Profile width={size} height={size} fill={color}></Profile>
                  );
                },
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    );
  } else {
    return (
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <LoginScreen setLoggedIn={setLoggedIn} />
      </View>
    );
  }
}
