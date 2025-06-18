import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DeliveryCard from "../../components/DeliveryCard";
import livraisonData from "./propData";

export default function MainMenu() {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="plus" size={24} color={"#fff"} />
          <TouchableOpacity onPress={() => router.navigate("./newDelivery")}>
            <Text style={styles.newDeliveryText}>Nouvelle Livraison</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>Livraisons Précédentes</Text>
        {livraisonData.map((livraison) => (
          <DeliveryCard
            key={livraison.id}
            deliveryId={livraison.deliveryId}
            entreprise={livraison.entreprise}
            status={livraison.status}
            date={livraison.date}
          />
        ))}
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  newDeliveryText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E4B74C",
    padding: 14,
    borderRadius: 16,
    marginBottom: 20,
    width: "50%",
    alignSelf: "center",
    margin: 40,
  },

  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "left",
    marginVertical: 40,
    marginLeft: 40,
  },
});
