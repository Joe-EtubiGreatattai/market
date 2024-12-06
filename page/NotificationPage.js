import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import NotificationItem from "./../component/NotificationItem"; // Adjust the import based on your folder structure

import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView
import { useNavigation } from "@react-navigation/native";

const notifications = [
  {
    id: "1",
    title: "New Message",
    message: "You have received a new message from John.",
    timestamp: "2024-09-08T10:30:00Z",
  },
  {
    id: "2",
    title: "Order Update",
    message: "Your order #1234 has been shipped.",
    timestamp: "2024-09-07T15:00:00Z",
  },
  {
    id: "3",
    title: "Reminder",
    message: "Don’t forget your meeting at 3 PM.",
    timestamp: "2024-09-07T09:00:00Z",
  },
  {
    id: "4",
    title: "App Update",
    message:
      "A new version of the app is available. Please update to the latest version for the best experience.",
    timestamp: "2024-09-06T18:00:00Z",
  },
  {
    id: "5",
    title: "New Friend Request",
    message: "You have a new friend request from Alice.",
    timestamp: "2024-09-06T14:45:00Z",
  },
  {
    id: "6",
    title: "Event Reminder",
    message:
      "Reminder: Your event “Weekly Team Meeting” is starting in 30 minutes.",
    timestamp: "2024-09-05T12:00:00Z",
  },
  {
    id: "7",
    title: "Password Change",
    message: "Your password has been successfully changed.",
    timestamp: "2024-09-05T09:00:00Z",
  },
  {
    id: "8",
    title: "New Comment",
    message: "Someone commented on your post: “Great job on the project!”",
    timestamp: "2024-09-04T16:30:00Z",
  },
  {
    id: "9",
    title: "Subscription Expiry",
    message:
      "Your subscription is about to expire in 3 days. Renew now to continue enjoying the service.",
    timestamp: "2024-09-03T11:00:00Z",
  },
  {
    id: "10",
    title: "System Alert",
    message:
      "We detected an unusual login attempt on your account. If this wasn’t you, please update your password immediately.",
    timestamp: "2024-09-02T08:00:00Z",
  },
];

const NotificationPage = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <NotificationItem
      title={item.title}
      message={item.message}
      timestamp={item.timestamp}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.header}>Notifications</Text>
      </View>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  backButton: {
    position: "absolute",
    left: 16,
    zIndex:999,
  },
});

export default NotificationPage;
