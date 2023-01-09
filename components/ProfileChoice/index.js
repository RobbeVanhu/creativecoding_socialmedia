import { Text, View, Image, ScrollView, FlatList } from "react-native";
import { styles } from "./styles";
import { getPerson } from "../../person";
import { getImages } from "../../images";

export default function ProfileChoice() {
  const images = getImages();
  const imageUrls = [];
  console.log(images);

  for (let i = 0; i < images.length; i++) {
    if (images[i].image_favorite === "1") {
      const url =
        "http://192.168.1.19/codingproject/assets/posts/" + images[i].image_url;
      imageUrls.push(url);
    }
  }

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
