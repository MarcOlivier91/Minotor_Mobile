import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";

export default function Login() {
    return (
        <SafeAreaProvider style={styles.container}>
            <KeyboardAvoidingView enabled behavior={'padding'}>
                <Text style={styles.heroText}>Connectez-vous</Text>
                <TextInput style={styles.input} placeholder="Email"/>
                <TextInput style={styles.input} placeholder="Mot de Passe"/>
                <Text>Mot de passe oublié ?</Text>
            </KeyboardAvoidingView>   
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    input: {
        borderRadius: 8,
        borderWidth: 1.5,
        padding: 12,
        margin: 30,
    },
    heroText: {
        fontSize: 40,
        fontWeight: "bold",
        margin: 40,
        textAlign: "center",
    },


});