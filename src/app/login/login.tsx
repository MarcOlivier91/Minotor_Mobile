import ActionButton from "@/src/components/ActionButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import bcrypt from "bcryptjs";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

interface User {
  username: string;
  password: string;
}

async function checkAuth(username: string, password: string): Promise<boolean> {
  try {
    const response = await fetch(
      `http://192.168.x.x:8000/api/users?username=${username}`
    );

    if (!response.ok) {
      return false;
    }

    const usersArray: User[] = await response.json();

    for (let userObj of usersArray) {
      const storedUsername = userObj.username;
      let storedHashedPassword = userObj.password;
      storedHashedPassword = storedHashedPassword.replace(/^\$2b\$/, "$2a$");

      if (
        storedUsername === username &&
        bcrypt.compareSync(password, storedHashedPassword)
      ) {
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export default function Login() {
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    const isValid = await checkAuth(username, password);
    if (isValid) {
      router.navigate("../deliveries/page");
    } else {
      Alert.alert("Erreur", "Nom d’utilisateur ou mot de passe incorrect");
    }
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

        <ActionButton text="Se Connecter" onPress={handleLogin} />

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
    flex: 1, 
  },
});
