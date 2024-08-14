import { AppContext } from "@/context";
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

const ButtonSlider = () => {
  const { selected, setSelected } = useContext(AppContext);
  const [animation] = useState(new Animated.Value(selected === "yes" ? 0 : 1));

  const handleSelect = (option: string) => {
    setSelected(option);
    Animated.timing(animation, {
      toValue: option === "yes" ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const selectorStyle = {
    left: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "50%"],
    }),
    // Highlight end
    backgroundColor: selected === "yes" ? "#454CE8" : "#D92D21",
  };

  return (
    <View style={styles.container}>
      <View className="w-full h-12 shadow-lg flex-row bg-[#ffffff] rounded-full">
        <Animated.View style={[styles.selector, selectorStyle]} />
        <TouchableOpacity
          style={[styles.button, styles.leftButton]}
          onPress={() => handleSelect("yes")}
        >
          <Text
            style={[
              styles.buttonText,
              selected === "yes" && styles.selectedText,
            ]}
          >
            yes ₹ 5.3
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.rightButton]}
          onPress={() => handleSelect("no")}
        >
          <Text
            style={[
              styles.buttonText,
              selected === "no" && styles.selectedText,
            ]}
          >
            No ₹ 4.7
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#363636",
    marginTop: 10,
  },
  buttonContainer: {
    width: 300,
    height: 100,
    backgroundColor: "white",
    borderRadius: 40,
    flexDirection: "row",
    overflow: "hidden",
  },
  selector: {
    position: "absolute",
    width: "50%",
    height: "100%",
    borderRadius: 40,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  leftButton: {
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  rightButton: {
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  selectedText: {
    color: "white",
  },
});

export default ButtonSlider;
