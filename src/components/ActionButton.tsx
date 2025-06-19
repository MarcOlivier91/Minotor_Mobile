import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

type ActionButtonProps = {
  text: string;
  onPress: () => void;
};

export default function ActionButton({ text, onPress }: ActionButtonProps) {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={onPress}>
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
});
