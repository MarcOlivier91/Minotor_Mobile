import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function Register() {
    return (
        <SafeAreaProvider>
            <Text>Créer un compte livreur</Text>
        </SafeAreaProvider>
    )
}