import React from "react";
import { styles } from "./styles";
import { Searchbar } from "react-native-paper";
import { getAllimages } from "../../allimages";

export default function SearchBarBar() {
  const allimages = getAllimages();
  console.log("halp");
  console.log(allimages);
  let allUsernames = [];
  let visitedUsernames = {};
  for (let i = 0; i < getAllimages().length; i++) {
    let username = getAllimages()[i]["users_username"];
    if (!visitedUsernames[username]) {
      allUsernames.push(username);
      visitedUsernames[username] = true;
    }
  }
  console.log(allUsernames);
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      style={styles.searchbar}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
}
