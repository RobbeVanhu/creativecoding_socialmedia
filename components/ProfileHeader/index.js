import { Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ justifyContent: "flex-start" }}
          style={styles.profilePicture}
          source={require("../../assets/placeholder/profilepicture.png")}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>*Robbe Vanhuele*</Text>
          <Text style={styles.location}>*Brasschaat*</Text>
        </View>
      </View>
      <View style={styles.choiceContainer}>
        <Text style={styles.choiceHeader}>The choice of *Robbe*</Text>
        <ScrollView horizontal={true}>
          <Text>Lorem ipsum dolce male</Text>
          <Text>Lorem ipsum dolce male</Text>
          <Text>Lorem ipsum dolce male</Text>
          <Text>Lorem ipsum dolce male</Text>
        </ScrollView>
      </View>
    </View>
  );
}
