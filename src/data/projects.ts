export interface Project {
  title: string;
  description: string;
  category: string[];
  logoUrl: string;
  video?: string;
  github: string;
  demo?: string;
  tech: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "VIBE",
    description:
      "An Virtual Intelligent Bot Engine using Retrieval-Augmented Generation (RAG) for creating custom AI assistants with domain-specific knowledge.",
    category: ["AI/ML"],
    logoUrl: "/logos/vaultai.png",
    video: "",
    github: "https://github.com/pranayjalan254/rag-chatbot-builder",
    demo: "",
    tech: ["Python", "LangChain", "React", "FastAPI", "Vector DB"],
    featured: true,
  },
  {
    title: "Vault AI",
    description:
      "A DeFI AI Agent for managing assets and predicting market trends. Won the Coinbase's Agentic Kit Prize Pool at ETHIndia 2024.",
    category: ["Blockchain", "AI/ML"],
    logoUrl: "/logos/vaultai.png",
    video: "",
    github: "https://github.com/pranayjalan254/vault-ai",
    demo: "",
    tech: ["NextJS", "Ethereum", "OpenAI", "Postgres", "Web3"],
    featured: true,
  },
  {
    title: "TrueScore",
    description:
      "A decentralized review system and AI-powered survey platform built on Aptos blockchain for transparent and trustworthy reviews.",
    category: ["Blockchain"],
    logoUrl: "/logos/truescore.png",
    video:
      "https://www.loom.com/share/bbf0451b935f456480697bc0254a8566?sid=8baf3f74-de97-490c-a5c3-4e2d66421b4d",
    github: "https://github.com/pranayjalan254/decentralized-review-system",
    demo: "https://true-score.vercel.app/",
    tech: ["React", "Aptos", "Move", "MongoDB", "TypeScript"],
    featured: true,
  },
  {
    title: "DocVault 2.0",
    description:
      "A decentralized credential management platform on Solana blockchain for secure document storage and verification.",
    category: ["Blockchain"],
    logoUrl: "/logos/docvault.png",
    video: "/videos/doc-vault.mp4",
    github: "https://github.com/pranayjalan254/docvault-solana",
    demo: "https://www.docvault.website/",
    tech: ["React", "Solana", "Rust", "MongoDB", "IPFS"],
  },
  {
    title: "TokenTrackr",
    description:
      "A DApp that allows users to track their token holdings, historical balances, and allowances on the Ethereum blockchain with real-time analytics.",
    category: ["Blockchain"],
    logoUrl: "/logos/tokentrackr.png",
    video: "/videos/tokentrackr.mp4",
    github: "https://github.com/pranayjalan254/TokenTrackr",
    demo: "https://token-trackr.vercel.app/",
    tech: ["React", "Web3Auth", "Ethers.js", "Moralis", "Chakra UI"],
  },
  {
    title: "Spotlight",
    description:
      "A modern landing page for an NFT event ticket selling platform with sleek design and Web3 integration.",
    category: ["Blockchain"],
    logoUrl: "/logos/spotlight.png",
    video: "/videos/spotlight.mp4",
    github: "https://github.com/pranayjalan254/spotlight",
    demo: "https://spotlight-nft.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "ModelX",
    description:
      "A sophisticated landing page for a decentralized AI model marketplace with modern UI/UX and blockchain integration.",
    category: ["AI/ML"],
    logoUrl: "/logos/modelx.png",
    video: "/videos/modelx.mp4",
    github: "https://github.com/pranayjalan254/modelX",
    demo: "https://modelx.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
  },
  {
    title: "Wound Area Estimator",
    description:
      "A computer vision web application that estimates wound area using advanced image processing techniques for medical applications.",
    category: ["AI/ML"],
    logoUrl: "/logos/wound-area.png",
    video: "/videos/wound-area.mp4",
    github: "https://github.com/pranayjalan254/wound-sensor",
    demo: "https://wound-sensor.vercel.app/",
    tech: ["React", "Flask", "OpenCV", "Python", "Google Cloud"],
  },
  {
    title: "Email/SMS Spam Classifier",
    description:
      "An ML-powered spam detection system using NLP techniques and multiple classification algorithms for high accuracy spam filtering.",
    category: ["AI/ML"],
    logoUrl: "/logos/spam.png",
    video: "/videos/spam.mp4",
    github:
      "https://github.com/pranayjalan254/Machine-Learning-Projects/tree/main/spam-email-classifier",
    demo: "https://github.com/pranayjalan254/Machine-Learning-Projects/tree/main/spam-email-classifier",
    tech: ["Python", "Scikit-learn", "NLTK", "Pandas", "Jupyter"],
  },
  {
    title: "BITS Blockchain Club Website",
    description:
      "Official website for the Blockchain Club of BITS Pilani with modern design, event management, and member portal.",
    category: ["Frontend"],
    video: "/videos/blockchain-club.mp4",
    logoUrl: "/logos/blockchain-club.png",
    github: "https://github.com/BITS-BLOCKCHAIN/BitsBlockchainWebsite",
    demo: "https://bitsblockchain.vercel.app/",
    tech: ["React", "CSS3", "JavaScript", "Vercel"],
  },
  {
    title: "DHT MultiHop Wireless Sensor Network",
    description:
      "IoT sensor network using ESP8266 and DHT11 sensors for environmental monitoring with multi-hop communication and power optimization.",
    category: ["IoT"],
    logoUrl: "/logos/wsn-iot.png",
    video: "/videos/wsn-iot.mp4",
    github: "https://github.com/pranayjalan254/dht-wsn",
    demo: "https://drive.google.com/file/d/1crtGof4TY2UucVRQF7kaVbttF5Uv5Wpr/view?usp=sharing",
    tech: ["ESP8266", "Arduino IDE", "Raspberry Pi", "Flask", "Python"],
  },
];
