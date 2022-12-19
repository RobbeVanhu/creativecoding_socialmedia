import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import * as Expo from "expo";

//code door wim

export default class App extends React.Component {
  state = {
    username: "",
    password: "",
    response: "",
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
        this.props.setLoggedIn(true);
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
        <TextInput
          style={styles.input}
          value={this.state.users_username}
          onChangeText={this.handleusers_usernameChange}
          placeholder="users_username"
        />
        <TextInput
          style={styles.input}
          value={this.state.users_password}
          onChangeText={this.handleusers_passwordChange}
          placeholder="users_password"
          secureTextEntry
        />
        <Button title="Login" onPress={this.handleLoginPress} />
        <Text>{this.state.response}</Text>
      </View>
    );
  }
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
