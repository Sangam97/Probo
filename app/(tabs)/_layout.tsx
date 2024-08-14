import React from "react";
import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import Trophy from "@/assets/svgs/Trophy";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={"#000000"}
            />
          ),
          tabBarLabelStyle: {
            color: "#000000",
          },
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#000000",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "search" : "search-outline"}
              color={"#000000"}
            />
          ),
          tabBarLabelStyle: {
            color: "#000000",
          },
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#000000",
        }}
      />
      <Tabs.Screen
        name="sports"
        options={{
          title: "Sports",
          tabBarIcon: ({ focused, color, size }) => (
            <Trophy
              width={size}
              height={size}
              fill={focused ? color : "#8E8E8F"}
            />
          ),
          tabBarLabelStyle: {
            color: "#000000",
          },

          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#000000",
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: "Portfolio",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "bag-remove" : "bag-remove-outline"}
              color={"#000000"}
            />
          ),
          tabBarLabelStyle: {
            color: "#000000",
          },
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#000000",
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "wallet" : "wallet-outline"}
              color={"#000000"}
            />
          ),
          tabBarLabelStyle: {
            color: "#000000",
          },
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#000000",
        }}
      />
    </Tabs>
  );
}
