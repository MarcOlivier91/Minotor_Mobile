import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from "react-native";


export default function ForgottenPassword() {
    return (
        <SafeAreaProvider>
            <Text style={styles.heroText}>Mot de Passe Oublié</Text>
            <Text style={styles.paragraph}>Renseignez une adresse e-mail afin de recevoir une lien pour réinitialiser votre mot de passe</Text>

            <TextInput style={styles.input} placeholder="Email" />

            <TouchableOpacity style={styles.sendRequestButton} onPress={() => {}}>
                <Text style={styles.textButton}>Recevoir le lien</Text>
            </TouchableOpacity>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
    },
        input: {
        borderRadius: 8,
        borderWidth: 1.5,
        padding: 16,
        margin: 30,
    },
    sendRequestButton: {
        backgroundColor: "#E4B74C",
        borderRadius: 16,
        margin: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: "50%",
        alignSelf: "center",
    },
    textButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "semibold",
    textAlign: "center",
}
})