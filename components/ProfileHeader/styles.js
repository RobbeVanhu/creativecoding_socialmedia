import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    fontFamily: "Montserrat-Regular",
    maxHeight: 200,
  },
  nameContainer: {
    justifyContent: "flex-end",
    top: 0,
    left: 30,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    top: 30,
    left: 20,
    justifyContent: "flex-start",
  },
  name: {
    fontSize: 20,
    textAlign: "left",
    fontFamily: "Montserrat-Bold",
  },
  location: {
    color: "#949494",
    fontFamily: "Montserrat-Light",
  },
});
