import { Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { getPerson } from "../../person";

export default function ProfileFeed() {
  return (
    <View style={styles.container}>
      <View style={styles.feedContainer}>
        <Text style={styles.feedHeader}>{getPerson().users_username} feed</Text>
        <View style={styles.containerSquare}>
          <View style={styles.square}>
            <Image
              style={styles.image}
              source={require("../../assets/placeholder/choiceimage1.jpg")}
            />
          </View>
          <View style={styles.square}>
            <Image
              style={styles.image}
              source={require("../../assets/placeholder/choiceimage2.jpg")}
            />
          </View>
          <View style={styles.square}>
            <Image
              style={styles.image}
              source={require("../../assets/placeholder/choiceimage3.jpg")}
            />
          </View>
          <View style={styles.square}>
            <Image
              style={styles.image}
              source={require("../../assets/placeholder/choiceimage4.jpg")}
            />
          </View>
          <View style={styles.square}>
            <Image
              style={styles.image}
              source={require("../../assets/placeholder/choiceimage1.jpg")}
            />
          </View>
          <View style={styles.square}>
            <Image
              style={styles.image}
              source={require("../../assets/placeholder/choiceimage2.jpg")}
            />
          </View>
          <View style={styles.square}>
            <Image
              style={styles.image}
              source={require("../../assets/placeholder/choiceimage3.jpg")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
