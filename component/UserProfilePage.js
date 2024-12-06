import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Share,
  Dimensions,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const ActionItem = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.actionItem} onPress={onPress}>
    <Feather name={icon} size={20} color="#333" />
    <Text style={styles.actionTitle}>{title}</Text>
    <Feather name="chevron-right" size={20} color="#333" />
  </TouchableOpacity>
);

const ProductItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item)} style={styles.productItem}>
    <Image source={item.image} style={styles.productImage} />
    <Text style={styles.productName}>{item.name}</Text>
    <Text style={styles.productPrice}>{item.price}</Text>
  </TouchableOpacity>
);

const UserProfilePage = ({ navigation }) => {
  const [isBalanceVisible, setBalanceVisible] = useState(true);

  const toggleBalanceVisibility = () => {
    setBalanceVisible(!isBalanceVisible);
  };

  const products = [
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
    // ... more products
  ];

  const onAddMoney = () => {
    Alert.alert("Add Money", "You clicked the Add Money button!");
  };

  const onSendMoney = () => {
    Alert.alert("Send Money", "You clicked the Send Money button!");
  };

  const onInviteFriends = async () => {
    try {
      const result = await Share.share({
        message: "Check out Market!",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Shared with activity type of " + result.activityType);
        } else {
          console.log("Shared successfully");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Share dismissed");
      }
    } catch (error) {
      alert("Error sharing the message: " + error.message);
    }
  };

  const handleProductPress = (product) => {
    navigation.navigate("Product", { product });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require("../assets/dp.png")}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.userName}>Great Ibitoye</Text>
          <Text style={styles.userInfo}>Social studies Education</Text>
          <Text style={styles.userInfo}>200L</Text>
        </View>
      </View>

      <View style={styles.walletCard}>
        <View style={styles.walletBalance}>
          <Text style={styles.walletLabel}>Wallet balance</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceAmount}>
              {isBalanceVisible ? "N10,000" : "****"}
            </Text>
            <TouchableOpacity onPress={toggleBalanceVisibility}>
              <Feather
                name={isBalanceVisible ? "eye-off" : "eye"}
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.walletActions}>
          <TouchableOpacity style={styles.walletAction} onPress={onAddMoney}>
            <Feather name="plus" size={16} color="#FF6F00" />
            <Text style={styles.walletActionText}>Add money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.walletAction} onPress={onSendMoney}>
            <Feather name="send" size={16} color="#FF6F00" />
            <Text style={styles.walletActionText}>Send money</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ActionItem
        icon="users"
        title="Invite Friends"
        onPress={onInviteFriends}
      />
      <ActionItem
        icon="message-square"
        title="Feedback"
        onPress={() => navigation.navigate("Feedback")}
      />
      <ActionItem
        icon="grid"
        title="Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />

      <TouchableOpacity style={styles.sellButton}  onPress={() => navigation.navigate("Sell")}>
        <Feather name="package" size={20} color="white" />
        <Text style={styles.sellButtonText}>Sell an item</Text>
        <Feather name="chevron-right" size={20} color="white" />
      </TouchableOpacity>

      <View style={styles.productSection}>
        <View style={styles.productHeader}>
          <Text style={styles.productHeaderTitle}>My order</Text>
          <TouchableOpacity>
            <Text style={styles.productHeaderAction}>My Product</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductItem item={item} onPress={handleProductPress} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userInfo: {
    fontSize: 14,
    color: "#666",
  },
  walletCard: {
    backgroundColor: "#FF6F00",
    borderRadius: 8,
    margin: 16,
    padding: 16,
  },
  walletBalance: {
    marginBottom: 16,
  },
  walletLabel: {
    color: "white",
    fontSize: 14,
  },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceAmount: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  walletActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  walletAction: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  walletActionText: {
    color: "#FF6F00",
    marginLeft: 8,
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 16,
    marginBottom: 1,
  },
  actionTitle: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
  },
  sellButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
  sellButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    marginLeft: 16,
  },
  productSection: {
    margin: 16,
  },
  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  productHeaderTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productHeaderAction: {
    color: "#FF6F00",
  },
  productItem: {
    marginRight: 16,
  },
  productImage: {
    width: Dimensions.get("window").width / 2.3,
    height: 120,
    borderRadius: 8,
  },
  productName: {
    fontSize: 14,
    marginTop: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
  },
});

export default UserProfilePage;
