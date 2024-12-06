import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { getAuth, signOut } from "firebase/auth"; // Import Firebase Auth
import { useNavigation } from "@react-navigation/native";

const ProfileItem = ({ label, value }) => (
  <View style={styles.profileItem}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const UserProfile = () => {
  const auth = getAuth();
  const navigation = useNavigation();
  const handleLogoutPress = async () => {
    try {
      await signOut(auth);
      Alert.alert("Success", "You have been logged out.");
      navigation.navigate("Login"); // Navigate to the Login screen or any other screen
    } catch (error) {
      Alert.alert("Error", `Logout failed: ${error.message}`);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <ProfileItem
          label="Photo"
          value={
            <Image
              source={require("../assets/dp.png")}
              style={styles.profilePic}
            />
          }
        />
        <ProfileItem label="Name" value="Great Ibitoye" />
        <ProfileItem label="Level" value="200L" />
        <ProfileItem label="Email" value="ibitoye222@gmail.com" />
        <ProfileItem label="School" value="Federal university Lokoja" />
      </View>

      <View style={styles.profileSection}>
        <ProfileItem
          label="Photo"
          value={
            <Image
              source={require("../assets/dp.png")}
              style={styles.profilePic}
            />
          }
        />
        <ProfileItem label="Name" value="Great Ibitoye" />
        <ProfileItem label="Level" value="200L" />
        <ProfileItem label="School" value="Federal university Lokoja" />
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogoutPress}>
        <Feather name="upload-cloud" size={24} color="white" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  profileSection: {
    marginBottom: 24,
  },
  profileItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
  value: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  logoutButton: {
    backgroundColor: "#FF6F00",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
  },
  logoutText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
});

export default UserProfile;
