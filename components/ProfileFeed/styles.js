import { StyleSheet } from "react-native";
import { COLORS } from "../../configStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    fontFamily: "Montserrat-Regular",
    paddingTop: 25,
    paddingBottom: 25,
  },
  feedContainer: {
    left: 20,
  },
  feedHeader: {
    color: COLORS.primarycolor,
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
  },
  containerSquare: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  square: {
    width: 170,
    height: 170,
    margin: 4,
  },
  image: {
    width: 170,
    height: 170,
  },
});
