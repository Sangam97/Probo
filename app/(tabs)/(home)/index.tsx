import HorizontalTileRender from "@/components/HorizontalTileRender";
import { IconRender } from "@/components/IconRender";
import MatchCard from "@/components/MatchCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import VerticleTileRender from "@/components/VerticleTileRender";
import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ModalView } from "@/components/Modal";
import Cricket from "@/assets/svgs/Cricket";
import Bitcoin from "@/assets/svgs/Bitcoin";
import Football from "@/assets/svgs/Football";
import Stocks from "@/assets/svgs/Stocks";
import Economy from "@/assets/svgs/Economy";
import Basketball from "@/assets/svgs/Basketball";
import Youtube from "@/assets/svgs/Youtube";
import Chess from "@/assets/svgs/Chess";

const matchData = [
  {
    questionText: "Kolkata to win the match vs Mumbai",
    description: "H2H last 5 T20: Kolkata 4, Mumbai 1, DRAW 0",
    imageSrc: require("../../../assets/images/tata-ipl-seeklogo.png"),
  },
  {
    questionText: "Kolkata to win the match vs Mumbai",
    description: "H2H last 5 T20: Kolkata 4, Mumbai 1, DRAW 0",
    imageSrc: require("../../../assets/images/tata-ipl-seeklogo.png"),
  },
  {
    questionText: "Kolkata to win the match vs Mumbai",
    description: "H2H last 5 T20: Kolkata 4, Mumbai 1, DRAW 0",
    imageSrc: require("../../../assets/images/tata-ipl-seeklogo.png"),
  },
  {
    questionText: "Kolkata to win the match vs Mumbai",
    description: "H2H last 5 T20: Kolkata 4, Mumbai 1, DRAW 0",
    imageSrc: require("../../../assets/images/tata-ipl-seeklogo.png"),
  },
  {
    questionText: "Kolkata to win the match vs Mumbai",
    description: "H2H last 5 T20: Kolkata 4, Mumbai 1, DRAW 0",
    imageSrc: require("../../../assets/images/tata-ipl-seeklogo.png"),
  },
  {
    questionText: "Kolkata to win the match vs Mumbai",
    description: "H2H last 5 T20: Kolkata 4, Mumbai 1, DRAW 0",
    imageSrc: require("../../../assets/images/tata-ipl-seeklogo.png"),
  },
];

const verticleTileData = [
  {
    title: "Cricket",
    icon: <Cricket />,
  },
  {
    title: "Crypto",
    icon: <Bitcoin />,
  },
  {
    title: "Football",
    icon: <Football />,
  },
  {
    title: "Stocks",
    icon: <Stocks />,
  },
  {
    title: "Economy",
    icon: <Economy />,
  },
  {
    title: "Basketball",
    icon: <Basketball />,
  },
  {
    title: "Youtube",
    icon: <Youtube />,
  },
  {
    title: "Chess",
    icon: <Chess />,
  },
];

const horizontalTileData1 = [
  {
    title: "KOL v/s MUMB",
    icon: <Cricket />,
  },
  {
    title: "PSG v/s DORTMUND",
    icon: <Football />,
  },
  {
    title: "KOL v/s MUMB",
    icon: <Cricket />,
  },
  {
    title: "Bitcoin",
    icon: <Bitcoin />,
  },
  {
    title: "Growth",
    icon: <Stocks />,
  },
];

const horizontalTileData2 = [
  {
    title: "Bitcoin",
    icon: <Bitcoin />,
  },
  {
    title: "Growth",
    icon: <Stocks />,
  },
  {
    title: "PSG v/s DORTMUND",
    icon: <Football />,
  },
  {
    title: "KOL v/s MUMB",
    icon: <Cricket />,
  },
  {
    title: "PSG v/s DORTMUND",
    icon: <Football />,
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const tabBarHeight = useBottomTabBarHeight();
  const dimensions = useSafeAreaFrame();
  const screenHeight = dimensions.height - tabBarHeight;
  return (
    <ScrollView
      className="space-y-4"
      contentContainerStyle={{
        minHeight: screenHeight,
        paddingBottom: tabBarHeight,
      }}
    >
      <ModalView />
      <View className="flex-row justify-between px-2.5">
        <View className="rounded-full bg-[#EAECF0] p-2 pt-0">
          <IconRender name="person-outline" />
        </View>
        <View className="rounded-full p-2 pt-0 bg-[#F9FAFB]">
          <IconRender name="notifications-outline" />
        </View>
      </View>

      <View className="px-2.5">
        <Image
          source={require("../../../assets/images/Swimmer-Photos-260598.jpg")}
          style={{ width: "100%", height: 140 }}
          resizeMode="cover"
        ></Image>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {verticleTileData.map((tile, index) => (
          <View key={index} className="mx-2">
            <VerticleTileRender title={tile.title} icon={tile.icon} />
          </View>
        ))}
      </ScrollView>

      <View className="px-2.5">
        <Text className="font-bold">Trending Now</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          <View style={{ flexDirection: "row" }}>
            {horizontalTileData1.map((tile, index) => (
              <View key={`row1-${index}`} style={{ marginHorizontal: 8 }}>
                <HorizontalTileRender title={tile.title} icon={tile.icon} />
              </View>
            ))}
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            {horizontalTileData2.map((tile, index) => (
              <View key={`row2-${index}`} style={{ marginHorizontal: 8 }}>
                <HorizontalTileRender title={tile.title} icon={tile.icon} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View className="px-2.5">
        {matchData.map((match, index) => (
          <View className={`${index > 0 ? "mt-4" : ""} shadow`}>
            <MatchCard
              description={match.questionText}
              questionText={match.questionText}
              imageSrc={match.imageSrc}
              onPress={() =>
                router.push({
                  pathname: `/(tabs)/(home)/match/${index}`,
                  params: match,
                })
              }
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
