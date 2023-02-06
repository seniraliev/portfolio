type Skill = {
  title: string;
  icon: string;
  style?: object;
};
type Testimonial = {
  quote: string;
  name: string;
  job: string;
};

export const skills: Skill[] = [
  {
    title: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "Solidity",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
  },
  { title: "Hardhat", icon: "/static/icons/hardhat.svg" },
  { title: "Web3.js", icon: "/static/icons/web3js.svg" },
  { title: "Ethers.js", icon: "/static/icons/ethers.svg" },
  {
    title: "Rust",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
  },
  {
    title: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Enjoyed working with Senir. We were able to communicate with each other with ease and he was flexible to work with. He sent results on time and answered any questions I had for him. I would recommend working with Senir!",
    name: "Wilson Bright",
    job: "Head of Engineering at Elite IT Consultants",
  },
  {
    quote:
      "Senir jumped into a complex project and did a great job ramping up and completing the large features. It went so well, we asked him to work on other big features we had planned. He kept us updated on progress and was very open to feedback to match the style of code we had in the project already. We hope to work with him again!",
    name: "Adam Maxwell",
    job: "Co-Founder of Yearnclassic Finance",
  },
  {
    quote:
      "Senir has a great track record of developing high quality and secure smart contracts that meet the needs of the project. His attention to detail is unparalleled, and his dedication to getting the job done right is second to none. His knowledge and experience in developing smart contracts make him an invaluable asset to any project. He is reliable and highly proficient, making him an excellent choice for any Solidity development needs.",
    name: "Patchwork",
    job: "Founder of Spookyswap",
  },
];
