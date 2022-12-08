import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",

    padding: 15,
    marginVertical: 7,
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: "#411900",
  },
  container_TERTIARY: {},
  text: {
    color: "white",
    fontWeight: "bold",
  },
  text_PRIMARY: {
    fontSize: 20,
  },
  text_TERTIALY: {
    color: "#411900",
  },
});

export default CustomButton;
