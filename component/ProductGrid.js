import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");
const numColumns = 2;
const itemWidth = width / numColumns;

const allProductData = [
  {
    id: "1",
    name: "Brown Skin Birkenstock",
    price: "N10,000",
    image: require("./../assets/product.png"),
    category: "Shoes",
  },
  {
    id: "2",
    name: "Fancy Bed",
    price: "N30,000",
    image: require("./../assets/bed.jpeg"),
    category: "Bed",
  },
  {
    id: "3",
    name: "Scientific Calculator",
    price: "N5,000",
    image: require("./../assets/calc.jpeg"),
    category: "Calculator",
  },
  {
    id: "4",
    name: "Gaming Laptop",
    price: "N70,000",
    image: require("./../assets/laptop.jpeg"),
    category: "Laptop",
  },
  {
    id: "5",
    name: "Men's T-shirt",
    price: "N1,500",
    image: require("./../assets/shirt.jpeg"),
    category: "Men & Women Cloth",
  },
  {
    id: "6",
    name: "Women's Dress",
    price: "N2,500",
    image: require("./../assets/dress.jpeg"),
    category: "Men & Women Cloth",
  },
  {
    id: "7",
    name: "Fancy Bed",
    price: "N30,000",
    image: require("./../assets/bed.jpeg"),
    category: "Bed",
  },
  {
    id: "8",
    name: "Scientific Calculator",
    price: "N5,000",
    image: require("./../assets/calc.jpeg"),
    category: "Calculator",
  },
  {
    id: "9",
    name: "Gaming Laptop",
    price: "N70,000",
    image: require("./../assets/laptop.jpeg"),
    category: "Laptop",
  },
  {
    id: "10",
    name: "Women's Dress",
    price: "N2,500",
    image: require("./../assets/dress.jpeg"),
    category: "Men & Women Cloth",
  },
];

const ProductItem = ({ item, navigation }) => {
  const handlePress = () => {
    navigation.navigate("Product", { productId: item.id });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );
};

const ProductGrid = ({ selectedCategory, searchQuery, navigation }) => {
  // Filter product data by category and search query
  const filteredProductData = allProductData.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearchQuery = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
  });

  return (
    <FlatList
      data={filteredProductData}
      renderItem={({ item }) => (
        <ProductItem item={item} navigation={navigation} />
      )}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      contentContainerStyle={styles.grid}
    />
  );
};

const styles = StyleSheet.create({
  grid: { minHeight: height / 1.5 },
  itemContainer: {
    width: itemWidth - 10,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  name: {
    fontSize: 14,
    marginTop: 5,
    marginHorizontal: 10,
    color: "#333",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 10,
    marginHorizontal: 10,
    color: "#333",
  },
});

export default ProductGrid;
