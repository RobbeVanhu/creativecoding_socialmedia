import React from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import { setPerson } from "../../person";
import { setImages } from "../../images";
import { setAllimages } from "../../allimages";
import { Alert } from "react-native";
import { styles } from "./styles";

import Register from "../../components/Register";

function showAlert() {
  Alert.alert(
    "Feature not available",
    "This feature is not yet accessible in our app. We apologize for the inconvenience.",
    [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    { cancelable: false }
  );
}

export default class App extends React.Component {
  state = {
    username: "",
    password: "",
    response: "",
    users_username: "",
    showComponent: false,
  };

  handlePress = () => {
    this.setState((state) => ({ showComponent: !state.showComponent }));
  };
  setShowComponent = (showComponent) => {
    this.setState({ showComponent });
  };

  handleusers_usernameChange = (users_username) => {
    this.setState({ users_username });
  };

  handleusers_passwordChange = (users_password) => {
    this.setState({ users_password });
  };

  handleLoginPress = async () => {
    const { users_username, users_password } = this.state;

    try {
      let response = await fetch(
        "https://www.nervous-visvesvaraya.72-47-208-75.plesk.page/codingproject/php/iets.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            users_username,
            users_password,
          }),
        }
      );

      let responseJson = await response.json();
      console.log(responseJson);
      if (responseJson.loggedin) {
        setPerson(responseJson);
        setImages(responseJson.images);
        setAllimages(responseJson.allimages);
        this.props.setLoggedIn(true, responseJson.users_username);
      } else {
        this.setState({ response: "Username or password is incorrect" });
      }
      //this.setState({ response: responseJson.message });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.showComponent ? (
          <View>
            <Register setShowComponent={this.setShowComponent} />
            <Text style={styles.register_text}>Already an account?</Text>
            <Pressable
              style={styles.button_register}
              onPress={this.handlePress}
            >
              <Text style={styles.button_text_register}>Login</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.form}>
              <TextInput
                placeholderTextColor="#a7a7a7"
                style={styles.input}
                value={this.state.users_username}
                onChangeText={this.handleusers_usernameChange}
                placeholder="Username"
              />
              <TextInput
                placeholderTextColor="#a7a7a7"
                style={styles.input}
                value={this.state.users_password}
                onChangeText={this.handleusers_passwordChange}
                placeholder="Password"
                secureTextEntry
              />
              <Text style={styles.forgot} onPress={showAlert}>
                Forgot password?
              </Text>
              <Pressable style={styles.button} onPress={this.handleLoginPress}>
                <Text style={styles.button_text}>Login</Text>
              </Pressable>
              <Text style={styles.register_text}>
                Don't have an account yet?
              </Text>
              <Pressable
                style={styles.button_register}
                onPress={this.handlePress}
              >
                <Text style={styles.button_text_register}>Sign Up</Text>
              </Pressable>
              <Text>{this.state.response}</Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}
