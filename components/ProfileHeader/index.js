import {
  Text,
  View,
  Image,
  ScrollView,
  resolveAssetSource,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { getPerson } from "../../person";

export default function ProfileHeader() {
  const imageUrl =
    "http://192.168.1.19/codingproject/assets/placeholder/" +
    getPerson().users_profile_image;
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#252525"></StatusBar>
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.profilePicture} source={{ uri: imageUrl }} />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{getPerson().users_username}</Text>
          <Text style={styles.location}>{getPerson().users_location}</Text>
        </View>
      </View>
    </View>
  );
}
