import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

type SecondaryButtonProps = {
  text: string;
  onPress?: () => void;
};

export default function SecondaryButton({
  text,
  onPress,
}: SecondaryButtonProps) {
  return (
    <TouchableOpacity style={styles.loginButton}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 40,
  },

  loginButton: {
    backgroundColor: "#222",
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
});
