import { Text, View, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { getPerson } from "../../person";
import { getImages } from "../../images";

export default function ProfileChoice() {
  const images = getImages();
  const imageUrls = [];

  // Alle urls maken voor images uit de database/map waarvan de rij image_favorite 1 is
  for (let i = 0; i < images.length; i++) {
    if (images[i].image_favorite === "1") {
      const url =
        "https://nervous-visvesvaraya.72-47-208-75.plesk.page/codingproject/assets/posts/" +
        images[i].image_url;
      imageUrls.push(url);
    }
  }

  //Er voor zorgen dat voor alle images via bovenstaande url een afbeelding wordt weergegeven
  function renderImages() {
    return imageUrls.map((imageUrl) => {
      return (
        <View key={imageUrl}>
          <Image style={styles.choiceImage} source={{ uri: imageUrl }} />
        </View>
      );
    });
  }

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
          {renderImages()}
        </ScrollView>
      </View>
    </View>
  );
}
