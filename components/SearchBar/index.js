import React, { useState } from "react";
import { styles } from "./styles";
import { Searchbar } from "react-native-paper";
import { getAllimages } from "../../allimages";
import { View, Text, FlatList } from "react-native";

export default function SearchBarBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsernames, setFilteredUsernames] = useState([]);

  const allimages = getAllimages();
  let allUsernames = [];
  let visitedUsernames = {};
  for (let i = 0; i < getAllimages().length; i++) {
    let username = getAllimages()[i]["users_username"];
    if (!visitedUsernames[username]) {
      allUsernames.push(username);
      visitedUsernames[username] = true;
    }
  }

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    const filtered = allUsernames.filter((username) =>
      username.includes(query)
    );
    setFilteredUsernames(filtered);
  };

  return (
    <View>
      <Searchbar
        style={styles.searchbar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <FlatList
        data={filteredUsernames}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />
    </View>
  );
}
