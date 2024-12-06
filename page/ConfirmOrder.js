import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import MarketHeader from "../component/MarketHeader";
import BottomNavBar from "../component/BottomNavBar";
import ProductDetailPage from "../component/ProductPaymentDetails";
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView
export default function ConfirmOrder() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <MarketHeader />
      <ScrollView>
        <ProductDetailPage />
      </ScrollView>
      <BottomNavBar activeTab="Home" />
    </View>
  );
}
