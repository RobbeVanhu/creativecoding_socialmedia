import { Text, View, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { getPerson } from "../../person";
import { getImages } from "../../images";

export default function ProfileChoice() {
  const images = getImages();
  let mijnFoto =
    "http://192.168.1.19/codingproject/assets/placeholder/" + images.image_url;
  const imageUrl =
    "http://192.168.1.19/codingproject/assets/placeholder/" +
    getPerson().images.image_url;
  //const imageUrl ="http://192.168.1.19/codingproject/assets/placeholder/test.jpg";

  if (getPerson().images.image_favorite == "1") {
    return (
      <View style={styles.container}>
        <View style={styles.choiceContainer}>
          <Text style={styles.choiceHeader}>
            The choice of {getPerson().users_username}
          </Text>
          <ScrollView
            style={styles.choiceScroll}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <Text>WEL favo</Text>
            <Image style={styles.choiceImage} source={{ uri: mijnFoto }} />
            <Image style={styles.choiceImage} source={{ uri: imageUrl }} />
            <Image style={styles.choiceImage} source={{ uri: imageUrl }} />
            <Image style={styles.choiceImage} source={{ uri: imageUrl }} />
            <Image style={styles.choiceImage} source={{ uri: imageUrl }} />
          </ScrollView>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.choiceContainer}>
          <Text style={styles.choiceHeader}>
            The choice of {getPerson().users_username}
          </Text>
          <ScrollView
            style={styles.choiceScroll}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <Text>NIET favo</Text>
            <Text>url = {getImages().image_url}</Text>
            <Text>url2 = {getImages().images}</Text>
            <Image style={styles.choiceImage} source={{ uri: mijnFoto }} />
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
}
