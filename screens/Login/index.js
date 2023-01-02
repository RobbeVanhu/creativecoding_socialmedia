import React from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { setPerson } from "../../person";
import { Alert } from "react-native";
import { COLORS } from "../../configStyles";

import Register from "../../components/Register";

function showAlert() {
  Alert.alert(
    "Feature not available",
    "This feature is not yet accessible in our app. We apologize for the inconvenience.",
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 0,
    paddingTop: 100,
  },
  title: {
    fontSize: 45,
    marginBottom: 40,
    color: COLORS.black,
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginBottom: 10,
    borderBottomColor: "#F4F4F4",
    borderBottomWidth: 1,
    color: COLORS.primarycolor,
  },
  forgot: {
    textAlign: "right",
    color: COLORS.grey,
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLORS.primarycolor,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
  },
  button_text: {
    color: COLORS.white,
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
    textAlign: "center",
    fontSize: 15,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
    color: COLORS.primarycolor,
  },
  register: {
    marginTop: 50,
  },
  register_text: {
    textAlign: "center",
    color: COLORS.grey,
    marginTop: 50,
    fontSize: 12,
  },
});
