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

  {
    id: "4",
    deliveryId: "98014",
    entreprise: "NewCompany",
    status: "Livrée",
    date: "5-2-2023",
  },

  {
    id: "3",
    deliveryId: "98154",
    entreprise: "AlgerianCompany",
    status: "Annulée",
    date: "8-7-2023",
  },
];

export default LivraisonData;
