import { Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

import Request from "../../components/RequestComp";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <Text style={styles.requestHeader}>Friend request</Text>
      <ScrollView>
        <Request />
        <Request />
        <Request />
        <Request />
        <Request />
        <Request />
        <Request />
        <Request />
      </ScrollView>
    </View>
  );
}
