import React, { useState } from "react";
import axios from "axios";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { router } from "expo-router";
import ActionButton from "@/src/components/ActionButton";

export default function Login() {
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const LOGIN_ENDPOINT = "http://172.20.10.7:8000/api/client/connexion";

  const handleLogin = () => {
    console.log(email, password);
    axios
      .post(LOGIN_ENDPOINT, {
        email: email,
        password: password,
      })
      .then((response) => {
        // Handle successful login
        console.log("Login successful", response.data);
        router.navigate("../deliveries/page");
        // Navigate to your app's main screen or set authentication state
      })
      .catch((error) => {
        // Handle login error
        console.log(error.message);
        console.error("Login failed", error.response);
        Alert.alert(
          "Authentification échouée",
          "Vérifiez vos identifiants et réessayez.",
        );
      });
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
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
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

        <ActionButton text="Se Connecter" onPress={() => handleLogin()} />

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
