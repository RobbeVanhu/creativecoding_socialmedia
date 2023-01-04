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
      <StatusBar backgroundColor="#252525" barStyle="dark-content"></StatusBar>
      <Text>Your username is: {getPerson().users_username}</Text>
      <Text>Your users_image is: {getPerson().users_image}</Text>
    </View>
  );
};
export default EditFamily;
