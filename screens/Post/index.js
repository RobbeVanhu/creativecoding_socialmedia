import { Text, View, Button, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Post an image from camera roll"
        onPress={pickImage}
      />
      {image && <Image source={{ uri: image }} />}
    </View>
  );
}
