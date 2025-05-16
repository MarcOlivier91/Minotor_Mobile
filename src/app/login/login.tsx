import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Login() {
    return (
        <SafeAreaProvider style={styles.container}>
            <KeyboardAvoidingView enabled behavior={'padding'} keyboardVerticalOffset={100}>
                <Text style={styles.heroText}>Connectez-vous</Text>
                <TextInput style={styles.input} placeholder="Email"/>
                <TextInput style={styles.input} placeholder="Mot de Passe"/>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.textButton}>Se connecter</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.navigate('./forgottenPassword')}>
                    <Text style={styles.forgottenPassword}>Mot de passe oublié ?</Text>
                </TouchableOpacity>
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
        padding: 16,
        margin: 30,
    },
    heroText: {
        fontSize: 40,
        fontWeight: "bold",
        margin: 40,
        textAlign: "center",
    },
    forgottenPassword: {
        textAlign: "right",
        margin: 20,
        fontSize: 16,
        color: "#000",
    },
    loginButton: {
    backgroundColor: "#E4B74C",
    padding: 14,
    borderRadius: 8,
    marginBottom: 20,
    },
    
    textButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    },
});