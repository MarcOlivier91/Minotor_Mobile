import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";

export default function Login() {
  // State variable to hold the password
  const [password, setPassword] = useState("");

  const [username, setUsername] = useState("");
  // State variable to hold the username

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaProvider style={styles.mainContainer}>
      <KeyboardAvoidingView
        enabled
        behavior={"padding"}
        keyboardVerticalOffset={100}
      >
        <Text style={styles.heroText}>Connectez-vous</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Pseudonyme"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            placeholder="Mot de Passe"
          />

          <MaterialCommunityIcons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="#aaa"
            onPress={toggleShowPassword}
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.navigate("../deliveries/page")}
        >
          <Text style={styles.textButton}>Se connecter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.navigate("./forgottenPassword")}
        >
          <Text style={styles.forgottenPassword}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
  },
  heroText: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 40,
    textAlign: "center",
  },
  forgottenPassword: {
    textAlign: "right",
    margin: 20,
    fontSize: 16,
    color: "#000",
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

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f3f3f3",
    borderRadius: 8,
    borderWidth: 1.5,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 40,
    marginBottom: 20,
  },

  textInput: {
    fontSize: 16,
  },
});
