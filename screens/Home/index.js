import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import React from "react";
import { getPerson } from "../../person";

/*export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <Text style={styles.text}>Home pagina!</Text>
    </View>
  );
}*/

const EditFamily = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <Text>Your user ID is: {getPerson().users_username}</Text>
    </View>
  );
};

export default EditFamily;
