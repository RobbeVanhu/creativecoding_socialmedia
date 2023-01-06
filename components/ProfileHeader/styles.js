import { StyleSheet } from "react-native";
import { Colors } from "react-native-paper";
import { COLORS } from "../../configStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Montserrat-Regular",
  },

  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    left: 30,
    justifyContent: "flex-start",
    paddingBottom: 90,
  },
  nameContainer: {
    justifyContent: "flex-end",
    left: 50,
    justifyContent: "center",
    top: 10,
  },
  name: {
    fontSize: 20,
    textAlign: "left",
    fontFamily: "Montserrat-Bold",
    color: COLORS.primarycolor,
  },
  location: {
    color: COLORS.grey,
    fontFamily: "Montserrat-Light",
  },
});
