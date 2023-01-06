import { View, ScrollView, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

import ProfileHeader from "../../components/ProfileHeader";
import ProfileChoice from "../../components/ProfileChoice";
import ProfileFeed from "../../components/ProfileFeed";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar></StatusBar>
        <View style={styles.margintop}></View>
        <ScrollView>
          <ProfileHeader />
          <ProfileChoice />
          <ProfileFeed />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
