import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../configStyles";

const window = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: "Montserrat-Bold",
  },
  image: {
    width: window.width - 10,
    height: window.width - 10,
    margin: 5,
    marginBottom: 40,
  },
  margintop: {
    marginTop: 50,
  },
  left_text: {
    paddingLeft: 10,
    paddingTop: 10,
    width: window.width * 0.6,
    color: COLORS.primarycolor,
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 20,
  },
  right_text: {
    paddingRight: 15,
    paddingTop: 10,
    width: window.width * 0.25,
    color: COLORS.grey,
    textAlign: "right",
    lineHeight: 20,
  },
  profile_picture: {
    paddingLeft: 15,
    width: window.width * 0.15,
  },
  profile_image: {
    width: 40,
    height: 40,
    borderRadius: 100 / 2,
  },
});
