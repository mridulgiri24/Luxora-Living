import { v4 as uuidv4 } from "uuid";

const agents = [
  {
    id: uuidv4(),
    agents: "Alice Brown",
    image: {
      Url: "/src/assets/agents/alice.jpg",
    },
  },
  {
    id: uuidv4(),
    agents: "Grace",
    image: {
      Url: "/src/assets/agents/grace.jpg",
    },
  },
  {
    id: uuidv4(),
    agents: "John Doe",
    image: {
      Url: "/src/assets/agents/john.jpg",
    },
  },
];

export default agents;
