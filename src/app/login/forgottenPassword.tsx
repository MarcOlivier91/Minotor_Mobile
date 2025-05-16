import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from "react-native";


export default function forgottenPassword() {
    return (
        <SafeAreaProvider>
            <Text style={styles.heroText}>Mot de Passe Oublié</Text>
            <Text style={styles.paragraph}>Renseignez une adresse e-mail afin de recevoir une lien pour réinitialiser votre mot de passe</Text>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    heroText: {
        fontSize: 32,
        fontWeight: "bold",
        margin: 40,
        textAlign: "center",
    },
    paragraph: {
        textAlign: "center",
        margin: 20,
    }
})