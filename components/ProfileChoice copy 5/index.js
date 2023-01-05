import { Text, View, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { getPerson } from "../../person";
import { getImages } from "../../images";

export default function ProfileChoice() {
  console.log("hallo");
  console.log(getImages());

  const images = getImages();
  const imageUrls = [];

  for (let i = 0; i < images.length; i++) {
    imageUrls.push(images[i].image_url);
  }

  let result = getImages();
  if (typeof result === "object") {
    console.log("testObject");
  }
  if (result.hasOwnProperty("image_url")) {
    console.log("testImages");
  }
  const testFoto =
    "http://192.168.1.19/codingproject/assets/placeholder/" + imageUrls;
  console.log(testFoto);
  const imageUrl =
    "http://192.168.1.19/codingproject/assets/placeholder/test.png";

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
            <Image style={styles.choiceImage} source={{ uri: imageUrl }} />
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
            <Text>url = {imageUrls}</Text>
            <Image style={styles.choiceImage} source={{ uri: testFoto }} />
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
