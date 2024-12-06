import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import MarketHeader from "../component/MarketHeader";
import BottomNavBar from "../component/BottomNavBar";
import ProductDetail from "../component/ProductDetailPage";
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView
export default function ProductDetailPage({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <MarketHeader />

      <ScrollView>
        <ProductDetail />
      </ScrollView>
      <BottomNavBar navigation={navigation} activeTab="Home" />
    </View>
  );
}
