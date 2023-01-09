import { StyleSheet } from "react-native";
import { COLORS } from "../../configStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    minWidth: "100%",
    fontFamily: "Montserrat-Regular",
    minHeight: 150,
    marginTop: 5,
    marginBottom: 5,
    borderBottomColor: COLORS.primarycolor,
    borderBottomWidth: 2,
  },
  nameContainer: {
    justifyContent: "flex-end",
    top: 0,
    left: 25,
    padding: 0,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    justifyContent: "flex-start",
    marginTop: 20,
    left: 10,
  },
  name: {
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
    marginTop: 25,
    color: COLORS.primarycolor,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  buttonRow: {
    flex: 1,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
  },
});
