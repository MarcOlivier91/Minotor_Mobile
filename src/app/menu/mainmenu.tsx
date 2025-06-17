import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from "react-native";


export default function mainMenu() {
    return (
        <SafeAreaProvider>
            <Text>Menu Principal</Text>
            <Text>Bienvenue dans la page principale</Text>

        </SafeAreaProvider>
    )
}