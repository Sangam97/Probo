import { Text, View } from "react-native";
import React from "react";

export default function HorizontalTileRender({
  title,
  icon,
}: {
  title: string;
  icon: any;
}) {
  return (
    <View className="p-4 bg-[#ffffff] rounded-lg flex-row items-center space-x-2">
      <View className="">{icon}</View>
      <Text className="font-semibold text-xs">{title}</Text>
    </View>
  );
}
