import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import MarketHeader from "../component/MarketHeaderTwo";
import BottomNavBar from "../component/BottomNavBar";
import UserProfilePage from "../component/UserProfilePage";
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <MarketHeader />
      <ScrollView>
        <UserProfilePage navigation={navigation} />
      </ScrollView>
      <BottomNavBar navigation={navigation} activeTab="Profile" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
