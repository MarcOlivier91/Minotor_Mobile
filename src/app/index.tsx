import { Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ActionButton from "../components/ActionButton";
import SecondaryButton from "../components/SecondaryButton";
import { router } from "expo-router";

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
      <ActionButton
        text="Se Connecter"
        onPress={() => router.navigate("./login/login")}
      />
      <SecondaryButton text="Créer un compte" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 40,
  },
});
