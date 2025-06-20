import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import LivraisonDetailsData from "./propDeliveryData";

export default function DeliveryDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Détails de la Livraison</Text>

      <View style={styles.companyInfoContainer}>
        <Text style={styles.companyName}>
          {LivraisonDetailsData[0].entreprise}
        </Text>
        <Text>
          {LivraisonDetailsData[0].addresse?.nomVoie} |{" "}
          {LivraisonDetailsData[0].addresse.ville}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
    marginLeft: 20,
    marginTop: 20,
  },

  companyInfoContainer: {
    marginLeft: 40,
    marginTop: 20,
  },

  companyName: {
    fontWeight: "bold",
    fontSize: 26,
  },
});
