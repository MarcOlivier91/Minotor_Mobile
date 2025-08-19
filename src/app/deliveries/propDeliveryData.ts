type LivraisonDetails = {
  id: string;
  deliveryId: string;
  entreprise: string;
  status: string;
  addresse: { nomVoie: string; codePostal: number; ville: string };
  date: string;
};

const LivraisonDetailsData: LivraisonDetails[] = [
  {
    id: "2",
    deliveryId: "98154",
    entreprise: "Boulangerie du Parc",
    addresse: {
      nomVoie: "2 Rue du Champtier du Coq",
      codePostal: 91000,
      ville: "Evry-Courcouronnes",
    },
    status: "Annulée",
    date: "5-2-2023",
  },
];

export default LivraisonDetailsData;
