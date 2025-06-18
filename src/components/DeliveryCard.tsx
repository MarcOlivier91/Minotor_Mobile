import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DeliveryCard() {
  return (
    <View>
      <Text> Ceci est un compenent pour les livraisons</Text>
      <TouchableOpacity style={styles.card}>
        <Text>
            Livraison
            </Text>
      </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
})
