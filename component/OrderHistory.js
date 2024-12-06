import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');

const OrderHistoryItem = ({ image, name, price }) => (
  <View style={styles.orderItem}>
    <Image source={image} style={styles.orderImage} />
    <Text style={styles.orderName}>{name}</Text>
    <Text style={styles.orderPrice}>{price}</Text>
  </View>
);

const InventoryItem = ({ image, name, price }) => (
  <View style={styles.inventoryItem}>
    <Image source={image} style={styles.inventoryImage} />
    <Text style={styles.inventoryName}>{name}</Text>
    <Text style={styles.inventoryPrice}>{price}</Text>
  </View>
);

const OrderHistory = () => {
  const [inventory, setInventory] = useState([
    { id: '1', name: 'Brown Skin Birkenstock', price: 'N10,000', image: require('../assets/product.png') },
    { id: '2', name: 'Brown Skin Birkenstock', price: 'N10,000', image: require('../assets/product.png') },
  ]);

  const addCard = () => {
    const newCard = {
      id: (inventory.length + 1).toString(),
      name: 'New Product',
      price: 'N5,000',
      image: require('../assets/product.png'),
    };
    setInventory([...inventory, newCard]);
  };

  const orderHistory = [
    { id: '1', name: 'Brown Skin Birkenstock', price: 'N10,000', image: require('../assets/product.png') },
    { id: '2', name: 'Brown Skin Birkenstock', price: 'N10,000', image: require('../assets/product.png') },
    { id: '3', name: 'Brown Skin Birkenstock', price: 'N10,000', image: require('../assets/product.png') },
  ];

  return (
    <View style={styles.container}>
  
      {/* Graph Section */}
      <View style={styles.graphContainer}>
        <Text style={styles.graphTitle}>Sales Overview</Text>
        <LineChart
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [
              {
                data: [20, 45, 28, 80, 99],
              },
            ],
          }}
          width={width - 32} // Adjust width for padding
          height={220}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 87, 34, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={styles.graph}
        />
      </View>

      {/* First Card Section */}
      <View style={styles.cardSection}>
        <Text style={styles.cardSectionTitle}>Recent Orders</Text>
        <FlatList
          data={orderHistory}
          renderItem={({ item }) => <OrderHistoryItem {...item} />}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardList} // Ensure full width
        />
      </View>

      {/* View More Button */}
      <TouchableOpacity style={styles.viewMoreButton}>
        <Text style={styles.viewMoreText}>View more</Text>
        <Feather name="chevron-right" size={20} color="#fff" />
      </TouchableOpacity>

      {/* Inventory Section */}
      <View style={styles.inventorySection}>
        <Text style={styles.inventoryTitle}>Inventory</Text>
        <TouchableOpacity style={styles.addButton} onPress={addCard}>
          <View style={styles.addButtonInner}>
            <Text style={styles.addButtonText}>+</Text>
          </View>
        </TouchableOpacity>
        <FlatList
          data={inventory}
          renderItem={({ item }) => <InventoryItem {...item} />}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.inventoryList} // Ensure full width
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    width: '100%',
    paddingHorizontal: 16, // Ensure padding from edges
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  graphContainer: {
    marginBottom: 24,
    width: '100%',
  },
  graphTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  graph: {
    borderRadius: 16,
    width: '100%',
  },
  cardSection: {
    marginBottom: 24,
    width: '100%',
  },
  cardSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardItem: {
    width: 144,
    marginRight: 16,
  },
  orderItem: {
    width: 144,
    marginRight: 16,
  },
  orderImage: {
    width: '100%',
    height: 144,
    borderRadius: 8,
  },
  orderName: {
    fontSize: 14,
    marginTop: 8,
  },
  orderPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  inventorySection: {
    marginTop: 24,
    width: '100%',
  },
  inventoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  inventoryItem: {
    width: 144,
    marginRight: 16,
  },
  inventoryImage: {
    width: '100%',
    height: 144,
    borderRadius: 8,
  },
  inventoryName: {
    fontSize: 14,
    marginTop: 8,
  },
  inventoryPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  addButton: {
    position: 'absolute',
    top: -10,
    right: 0,
    backgroundColor: '#FF6F00',
    borderRadius: 24,
    padding: 8,
    zIndex: 1,
  },
  addButtonInner: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: 'FF6F00',
  },
  addButtonText: {
    fontSize: 14,
    color: '#FFF',
  },
  viewMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#585858',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  viewMoreText: {
    marginRight: 8,
    fontSize: 16,
    color:'#fff'
  },
  cardList: {
    width: '100%',
  },
  inventoryList: {
    width: '100%',
  },
});

export default OrderHistory;
