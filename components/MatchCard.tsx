import { Button, Image, Pressable, Text, View } from "react-native";
import RenderButton from "./RenderButton";
import { useContext } from "react";
import { AppContext } from "@/context";

export default function MatchCard({
  questionText,
  description,
  imageSrc,
  onPress,
}: {
  questionText: string;
  description: string;
  imageSrc: any;
  onPress: () => void;
}) {
  const { setModalVisible } = useContext(AppContext);
  return (
    <Pressable onPress={onPress}>
      <View className="p-2 bg-[#FFFFFF] rounded space-y-2">
        <View className="flex-row justify-between">
          <View className="flex-1 space-y-4">
            <Text className="font-semibold">{questionText}</Text>
            <Text className="text-xs">{description}</Text>
          </View>
          <View className="items-center">
            <Image
              source={imageSrc}
              style={{ width: 40, height: 40 }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View className="flex-row justify-between">
          <RenderButton
            title="Yes ₹ 5.3"
            onPress={() => setModalVisible(true)}
          />
          <View className="w-4" />
          <RenderButton
            title="No ₹ 4.7"
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>
    </Pressable>
  );
}
