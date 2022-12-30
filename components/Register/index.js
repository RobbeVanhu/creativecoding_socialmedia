import { View, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

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
      console.log("User is registered");
      setShowComponent(false);
    } else {
      alert("user with this username already exists");
    }
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="email"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="password"
      />
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={(text) => setLocation(text)}
        placeholder="location"
      />
      <TextInput
        style={styles.input}
        value={profileimage}
        onChangeText={(text) => setProfileimage(text)}
        placeholder="profileimage"
      />
      <Button title="Register" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});
