import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  Button,
} from "react-native";
import { setPerson } from "../../person";
import { Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../configStyles";

import Register from "../../components/Register";

function showAlert() {
  Alert.alert(
    "Functie niet beschikbaar",
    "Deze functie is nog niet toegankelijk in onze app. Onze excuses voor het ongemak.",
    [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    { cancelable: false }
  );
}

//code door wim

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
        //"http://172.16.140.175/codingproject/php/iets.php",
        "http://192.168.1.19/codingproject/php/iets.php",
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
        this.props.setLoggedIn(true, responseJson.users_username);
      } else {
        this.setState({ response: "tekst kwam niet overeen" });
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
            <Text>
              <Register setShowComponent={this.setShowComponent} />
            </Text>
            <Pressable onPress={this.handlePress}>
              <Text>Login</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.form}>
              <TextInput
                placeholderTextColor="white"
                style={styles.input}
                value={this.state.users_username}
                onChangeText={this.handleusers_usernameChange}
                placeholder="Gebruikersnaam"
              />
              <TextInput
                placeholderTextColor="white"
                style={styles.input}
                value={this.state.users_password}
                onChangeText={this.handleusers_passwordChange}
                placeholder="Wachtwoord"
                secureTextEntry
              />
              <Text style={styles.forgot} onPress={showAlert}>
                Forgot password?
              </Text>
              <Pressable style={styles.button} onPress={this.handleLoginPress}>
                <Text style={styles.button_text}>Login</Text>
              </Pressable>
              <Text style={styles.register_text}>Have not acount yet?</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 0,
    paddingTop: 100,
    backgroundColor: COLORS.darkmodeblack,

    //justifyContent: "center",
  },
  title: {
    fontSize: 45,
    marginBottom: 40,
    color: COLORS.white,
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginBottom: 10,
    borderBottomColor: "#F4F4F4",
    borderBottomWidth: 1,
    placeholderTextColor: "white",
    color: COLORS.yellow,
  },
  forgot: {
    textAlign: "right",
    color: COLORS.grey,
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLORS.yellow,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
  },
  button_text: {
    color: "black",
    textAlign: "center",
    fontSize: 15,
    textTransform: "uppercase",
  },
  button_register: {
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
  },
  button_text_register: {
    color: "black",
    textAlign: "center",
    fontSize: 15,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
    color: COLORS.yellow,
  },
  register: {
    marginTop: 50,
  },
  register_text: {
    textAlign: "center",
    color: "white",
    marginTop: 50,
    fontSize: 12,
  },
});
