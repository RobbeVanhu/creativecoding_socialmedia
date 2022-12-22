import { Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { getPerson } from "../../person";

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#252525"></StatusBar>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.profilePicture}
          source={require("../../assets/placeholder/profilepicture.png")}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{getPerson().users_username}</Text>
          <Text style={styles.location}>{getPerson().users_location}</Text>
        </View>
      </View>
    </View>
  );
}
