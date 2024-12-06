import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView

const SettingsHeader = ({ onBackPress, title }) => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.header}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Feather name="arrow-left" size={24} color="white"  onPress={() => navigation.goBack()} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  safeArea: {
    flex: 0, 
    backgroundColor: '#ffffff', 
    // Ensures the safe area color matches the header background
  },
});

export default SettingsHeader;