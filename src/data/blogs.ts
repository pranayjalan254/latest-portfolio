export interface Blog {
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
  tags: string[];
}

export const blogs: Blog[] = [
  {
    title: "I can NFT, So Can You!",
    description:
      "A comprehensive step-by-step guide on NFT Standards, Types, and how to create NFTs on Solana using Metaplex.",
    date: "January 18, 2025",
    readTime: "7 min read",
    link: "https://medium.com/@pranayjalan.work/i-can-nft-so-can-you-latest-guide-on-nft-standards-and-creation-4f8429eaa837",
    tags: ["Web3", "NFTs", "Solana", "Metaplex"],
  },
  {
    title: "All about ERC-7683",
    description:
      "Explore how Okto is reshaping cross-chain interactions and building the future of seamless Web3 with ERC-7683 standard.",
    date: "January 17, 2025",
    readTime: "4 min read",
    link: "https://x.com/pranaytwts/status/1880242151013118202",
    tags: ["Web3", "Cross-chain", "ERC-7683", "Fillers"],
  },
  {
    title: "Memecoins: The Next Big Thing in Crypto",
    description:
      "Dive deep into the fascinating history and uncertain future of memecoins, exploring the latest trend shaking the crypto world.",
    date: "December 5, 2024",
    readTime: "10 min read",
    link: "https://medium.com/@pranayjalan.work/rise-of-memecoins-the-wild-witty-and-risky-side-of-crypto-f7df9fb95b72",
    tags: ["Web3", "Memecoins", "Solana", "DeFi"],
  },
  {
    title: "Validation is the Key!",
    description:
      "Deep dive into blockchain validators and staking mechanisms with a hands-on tutorial for Keplr Wallet integration.",
    date: "December 7, 2024",
    readTime: "5 min read",
    link: "https://medium.com/@pranayjalan.work/unlocking-blockchain-a-beginners-guide-to-validators-and-staking-11aa15cce190",
    tags: ["Validators", "Staking", "Cosmos", "Keplr"],
  },
  {
    title: "Understanding Open Source",
    description:
      "A beginner's guide to open source development, collaboration practices, and how to contribute to meaningful projects.",
    date: "August 3, 2022",
    readTime: "2 min read",
    link: "https://pranayblogs.hashnode.dev/open-source",
    tags: ["Open Source", "Development", "Community"],
  },
  {
    title: "Network is Networth",
    description:
      "Explore the critical importance of professional networking and how building strong connections can significantly impact your career growth.",
    date: "August 3, 2022",
    readTime: "3 min read",
    link: "https://pranayblogs.hashnode.dev/networking",
    tags: ["Networking", "Career", "Professional Growth"],
  },
];
