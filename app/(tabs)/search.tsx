import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function SearchPage() {
  return (
    <View style={styles.container}>
      <Text className="text-green-500">search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
