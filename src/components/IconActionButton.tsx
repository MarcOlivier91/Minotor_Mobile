import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface IconActionButtonProps {
  text: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  onPress: () => void;
}

export default function IconActionButton({
  text,
  icon,
  onPress,
}: IconActionButtonProps) {
  return (
    <View style={styles.buttonContainer}>
      <MaterialCommunityIcons name={icon} size={24} color={"#fff"} />
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.textButton}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 40,
  },

  loginButton: {
    backgroundColor: "#E4B74C",
    padding: 14,
    borderRadius: 16,
    marginBottom: 20,
    width: "50%",
    alignSelf: "center",
  },

  textButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#E4B74C",
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
    width: "50%",
    alignSelf: "center",
    margin: 40,
  },
});
