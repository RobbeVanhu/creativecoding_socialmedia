import { StyleSheet } from "react-native";
import {
  interestsWidth,
  interestsHeight,
  interestsRadius,
} from "../../../configStyles";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: interestsRadius,
    backgroundColor: "lightgrey",
    width: interestsWidth,
    height: interestsHeight,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    color: "black",
  },
});
