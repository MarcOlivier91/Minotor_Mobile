import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface DeliveryCardProps {
  deliveryId: number | string;
  entreprise: string;
  status: string;
  date: string;
}

export default function DeliveryCard(props: DeliveryCardProps) {
  return (
    <View>
      <TouchableOpacity style={styles.card}>
        <View style={styles.cardContainer}>
          <MaterialCommunityIcons name="truck" size={30} />
          <View>
            <Text style={styles.livraisonIdText}>
              Livraison #{props.deliveryId}
            </Text>
            <Text>
              {props.entreprise} | {props.date}
            </Text>
            <Text>{props.status}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginHorizontal: 40,
  },

  cardContainer: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  livraisonIdText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
