import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const ProductDetailPage = () => {
  const images = [
    require('../assets/product.png'),
    require('../assets/product.png'),
    require('../assets/product.png'),
  ];
  const navigation = useNavigation();

  const handlePayNowPress = () => {
    navigation.navigate('ConfirmOrder');
  };

  const handleContactPress = () => {
    const phoneNumber = '+1234567890'; // Replace with the seller's phone number
    const message = 'Hello, I am interested in your product!';
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Check if WhatsApp is installed
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        // Open WhatsApp
        Linking.openURL(url);
      } else {
        // If WhatsApp is not installed, open dialer
        const dialerUrl = `tel:${phoneNumber}`;
        Linking.openURL(dialerUrl);
      }
    }).catch(err => {
      console.error("Error opening WhatsApp or dialer", err);
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Feather name="arrow-left" size={24} color="black" onPress={() => navigation.goBack()} />
      </View>
      
      <Swiper
        style={styles.swiper}
        showsButtons={false}
        autoplay
        loop
      >
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.productImage} />
        ))}
      </Swiper>
      
      <View style={styles.detailsContainer}>
        <View style={styles.priceRow}>
          <Text style={styles.price}>N10,000</Text>
          <View style={styles.shareContainer}>
            <Feather name="share-2" size={20} color="#FF6F00" />
            <View style={styles.likesContainer}>
              <Feather name="heart" size={16} color="#FF6F00" />
              <Text style={styles.likesCount}>14</Text>
            </View>
          </View>
        </View>
        
        <Text style={styles.productName}>Brown Skin Birkenstock</Text>
        
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Quantity</Text>
            <Text style={styles.infoValue}>1/2</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Location</Text>
            <Text style={styles.infoValue}>Lokoja</Text>
          </View>
          <View style={styles.infoItem}>
            <Image
              source={require('./../assets/dp.png')}
              style={styles.sellerAvatar}
            />
            <View>
              <Text style={styles.sellerName}>Great Ibitoye</Text>
              <Text style={styles.sellerLabel}>Seller</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.deliveryInfo}>
          <Text style={styles.deliveryLabel}>Expected delivery date</Text>
          <Text style={styles.deliveryDate}>Today, Tuesday 3 July 2023</Text>
        </View>
        
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.payButton} onPress={handlePayNowPress}>
            <Feather name="credit-card" size={20} color="white" />
            <Text style={styles.payButtonText}>Pay now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactButton} onPress={handleContactPress}>
            <Feather name="phone" size={20} color="#FF6F00" />
            <Text style={styles.contactButtonText}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 16,
  },
  swiper: {
    height: 300,
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 16,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  shareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    backgroundColor: '#FFF0E6',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  likesCount: {
    marginLeft: 4,
    color: '#FF6F00',
  },
  productName: {
    fontSize: 18,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 12,
    color: '#888',
  },
  infoValue: {
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
  sellerLabel: {
    fontSize: 12,
    color: '#888',
  },
  deliveryInfo: {
    marginBottom: 16,
  },
  deliveryLabel: {
    fontSize: 12,
    color: '#888',
  },
  deliveryDate: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  payButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF6F00',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    justifyContent: 'center',
  },
  payButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#FF6F00',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flex: 1,
    marginLeft: 8,
    justifyContent: 'center',
  },
  contactButtonText: {
    color: '#FF6F00',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default ProductDetailPage;
