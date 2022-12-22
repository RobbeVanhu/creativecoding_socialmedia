import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../../configStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkmodeblack,
    paddingTop: StatusBar.currentHeight + 30,
  },
  requestHeader: {
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
    marginBottom: 15,
    marginLeft: 10,
  },
});
