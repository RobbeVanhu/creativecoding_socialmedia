import { StyleSheet, Platform, StatusBar } from "react-native";
import { defaultTopPadding } from "../../configStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop:
      defaultTopPadding +
      (Platform.OS === "android" ? StatusBar.currentHeight : 0),
  },
});
