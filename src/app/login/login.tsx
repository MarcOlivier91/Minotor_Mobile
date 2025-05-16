import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function Login() {
    return (
        <SafeAreaProvider>
            <Text>Connectez-vous</Text>
        </SafeAreaProvider>
    )
}