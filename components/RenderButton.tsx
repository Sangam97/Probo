import { Button, Pressable, Text, View } from "react-native";
import React from "react";

export default function RenderButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      className={`px-2.5 py-2 flex-1 ${
        title === "Yes ₹ 5.3" ? "bg-[#E0EAFF]" : "bg-[#FEE4E2]"
      } rounded`}
      onPress={onPress}
    >
      <Text
        className={`text-center text-lg font-bold ${
          title === "Yes ₹ 5.3" ? "text-[#434CE8]" : "text-[#D82D21]"
        }`}
      >
        {title}
      </Text>
    </Pressable>
  );
}
