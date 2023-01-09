import { StyleSheet } from "react-native";
import { COLORS } from "../../configStyles";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 4,
    backgroundColor: "lightgrey",
    width: 120,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    color: "black",
  },
});
