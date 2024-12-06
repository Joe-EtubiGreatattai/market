import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ onChangeText, value, onSearch }) => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={20} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search for anything on market"
        placeholderTextColor="#888"
        onChangeText={onChangeText}
        value={value}
        returnKeyType="search"
        onSubmitEditing={onSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    color: "#333",
  },
});

export default SearchBar;
