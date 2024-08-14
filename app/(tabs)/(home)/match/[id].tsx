import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Modal,
  ImageSourcePropType,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useLocalSearchParams, useRouter } from "expo-router";
import { IconRender } from "@/components/IconRender";
import { ScrollView } from "react-native";
import OrderBook from "@/components/OrderBook";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { ModalView } from "@/components/Modal";
import { AppContext } from "@/context";
import ChartComponent from "@/components/ChartComponent";

// ...

export default function MatchDetails() {
  const match = useLocalSearchParams();
  const tabBarHeight = useBottomTabBarHeight();
  const dimensions = useSafeAreaFrame();
  const screenHeight = dimensions.height - tabBarHeight;

  const route = useRouter();
  const [loaded, error] = useFonts({
    "Marquee Moon": require("../../../../assets/fonts/Marquee_Moon_font/Marquee Moon.otf"),
  });
  const [chartTimeframe, setChartTimeframe] = useState<
    "1h" | "3h" | "12h" | "all"
  >("1h");
  const [chartTimeframeSelected, setChartTimeframeSelected] =
    useState<string>("all");
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  const { setModalVisible } = useContext(AppContext);
  return (
    <ScrollView
      className="space-y-4 px-2.5"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        minHeight: screenHeight,
        paddingBottom: tabBarHeight + 20,
      }}
    >
      <ModalView />
      <View className="flex-row justify-between  items-center">
        <Pressable className=" px-2" onPress={() => route.back()}>
          <IconRender name="arrow-back-outline" />
        </Pressable>
        <IconRender name="share-social-outline" />
      </View>

      <View className="px-4 space-y-6">
        <View className="bg-[#ffffff] rounded-lg flex-col space-y-2 p-2 pb-3">
          <View className="pt-2 mx-auto">
            <Image
              source={match.imageSrc as ImageSourcePropType | undefined}
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
            />
          </View>
          <Text className="text-center font-medium">{match.questionText}</Text>
          <View className="flex-row space-x-1 justify-center">
            <View className="p-1 border rounded-full border-[#d9dbdf]">
              <View className="rounded-full bg-[#EAECF0] border border-[#d9dbdf]">
                <Text className="px-1 text-xs">IPL</Text>
              </View>
            </View>

            <View className="p-1 border rounded-full border-[#d9dbdf]">
              <View className="rounded-full bg-[#EAECF0] border border-[#d9dbdf]">
                <Text className="px-1 text-xs">T20</Text>
              </View>
            </View>
            <View className="p-1 border rounded-full border-[#d9dbdf]">
              <View className="rounded-full bg-[#EAECF0] border border-[#d9dbdf]">
                <Text className="px-1 text-xs">Cricket</Text>
              </View>
            </View>
          </View>

          <View className="bg-[#ECFEF3] flex-row rounded-full px-2 py-1 space-x-1 justify-center">
            <View className="bg-[#ffffff] rounded-full px-1.5 border border-[#BCF8D5]">
              <Text className="text-xs text-[#047A49]">H2H</Text>
            </View>

            <View>
              <Text className="text-xs text-[#047A49]">
                Last 5 T20: Kolkata 4, Mumbai 1, DRAW 0
              </Text>
            </View>
          </View>
        </View>

        <View className="bg-[#ffffff] p-2.5 rounded-lg space-y-1">
          <Text className="font-semibold">The Market Trend/Chart</Text>
          <View>
            <ChartComponent timeFrame={chartTimeframe} />
          </View>

          <View className="flex-row justify-around">
            <Pressable
              className={`p-2 px-4 ${
                chartTimeframeSelected === "1h"
                  ? "bg-[#ffffff] shadow-lg"
                  : "bg-[#000000]"
              } rounded-lg`}
              onPress={() => {
                setChartTimeframe("1h");
                setChartTimeframeSelected("1h");
              }}
            >
              <Text
                className={`${
                  chartTimeframeSelected === "1h"
                    ? "text-[#000000]"
                    : "text-[#ffffff]"
                }`}
              >
                1h
              </Text>
            </Pressable>
            <Pressable
              className={`p-2 px-4 ${
                chartTimeframeSelected === "3h"
                  ? "bg-[#ffffff] shadow-lg"
                  : "bg-[#000000]"
              } rounded-lg`}
              onPress={() => {
                setChartTimeframe("3h");
                setChartTimeframeSelected("3h");
              }}
            >
              <Text
                className={`${
                  chartTimeframeSelected === "3h"
                    ? "text-[#000000]"
                    : "text-[#ffffff]"
                }`}
              >
                3h
              </Text>
            </Pressable>
            <Pressable
              className={`p-2 px-4 ${
                chartTimeframeSelected === "12h"
                  ? "bg-[#ffffff] shadow-lg"
                  : "bg-[#000000]"
              } rounded-lg`}
              onPress={() => {
                setChartTimeframe("12h");
                setChartTimeframeSelected("12h");
              }}
            >
              <Text
                className={`${
                  chartTimeframeSelected === "12h"
                    ? "text-[#000000]"
                    : "text-[#ffffff]"
                }`}
              >
                12h
              </Text>
            </Pressable>
            <Pressable
              className={`p-2 px-4 ${
                chartTimeframeSelected === "all"
                  ? "bg-[#ffffff] shadow-lg"
                  : "bg-[#000000]"
              } rounded-lg`}
              onPress={() => {
                setChartTimeframe("all");
                setChartTimeframeSelected("all");
              }}
            >
              <Text
                className={`${
                  chartTimeframeSelected === "all"
                    ? "text-[#000000]"
                    : "text-[#ffffff]"
                }`}
              >
                All Time
              </Text>
            </Pressable>
          </View>
        </View>

        <OrderBook />

        <View className="bg-[#ffffff] rounded-lg">
          <View className="p-2 px-4 space-y-4">
            <Text className="text-xl font-bold">About the event</Text>
            <View className="space-y-4">
              <View className="flex-row space-x-6">
                <View className="flex-1">
                  <Text className=" text-xs">Traders</Text>
                  <Text className="font-semibold">₹ 47.12K</Text>
                </View>
                <View className="flex-1">
                  <Text className=" text-xs">Volume</Text>
                  <Text className="font-semibold">₹ 9.9L</Text>
                </View>
              </View>
              <View className="flex-row space-x-6">
                <View className="flex-1">
                  <Text className=" text-xs">Started at</Text>
                  <Text className="font-semibold text-xs">
                    June 19, 2024 3:40PM
                  </Text>
                </View>
                <View className="flex-1">
                  <Text className=" text-xs">Ending at</Text>
                  <Text className="font-semibold text-xs">
                    June 19, 2024 3:40PM
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          <View className="p-2 px-4 space-y-1">
            <Text className="font-medium">Overview</Text>
            <Text className="font-light">Information about event</Text>
          </View>

          <View style={styles.divider} />

          <View className="p-2 px-4 space-y-1">
            <Text className="font-medium">Source of Truth</Text>
            <Text className="font-light">
              Information about Source of Truth
            </Text>
          </View>

          <View style={styles.divider} />
          <View className="p-2 px-4 space-y-1">
            <Text className="font-medium">Rules</Text>
            <Text className="font-light">Terms and condition</Text>
          </View>

          <View style={styles.divider} />

          <View className="p-2 pt-4">
            <Text
              style={{ fontFamily: "Marquee Moon", fontSize: 30, zIndex: 10 }}
            >
              Keep
            </Text>
            <Text
              style={{ fontFamily: "Marquee Moon", fontSize: 30, zIndex: 10 }}
            >
              Trading!
            </Text>
            <View className="flex-row space-x-1" style={{ marginTop: -20 }}>
              <Image
                source={require("../../../../assets/images/Signal Vector Design.jpeg")}
                style={{ height: 80, width: 50 }}
              />
              <Image
                source={require("../../../../assets/images/Signal Vector Design.jpeg")}
                style={{ height: 80, width: 50 }}
              />
              <Image
                source={require("../../../../assets/images/Signal Vector Design.jpeg")}
                style={{ height: 80, width: 50 }}
              />
              <Image
                source={require("../../../../assets/images/Signal Vector Design.jpeg")}
                style={{ height: 80, width: 50 }}
              />
              <Image
                source={require("../../../../assets/images/Signal Vector Design.jpeg")}
                style={{ height: 80, width: 50 }}
              />
              <Image
                source={require("../../../../assets/images/Signal Vector Design.jpeg")}
                style={{ height: 80, width: 50 }}
              />
            </View>
          </View>
        </View>
      </View>
      <View className="bg-[#ffffff] rounded-lg p-3 py-4">
        <View className="flex-row justify-between space-x-4">
          <Pressable
            className={`px-2.5 py-2 flex-1 rounded bg-[#144CC7] border-2 border-[#406FD9]`}
            onPress={() => setModalVisible(true)}
          >
            <Text className={`text-center text-lg font-bold text-[#ffffff]`}>
              Yes ₹ 5.3
            </Text>
          </Pressable>
          <Pressable
            className={`px-2.5 py-2 flex-1 rounded bg-[#08C270] border-2 border-[#4FE3A3]`}
            onPress={() => setModalVisible(true)}
          >
            <Text className={`text-center text-lg font-bold text-[#ffffff]`}>
              No ₹ 4.7
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#000000",
  },
});
