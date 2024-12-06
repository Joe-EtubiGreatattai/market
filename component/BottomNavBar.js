import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const BottomNavBar = ({ navigation, activeTab }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => navigation.navigate('Home')}
      >
        <Feather 
          name="home" 
          size={24} 
          color={activeTab === 'Home' ? '#FF6F00' : '#757575'} 
        />
        <Text style={[
          styles.tabText, 
          { color: activeTab === 'Home' ? '#FF6F00' : '#757575' }
        ]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => navigation.navigate('Profile')}
      >
        <Feather 
          name="user" 
          size={24} 
          color={activeTab === 'Profile' ? '#FF6F00' : '#757575'} 
        />
        <Text style={[
          styles.tabText, 
          { color: activeTab === 'Profile' ? '#FF6F00' : '#757575' }
        ]}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default BottomNavBar;
