import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import { getPerson } from "../../person";
import { getImages } from "../../images";

export default function ProfileFeed() {
  const images = getImages();
  const imageUrls = [];

  // Alle urls maken voor images uit de database/map waarvan de rij image_favorite 1 is
  for (let i = 0; i < images.length; i++) {
    const url =
      "https://nervous-visvesvaraya.72-47-208-75.plesk.page/codingproject/assets/posts/" +
      images[i].image_url;
    imageUrls.push(url);
  }

  //Er voor zorgen dat voor alle images via bovenstaande url een afbeelding wordt weergegeven
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
