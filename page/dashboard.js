import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import MarketHeader from "../component/SettingsHeader";
import BottomNavBar from "../component/BottomNavBar";
import ProductGrid from "../component/OrderHistory";
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView
export default function Dashboard({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <MarketHeader title={"Dashboard"} />
      <ScrollView>
        <ProductGrid />
      </ScrollView>
      <BottomNavBar navigation={navigation} activeTab="Profile" />
    </View>
  );
}
