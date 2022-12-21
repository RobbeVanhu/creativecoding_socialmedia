import { Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { getPerson } from "../../person";

export default function ProfileChoice() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <View style={styles.choiceContainer}>
        <Text style={styles.choiceHeader}>
          The choice of {getPerson().users_username}
        </Text>
        <ScrollView
          style={styles.choiceScroll}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Image
            style={styles.choiceImage}
            source={require("../../assets/placeholder/choiceimage1.jpg")}
          />
          <Image
            style={styles.choiceImage}
            source={require("../../assets/placeholder/choiceimage2.jpg")}
          />
          <Image
            style={styles.choiceImage}
            source={require("../../assets/placeholder/choiceimage3.jpg")}
          />
          <Image
            style={styles.choiceImage}
            source={require("../../assets/placeholder/choiceimage4.jpg")}
          />
        </ScrollView>
      </View>
    </View>
  );
}
