import { Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <Text style={styles.text}>Home pagina!</Text>
    </View>
  );
}
