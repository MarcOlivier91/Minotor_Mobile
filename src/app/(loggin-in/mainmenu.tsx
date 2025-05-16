import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from "react-native";


export default function mainMenu() {
    return (
        <SafeAreaProvider>
            <Text>Menu Principal</Text>
        </SafeAreaProvider>
    )
}