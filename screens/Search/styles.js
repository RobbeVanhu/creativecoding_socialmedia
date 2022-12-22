import { StyleSheet, Platform, StatusBar } from "react-native";
import { defaultTopPadding } from "../../configStyles";
import { COLORS } from "../../configStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkmodeblack,
    alignItems: "center",
    justifyContent: "center",
    paddingTop:
      defaultTopPadding +
      (Platform.OS === "android" ? StatusBar.currentHeight : 0),
  },
});
