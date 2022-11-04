import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    fontFamily: "Montserrat-Regular",
  },
  nameContainer: {
    ustifyContent: "flex-end",
    top: 60,
    left: 30,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    top: 50,
    left: 20,
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
  choiceContainer: {
    top: 80,
    left: 20,
  },
  choiceHeader: {
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
  },
});
