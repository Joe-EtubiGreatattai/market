import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import MarketHeader from "../component/MarketHeader";
import BottomNavBar from "../component/BottomNavBar";
import SearchBar from "../component/SearchBar";
import HorizontalCategories from "../component/HorizontalCategories";
import ProductGrid from "../component/ProductGrid";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <SafeAreaView style={styles.container}>
      <MarketHeader />
      <SearchBar
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <HorizontalCategories onCategoryChange={handleCategoryChange} />
      <ProductGrid
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}  // Pass the search query to ProductGrid
        navigation={navigation}
      />
      <BottomNavBar navigation={navigation} activeTab="Home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
