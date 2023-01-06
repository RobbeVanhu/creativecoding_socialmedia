import { Text, View, Button, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Knop = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <Text style={styles.test}>Ga naar andere pagina</Text>
    </TouchableOpacity>
  );
};

export default Knop;
