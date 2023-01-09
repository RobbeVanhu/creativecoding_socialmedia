import { Text, View, Image, ScrollView, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import React from "react";
import { getPerson } from "../../person";
import { getAllimages } from "../../allimages";

export default function HomeScreen() {
  //const window = Dimensions.get("window");

  const allimages = getAllimages();
  const imageUrls = [];

  for (let i = 0; i < allimages.length; i++) {
    const url =
      "http://192.168.1.19/codingproject/assets/posts/" +
      allimages[i].image_url;
    imageUrls.push(url);
  }

  function renderImages() {
    return imageUrls.map((imageUrl, index) => {
      return (
        <View key={imageUrl}>
          <View style={{ flexDirection: "row" }}>
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
