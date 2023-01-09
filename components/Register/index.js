import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";

import PasswordStrengthMeterBar from "react-native-password-strength-meter-bar";

export default function Register({ setShowComponent }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [profileimage, setProfileimage] = useState("");

  const handleSubmit = async () => {
    let response = await fetch(
      "http://192.168.1.19/codingproject/php/register.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          location,
          profileimage,
        }),
      }
    );
    let responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.registered) {
      console.log("Successfully register! Thank you for joining us");
      setShowComponent(false);
    } else if (responseJson.usernameExists) {
      alert("A user with this username already exists");
    } else if (responseJson.emptyField) {
      alert("Did you forget a field? Please check. We need all your data.");
    }
  };
  return (
    <View>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        placeholderTextColor="#a7a7a7"
        style={styles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
        placeholder="Username"
      />
      <TextInput
        placeholderTextColor="#a7a7a7"
        style={styles.input}
        value={email}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        placeholder="E-mail"
      />
      <TextInput
        placeholderTextColor="#a7a7a7"
        style={styles.input}
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
      />
      <PasswordStrengthMeterBar password={password} />
      <TextInput
        placeholderTextColor="#a7a7a7"
        style={styles.input}
        value={location}
        onChangeText={(text) => setLocation(text)}
        placeholder="Location"
      />
      <TextInput
        placeholderTextColor="#a7a7a7"
        style={styles.input}
        value={profileimage}
        onChangeText={(text) => setProfileimage(text)}
        placeholder="Profile image"
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.button_text}>Register</Text>
      </Pressable>
    </View>
  );
}
