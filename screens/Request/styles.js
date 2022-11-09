import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight + 30,
  },
  requestHeader: {
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
    marginBottom: 15,
    marginLeft: 10,
  },
});
