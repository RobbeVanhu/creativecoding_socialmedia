import { Text, View, Image, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

import PositiveButton from "../PositiveButton";
import NegativeButton from "../NegativeButton";

export default function RequestComp() {
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
          <View style={styles.buttonRow}>
            <PositiveButton />
            <NegativeButton />
          </View>
        </View>
      </View>
    </View>
  );
}
