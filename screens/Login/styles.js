import { StyleSheet } from "react-native";
import { COLORS } from "../../configStyles";

export const styles = StyleSheet.create({
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
