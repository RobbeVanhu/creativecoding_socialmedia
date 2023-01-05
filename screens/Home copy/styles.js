import { StyleSheet } from "react-native";
import { COLORS } from "../../configStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkmodeblack,
  },
  text: {
    fontFamily: "Montserrat-Bold",
  },
  choiceImage: {
    width: 200,
    height: 200,
    margin: 5,
  },
  margintop: {
    marginTop: 50,
  },
});
