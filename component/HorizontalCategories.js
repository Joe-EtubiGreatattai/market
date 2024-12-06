import React from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const categories = ["All", "Shoes", "Bed", "Calculator", "Laptop", "Men & Women Cloth"];

const HorizontalCategories = ({ onCategoryChange }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.categoryButton} onPress={() => onCategoryChange(category)}>
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#fff",
  },
  categoryButton: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginHorizontal: 5,
    justifyContent: "center",
    height: 30,
  },
  categoryText: {
    fontSize: 13,
    color: "#333",
  },
});

export default HorizontalCategories;
