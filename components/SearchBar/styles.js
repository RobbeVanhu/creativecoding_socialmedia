import { StyleSheet, Dimensions } from "react-native";
import {
  defaultHorizontalPadding,
  borderWidthSearchbar,
  borderRadius,
} from "../../configStyles";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  searchbar: {
    width: windowWidth - defaultHorizontalPadding * 2,
    borderWidth: borderWidthSearchbar,
    borderRadius: borderRadius,
  },
});
