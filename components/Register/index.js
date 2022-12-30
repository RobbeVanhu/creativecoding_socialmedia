import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      response: "",
      users_ID: "",
      fullname: "",
    };
    this.handleusers_usernameChange =
      this.handleusers_usernameChange.bind(this);
    this.handleusers_passwordChange =
      this.handleusers_passwordChange.bind(this);
    this.handleusers_fullnameChange =
      this.handleusers_fullnameChange.bind(this);
  }

  handleusers_usernameChange(users_username) {
    this.setState({ users_username });
  }

  handleusers_passwordChange(users_password) {
    this.setState({ users_password });
  }
  handleusers_fullnameChange(users_fullname) {
    this.setState({ users_fullname });
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          value={this.state.users_username}
          onChangeText={this.handleusers_usernameChange}
          placeholder="username"
        />
        <TextInput
          style={styles.input}
          value={this.state.users_fullname}
          onChangeText={this.handleusers_fullnameChange}
          placeholder="full name"
        />
        <TextInput
          style={styles.input}
          value={this.state.users_password}
          onChangeText={this.handleusers_passwordChange}
          placeholder="password"
        />
        <Button title="Register" /*onPress={this.handleLoginPress}*/ />
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
