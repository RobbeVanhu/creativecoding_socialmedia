import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

import SearchBarComp from "../../components/SearchBar";
import MusicButton from "../../components/Interest/MusicButton";
import SportButton from "../../components/Interest/SportButton";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="auto"></StatusBar>
        <ScrollView>
          <SearchBarComp />
          <MusicButton />
          <SportButton />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
