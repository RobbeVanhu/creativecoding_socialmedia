import react from "react";
import { Text, View, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <Text>Home pagina!</Text>
    </View>
  );
}
