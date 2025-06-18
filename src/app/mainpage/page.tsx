import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { router } from "expo-router";


export default function mainMenu() {
    return (
        <SafeAreaProvider>
            <View>
                <TouchableOpacity onPress={() => router.navigate('./newDelivery')}>
                    <Text style={styles.newDelivertButton}>Nouvelle Livraison</Text>
                </TouchableOpacity>
            </View>


            <Text>Historique des livraisons</Text>

        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    newDelivertButton : {
        textAlign: "center",
        margin: 20,
        fontSize: 16,
        color: "#000",
    },

})