import { StyleSheet } from "react-native";
import { COLORS } from "../../configStyles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.darkmodeblack,
    flex: 1,
    width: "100%",
    fontFamily: "Montserrat-Regular",
    paddingTop: 25,
  },
  choiceContainer: {
    left: 20,
  },
  choiceHeader: {
    color: COLORS.yellow,
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
  },
  choiceImage: {
    width: 200,
    height: 200,
    margin: 5,
  },
});
