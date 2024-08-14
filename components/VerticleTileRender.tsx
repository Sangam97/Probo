import { Text, View } from "react-native";
import React, { Component } from "react";

export default function VerticleTileRender({
  title,
  icon,
}: {
  title: string;
  icon: any;
}) {
  return (
    <View className="p-4 bg-[#ffffff] rounded-lg space-y-2">
      <View className="mx-auto">{icon}</View>
      <Text className="font-bold text-xs">{title}</Text>
    </View>
  );
}
