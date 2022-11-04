import { Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import ProfileHeader from "../../components/ProfileHeader";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <ProfileHeader />
    </View>
  );
}
