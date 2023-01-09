import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import { getPerson } from "../../person";

export default function ProfileHeader() {
  const imageUrl =
    "http://192.168.1.19/codingproject/assets/profileimages/" +
    getPerson().users_profile_image;
  return (
    <View style={styles.container}>
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
