import { Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.profilePicture}
          source={require("../../assets/placeholder/profilepicture.png")}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>*Robbe Vanhuele*</Text>
          <Text style={styles.location}>*Brasschaat*</Text>
        </View>
      </View>
    </View>
  );
}
