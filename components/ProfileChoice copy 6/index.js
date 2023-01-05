import { Text, View, Image, ScrollView, FlatList } from "react-native";
import { styles } from "./styles";
import { getPerson } from "../../person";
import { getImages } from "../../images";
import React, { useState, useEffect } from "react";

export default function ProfileChoice() {
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
        <Image
          key={imageUrl}
          style={styles.choiceImage}
          source={{ uri: imageUrl }}
        />
      );
    });
  }

  //favorieten selecteren
  const [imagess, setImages] = useState([]);
  const [favoriteImages, setFavoriteImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const response = await getImages();
      setImages(response);
      setFavoriteImages(
        response.filter((image) => image.image_favorite === "1")
      );
    }
    fetchImages();
  }, []);

  console.log(renderImages());

  return (
    <View style={styles.container}>
      <View style={styles.choiceContainer}>
        <Text style={styles.choiceHeader}>
          The choice of {getPerson().users_username}
        </Text>
        <FlatList
          data={favoriteImages}
          renderItem={({ item }) => {
            return (
              <ScrollView
                style={styles.choiceScroll}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {renderImages(item.image_url)}
              </ScrollView>
            );
          }}
        />
        {renderImages()}
      </View>
    </View>
  );
}
