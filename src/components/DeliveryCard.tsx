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
        <View>
          <MaterialCommunityIcons name="truck" size={24} />
          <Text>Livraison #{props.deliveryId}</Text>
          <Text>{props.entreprise}</Text>
          <Text>{props.status}</Text>
          <Text>{props.date}</Text>
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
