import { StyleSheet, Dimensions } from "react-native";
import {
  defaultHorizontalPadding,
  borderWidthSearchbar,
  borderRadius,
} from "../../configStyles";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 55,
    backgroundColor: "green",
  },
  searchbar: {
    width: windowWidth - defaultHorizontalPadding * 2,
    borderWidth: borderWidthSearchbar,
    borderRadius: borderRadius,
  },
  sectionlist: {
    height: 10,
    backgroundColor: "yellow",
  },
});
