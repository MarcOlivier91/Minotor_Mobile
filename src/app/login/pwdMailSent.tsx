import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from "react-native";



export default function pwdMailSent() {
  return (
    <SafeAreaProvider>
      <Text>Un mail a bien été envoyé</Text>
     </SafeAreaProvider>
  );
}
