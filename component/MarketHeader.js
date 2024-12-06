import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const MarketHeader = () => {
  // Example state to track notifications
  const [notifications, setNotifications] = useState([
    "New message from John",
    "Your order has been shipped",
  ]);

  const handleBellPress = () => {
    if (notifications.length > 0) {
      Alert.alert(
        "Notifications",
        notifications[0], // Show the first notification
        [
          {
            text: "See More",
            onPress: () => navigation.navigate("Notification") // Navigate to the notification page
          },
          {
            text: "Close",
            style: "cancel"
          }
        ]
      );
    } else {
      Alert.alert("No Notifications", "You have no new notifications.");
    }
  };
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.logoImage}
          />
        </View>
        <TouchableOpacity onPress={handleBellPress}>
          <View style={styles.notificationContainer}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            {notifications.length > 0 && (
              <View style={styles.notificationBadge}>
                <Text style={styles.badgeText}>{notifications.length}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "white",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoImage: {
    width: 80,
    height: 24,
    marginRight: 4,
    resizeMode: "contain",
  },
  safeArea: {
    flex: 0,
    backgroundColor: '#ffffff',
  },
  notificationContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default MarketHeader;
