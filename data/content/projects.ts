import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Yearn Classic Finance",
    desc: "Yearn Classic Finance platform of the DeFi and NFT ecosystem on Binance Smart Chain",
    img: "/static/projects/yearnclassic.png",
    link: "https://earnx.yearnclassic.finance/",
    tags: ["Next", "React", "Redux", "SCSS", "Solidity", "Remix", "Web3.js"],
  },
  {
    id: 1,
    title: "Treedefi",
    desc: "Eco-friendly platform with DEX, Pools, and Marketplace on Binance Smart Chain",
    img: "/static/projects/treedefi.png",
    link: "https://treedefi.com/",
    tags: ["React", "MobX", "GSAP", "SCSS", "Material UI", "Solidity", "Remix", "Ethers.js"],
  },
  {
    id: 2,
    title: "Lucky Zeros",
    desc: "Lucky Zero NFT collection of 8,888 items on Ethereum network",
    img: "/static/projects/luckyzeros.png",
    link: "https://www.luckyzeros.io/",
    tags: ["Next", "React", "CSS", "Solidity", "Hardhat", "Web3.js"],
  },
  {
    id: 3,
    title: "Blockchain Games",
    desc: "NFT staking, Raffle, Slots, Coinflip game on Solana network",
    img: "/static/projects/solkitties.png",
    link: "https://www.solkitties.net/",
    tags: ["Rust", "Solana/Web3.js", "Anchor"],
  },
  {
    id: 4,
    title: "Deez kits games",
    desc: "Slots and Coinflip game for Deez kits on Solana network",
    img: "/static/projects/deezkits.png",
    link: "https://www.deezkits.com/",
    tags: ["React", "Redux", "SASS", "Material UI", "Solana/Web3.js", "Rust", "Anchor"],
  },
  {
    id: 5,
    title: "SpookySwap",
    desc: "SpookySwap DeFi protocol on Fantom Opera",
    img: "/static/projects/spookyswap.png",
    link: "https://spooky.fi/",
    tags: ["Solidity", "Truffle", "OpenZeppelin", "Web3.js"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects