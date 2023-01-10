import { Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import React from "react";
import { getAllimages } from "../../allimages";

export default function HomeScreen() {
  const allimages = getAllimages();
  const imageUrls = [];

  for (let i = 0; i < allimages.length; i++) {
    const url =
      "https://www.nervous-visvesvaraya.72-47-208-75.plesk.page/codingproject/assets/posts/" +
      allimages[i].image_url;
    imageUrls.push(url);
  }

  // sorteer de array allimages op image_post_date
  allimages.sort((a, b) => {
    return new Date(b.image_post_date) - new Date(a.image_post_date);
  });

  function renderImages() {
    return imageUrls.map((imageUrl, index) => {
      return (
        <View key={imageUrl}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.profile_picture}>
              <Image
                style={styles.profile_image}
                source={{
                  uri:
                    "https://nervous-visvesvaraya.72-47-208-75.plesk.page/codingproject/assets/profileimages/" +
                    allimages[index].users_profile_image,
                }}
              />
            </View>
            <Text style={styles.left_text}>
              {allimages[index].users_username}
            </Text>
            <Text style={styles.right_text}>
              {allimages[index].image_post_date}
            </Text>
          </View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
      );
    });
  }
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.margintop}></View>
      <ScrollView
        style={styles.choiceScroll}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
      >
        {renderImages()}
      </ScrollView>
    </View>
  );
}
