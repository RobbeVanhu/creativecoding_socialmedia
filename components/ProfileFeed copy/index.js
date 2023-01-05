import { Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { getPerson } from "../../person";
import { getImages } from "../../images";

export default function ProfileFeed() {
  const images = getImages();
  const imageUrls = [];

  for (let i = 0; i < images.length; i++) {
    const url =
      "http://192.168.1.19/codingproject/assets/placeholder/" +
      images[i].image_url;
    imageUrls.push(url);
  }

  //console.log(imageUrls);

  function renderImages() {
    return imageUrls.map((imageUrl) => {
      return (
        <View key={imageUrl}>
          <Image style={styles.choiceImage} source={{ uri: imageUrl }} />
        </View>
      );
    });
  }

  console.log(imageUrls);

  return (
    <View style={styles.container}>
      <View style={styles.feedContainer}>
        <Text style={styles.feedHeader}>{getPerson().users_username} feed</Text>
        <View style={styles.containerSquare}>
          <View style={styles.square}>
            <Text>Bla</Text>
            {renderImages()}
            <Text>Bla</Text>
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
