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

  function renderImages() {
    return imageUrls.map((imageUrl) => {
      return (
        <View style={styles.square} key={imageUrl}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
      );
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.feedContainer}>
        <Text style={styles.feedHeader}>{getPerson().users_username} feed</Text>
        <View style={styles.containerSquare}>{renderImages()}</View>
      </View>
    </View>
  );
}
