export interface Hackathon {
  year: string;
  title: string;
  event: string;
  description: string;
  achievement?: string;
  project: string;
  technologies: string[];
  status: "Winner" | "Finalist" | "Participant";
}

export const hackathons: Hackathon[] = [
  {
    year: "January 2025",
    title: "ETHIndia 2024 - Agentic Ethereum",
    event: "Offline (Bangalore, India)",
    description:
      "Developed VaultAI: A revolutionary DeFI AI Agent for automated asset management and market trend prediction using advanced machine learning algorithms.",
    achievement: "🏆 Won Coinbase's Agentic Kit Prize Pool",
    project: "VaultAI",
    technologies: ["Next.js", "Ethereum", "OpenAI", "LangChain", "PostgreSQL"],
    status: "Winner",
  },
  {
    year: "January 2025",
    title: "LNMHacks 7.0",
    event: "Offline (Jaipur, India)",
    description:
      "Built TrueScore: A decentralized review system and AI-powered survey platform on Aptos blockchain, ensuring transparency and trust in user reviews.",
    achievement: "🏆 Won Aptos Track + ₹100,000 Prize",
    project: "TrueScore",
    technologies: ["React", "Aptos", "Move", "MongoDB", "OpenAI"],
    status: "Winner",
  },
  {
    year: "September 2024",
    title: "Rabble TMA Hackathon",
    event: "Online",
    description:
      "Created TokenTrackr: An innovative Telegram Mini App for comprehensive portfolio management, supporting multiple tokens and NFTs with real-time analytics.",
    project: "TokenTrackr TMA",
    technologies: ["React", "Telegram Bot API", "Web3.js", "Node.js"],
    status: "Finalist",
  },
  {
    year: "August 2024",
    title: "EthOnline 2024",
    event: "Online",
    description:
      "Built DocVault: A pioneering decentralized credential issuing and verification system on Ethereum with zero-knowledge proof integration for privacy.",
    achievement: "$2000 grant to build on Solana",
    project: "DocVault",
    technologies: ["React", "Ethereum", "Solidity", "IPFS", "Zero-Knowledge"],
    status: "Winner",
  },
];
