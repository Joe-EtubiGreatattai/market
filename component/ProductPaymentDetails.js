import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ProductPaymentDetails = () => {
  const [quantity, setQuantity] = useState(1);


  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Feather name="shopping-bag" size={20} color="#333" />
          <Text style={styles.sectionTitle}>Product details</Text>
        </View>
        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Quantity</Text>
            <Text style={styles.detailValue}>1/2</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Location</Text>
            <Text style={styles.detailValue}>Lokoja</Text>
          </View>
          <View style={styles.detailItem}>
            <Image
              source={require('./../assets/dp.png')}
              style={styles.sellerAvatar}
            />
            <View>
              <Text style={styles.sellerName}>Great Ibitoye</Text>
              <Text style={styles.sellerPhone}>08027274112</Text>
            </View>
          </View>
        </View>
        <View style={styles.productInfo}>
          <Image
            source={require('./../assets/product.png')}
            style={styles.productImage}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productPrice}>N10,000</Text>
            <Text style={styles.productName}>Brown Skin Birkenstock</Text>
          </View>
        </View>
        <View style={styles.quantitySelector}>
          <Text style={styles.quantityLabel}>Product order quantity</Text>
          <View style={styles.quantityControls}>
            <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
              <Feather name="minus" size={24} color="#333" />
            </TouchableOpacity>
            <Text style={styles.quantityValue}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Feather name="plus" size={24} color="#333" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Feather name="credit-card" size={20} color="#333" />
          <Text style={styles.sectionTitle}>Payment method</Text>
        </View>
        <View style={styles.paymentOption}>
          <Text style={styles.paymentOptionText}>Wallet</Text>
          <Text style={styles.paymentAmount}>N10,000</Text>
        </View>
        <TouchableOpacity style={styles.paymentOption}>
          <Text style={styles.paymentOptionText}>Pay with card</Text>
          <Feather name="chevron-right" size={20} color="#333" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.payButton}>
        <Feather name="credit-card" size={20} color="white" />
        <Text style={styles.payButtonText}>Pay now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  detailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 12,
    color: '#888',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  sellerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 4,
  },
  sellerName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  sellerPhone: {
    fontSize: 12,
    color: '#888',
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  productDetails: {
    flex: 1,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 14,
    color: '#555',
  },
  quantitySelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 16,
  },
  quantityLabel: {
    fontSize: 14,
    color: '#555',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  paymentOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  paymentOptionText: {
    fontSize: 16,
  },
  paymentAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  payButton: {
    backgroundColor: '#FF6F00',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  payButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default ProductPaymentDetails;