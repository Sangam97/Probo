import React from "react";
import { View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

// Function to generate random data
const generateRandomData = (points: number) => {
  return Array.from({ length: points }, (_, i) => ({
    value: Math.floor(Math.random() * 100),
    dataPointText: i.toString(),
  }));
};

// Generate data for different time periods
const chartData = {
  "1h": {
    data1: generateRandomData(6),
    data2: generateRandomData(6),
  },
  "3h": {
    data1: generateRandomData(12),
    data2: generateRandomData(12),
  },
  "12h": {
    data1: generateRandomData(24),
    data2: generateRandomData(24),
  },
  all: {
    data1: generateRandomData(48),
    data2: generateRandomData(48),
  },
};

interface ChartComponentProps {
  timeFrame: "1h" | "3h" | "12h" | "all";
}

export default function ChartComponent({ timeFrame }: ChartComponentProps) {
  const { data1, data2 } = chartData[timeFrame];

  return (
    <View>
      <LineChart
        data={data1}
        data2={data2}
        height={250}
        showVerticalLines
        spacing={44}
        initialSpacing={0}
        color1="skyblue"
        color2="orange"
        textColor1="green"
        dataPointsHeight={6}
        dataPointsWidth={6}
        dataPointsColor1="blue"
        dataPointsColor2="red"
        textShiftY={-2}
        textShiftX={-5}
        textFontSize={13}
      />
    </View>
  );
}
