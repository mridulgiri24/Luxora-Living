import { v4 as uuidv4 } from "uuid";

const propertyDetails = [
  {
    id: uuidv4(),
    type: "Resident Property",
    price: 150000,
    city: "Los Angeles",
    agents: "Alice Brown",
    image: {
      Url: "/src/assets/property/resident-2.jpg",
    },
  },

  {
    id: uuidv4(),
    type: "Commercial Property",
    price: 150000,
    city: "Los Angeles",
    agents: "Alice Brown",
    image: {
      Url: "/src/assets/property/commercial-2.jpg",
    },
  },

  {
    id: uuidv4(),
    type: "Commercial Property",
    price: 850000,
    city: "New York",
    agents: "Grace",
    image: {
      Url: "/src/assets/property/commercial-3.jpg",
    },
  },

  {
    id: uuidv4(),
    type: "Industrial Property",
    price: 150000,
    city: "Los Angeles",
    agents: "Alice Brown",
    image: {
      Url: "/src/assets/property/industrial-2.jpg",
    },
  },

  {
    id: uuidv4(),
    type: "Resident Property",
    price: 649900,
    city: "New York",
    agents: "John Doe",
    image: {
      Url: "/src/assets/property/resident-1.jpg",
    },
  },

  {
    id: uuidv4(),
    type: "Commercial Property",
    price: 649900,
    city: "New York",
    agents: "John Doe",
    image: {
      Url: "/src/assets/property/commercial-1.jpg",
    },
  },

  {
    id: uuidv4(),
    type: "Industrial Property",
    price: 649900,
    city: "New York",
    agents: "John Doe",
    image: {
      Url: "/src/assets/property/industrial-1.jpg",
    },
  },

  {
    id: uuidv4(),
    type: "Agriculture Property",
    price: 649900,
    city: "New York",
    agents: "John Doe",
    image: {
      Url: "/src/assets/property/agriculture-1.jpg",
    },
  },

  {
    id: uuidv4(),
    type: "Resident Property",
    price: 150000,
    city: "Los Angeles",
    agents: "Grace",
    image: {
      Url: "/src/assets/property/resident-3.jpg",
    },
  },

  {
    id: uuidv4(),
    type: "Industrial Property",
    price: 850000,
    city: "New York",
    agents: "Grace",
    image: {
      Url: "/src/assets/property/industrial-3.jpg",
    },
  },

  {
    id: uuidv4(),
    type: "Agriculture Property",
    price: 150000,
    city: "Los Angeles",
    agents: "Alice Brown",
    image: {
      Url: "/src/assets/property/agriculture-2.jpg",
    },
  },

  {
    id: uuidv4(),
    type: "Agriculture Property",
    price: 850000,
    city: "New York",
    agents: "Grace",
    image: {
      Url: "/src/assets/property/agriculture-3.jpg",
    },
  },
];

export default propertyDetails;
