import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Livraison = {
  id: string;
  deliveryId: string;
  entreprise: string;
  status: string;
  date: string;
};

const livraisonData: Livraison[] = [
  {
    id: "1",
    deliveryId: "12345",
    entreprise: "MarCompany",
    status: "Livrée",
    date: "12-12-2023",
  },

  {
    id: "2",
    deliveryId: "98154",
    entreprise: "Wassimacaron",
    status: "Annulée",
    date: "5-2-2023",
  },
];

export default function DeliveryCard() {
  return (
    <View>
      <Text> Ceci est un compenent pour les livraisons</Text>
      <TouchableOpacity style={styles.card}>
        <View>
          <MaterialCommunityIcons name="truck" size={24} />
          <Text>Livraison #{livraisonData[0].deliveryId}</Text>
          <Text>{livraisonData[0].entreprise}</Text>
          <Text>{livraisonData[0].status}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 40,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginHorizontal: 40,
  },
});
