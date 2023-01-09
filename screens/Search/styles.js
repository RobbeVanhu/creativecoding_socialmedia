import { StyleSheet, Dimensions } from "react-native";
import {
  defaultHorizontalPadding,
  borderWidthSearchbar,
  borderRadius,
} from "../../configStyles";
import { COLORS } from "../../configStyles";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 55,
  },
  searchbar: {
    width: windowWidth - defaultHorizontalPadding * 2,
    borderWidth: borderWidthSearchbar,
    borderRadius: borderRadius,
  },
  sectionlist: {
    height: 100,
    marginBottom: 20,
  },
  sectionItem: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.primarycolor,
  },
});
