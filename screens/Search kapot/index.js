import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  SectionList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { Searchbar } from "react-native-paper";
import { getAllimages } from "../../allimages";

import SearchBarComp from "../../components/SearchBar";
import MusicButton from "../../components/Interest/MusicButton";
import SportButton from "../../components/Interest/SportButton";

export default function Search({ navigation }) {
  const [searchFocused, setSearchFocused] = useState(false);
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
    setFilteredUsernames(
      visitedUsernames.filter((username) => username.includes(query))
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="auto"></StatusBar>
        {/*Searchbar kan niet in een component. Anders viel alles achter de SectionList*/}
        <Searchbar
          style={styles.searchbar}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />
        {searchFocused && (
          <SectionList
            style={styles.sectionlist}
            sections={[
              {
                data: filteredUsernames,
              },
            ]}
            renderItem={({ item }) => <Text>{item}</Text>}
            renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
            keyExtractor={(item) => item}
          />
        )}
        <ScrollView>
          <MusicButton />
          <SportButton />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
