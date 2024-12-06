import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Platform, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView
import { auth } from "./../firebaseConfig";
import {  signOut } from 'firebase/auth'; // Import Firebase Auth



const MarketHeader = () => {
  const navigation = useNavigation();

  const handleSettingsPress = () => {
    navigation.navigate('Setting'); // Navigate to the Settings screen
  };

   const handleLogoutPress = async () => {
    try {
      await signOut(auth);
      Alert.alert('Success', 'You have been logged out.');
      navigation.navigate('Login'); // Navigate to the Login screen or any other screen
    } catch (error) {
      Alert.alert('Error', `Logout failed: ${error.message}`);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleSettingsPress} style={styles.iconButton}>
            <Feather name="settings" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogoutPress} style={styles.iconButton}>
            <Feather name="log-out" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 0, 
    backgroundColor: '#ffffff', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 80,
    height: 24,
    marginRight: 4,
    resizeMode: 'contain',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
});

export default MarketHeader;
