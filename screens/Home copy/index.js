import { Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import React from "react";
import { getPerson } from "../../person";
import { getAllimages } from "../../allimages";

export default function HomeScreen() {
  const allimages = getAllimages();
  const imageUrls = [];

  for (let i = 0; i < allimages.length; i++) {
    const url =
      "http://192.168.1.19/codingproject/assets/placeholder/" +
      allimages[i].image_url;
    imageUrls.push(url);
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
      <StatusBar backgroundColor="#252525" barStyle="dark-content"></StatusBar>
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
