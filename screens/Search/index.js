import { Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

import SearchBarComp from "../../components/SearchBar";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <ScrollView>
        <SearchBarComp />
      </ScrollView>
    </View>
  );
}
