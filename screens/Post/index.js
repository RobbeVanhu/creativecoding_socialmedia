import { View, Button, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  //Zorg ervoor dat de library geopend kan worden door de gebruiker
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <Button
        style={styles.button}
        title="Post an image from camera roll"
        onPress={pickImage}
      />
      {image && <Image source={{ uri: image }} />}
    </View>
  );
}
