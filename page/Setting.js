import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import MarketHeader from "../component/SettingsHeader";
import UserProfile from "../component/UserProfile";
export default function Setting() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <MarketHeader  title={"Setting"} />
      <ScrollView>
        <UserProfile />
      </ScrollView>
    </View>
  );
}
