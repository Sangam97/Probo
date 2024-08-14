import { useSharedValue } from "react-native-reanimated";
import { Slider } from "react-native-awesome-slider";
import { View } from "react-native";
import { IconRender } from "./IconRender";

export const SliderComponent = () => {
  const progress = useSharedValue(30);
  const min = useSharedValue(0);
  const max = useSharedValue(100);

  return (
    <View className="flex-row items-center space-x-2">
      <View className="p-1.5 rounded-lg bg-[#D0D5DD] items-center">
        <IconRender name="remove-outline" />
      </View>
      <Slider
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        theme={{
          disableMinTrackTintColor: "#fff",
          maximumTrackTintColor: "#fff",
          minimumTrackTintColor: "#000",
          cacheTrackTintColor: "#333",
          bubbleBackgroundColor: "#666",
          heartbeatColor: "#999",
        }}
      />
      <View className="p-1.5 rounded-lg bg-[#D0D5DD] items-center">
        <IconRender name="add-outline" />
      </View>
    </View>
  );
};
