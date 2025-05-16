import { router } from "expo-router";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.text}>Minot&apos;Scan</Text>
      <TouchableOpacity style={styles.loginButton}  onPress={() => router.navigate('./login/login')}>
        <Text style={styles.textButton}>Se Connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton} onPress={() => router.navigate('./register/register')}>
        <Text style={styles.textButton}>Créer un compte</Text>
      </TouchableOpacity>
</SafeAreaProvider>
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
  registerButton: {
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
  }

});
