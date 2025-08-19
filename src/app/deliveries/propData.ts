type Livraison = {
  id: string;
  deliveryId: string;
  entreprise: string;
  status: string;
  date: string;
};

const LivraisonData: Livraison[] = [
  {
    id: "1",
    deliveryId: "12345",
    entreprise: "Carrefour",
    status: "Livrée",
    date: "12-12-2023",
  },

  {
    id: "2",
    deliveryId: "98154",
    entreprise: "Les Frères Boulangers",
    status: "Annulée",
    date: "5-2-2023",
  },

  {
    id: "4",
    deliveryId: "98014",
    entreprise: "Moulin du Paiou",
    status: "Livrée",
    date: "5-2-2023",
  },

  {
    id: "3",
    deliveryId: "98154",
    entreprise: "Boulangerie de la Gare",
    status: "Annulée",
    date: "8-7-2023",
  },
];

export default LivraisonData;
