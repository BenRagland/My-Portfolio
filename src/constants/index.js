import {
  mobile,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  whiteLabelSS,
  threejs,
  backend,
  logo,
  HighFashionEarth,
  aiRealtor,
} from "../assets";

const whiteLabelDemoLink = "https://youtu.be/cHcUpVyhps0";
const whiteLabelGit = "https://github.com/BenRagland/WhiteLabelWebsite";

const stealthRes = "https://youtu.be/irBIhDpi-7c";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "My Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Web Developer",
    icon: web,
  },
  {
    title: "UI / UX Design",
    icon: creator,
  },
  {
    title: "Graphic Design",
    icon: mobile,
  },
  {
    title: "Back-End Developer / Infrastrucure",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Material U.I",
    icon: web,
  },
  {
    name: "Node.jS",
    icon: nodejs,
  },
  {
    name: "Next.jS",
    icon: web,
  },
  {
    name: "Three.jS",
    icon: threejs,
  },
  // {
  //   name: "Git",
  //   icon: git,
  // },
  // {
  //   name: "Figma",
  //   icon: figma,
  // },
  {
    name: "Python",
    icon: web,
  },
  {
    name: "Flask",
    icon: web,
  },
  // {
  //   name: "SQL",
  //   icon: web,
  // },
  // {
  //   name: "Docker",
  //   icon: web,
  // },
  // {
  //   name: "Kubernetes",
  //   icon: web,
  // },
  // {
  //   name: "Google Cloud",
  //   icon: web,
  // },
];

const overviewP1 = `A Full Stack Developer with expertise in Python (Flask) for back-end databases and JavaScript for front-end web UI development. 
  With over 10 years in hospitality, I’m highly trained in sales, communication, and team building.
   My diverse background makes me uniquely adept at problem solving under high pressure.
  `;

const overviewP2 = ` As a developer I’ve  contributed to and led several projects, most notably the startup Clutch Audience. Whether designing intuitive user interfaces
                  or creating a product to grasp a new market, I'm always eager to tackle new challenges 
                  in new and exciting ways. Let's work 
                  together to bring your ideas to life! `;

const experiences = [
  {
    title: "Co-Founder",
    company_name: "Clutch Audience",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Jul 20222 - Present",
    points: [
      "Designed custom UX/UI theme: Created mockups on Figma to design a unique and engaging user interface. ",
      "Developed home website (clutchAudience.io): Utilizing React, Next.js & tailwind to build a responsive and dynamic site.",
      "Built 50% of web app UI: Implemented survey results and analytics screens using React and Material UI Library. Integrated Wavesurfer.js SDK and connected to MongoDB API endpoints hosted on Google Cloud.",
    ],
  },
  {
    title: "Hospitality ",
    company_name: "Beverage Director, Manager, Bartender",
    icon: logo,
    iconBg: "#383E56",
    date: "Jul 2010 - 2023",
    points: [
      "Designed and launched beverage programs: Designed and launched innovative beverage programs at two venues, catalyzing successful launches and equity offers.",
      "Managed high-volume bar operations: Led a team of three bartenders in a 120-person small business, generating over $1M in annual revenue.",
      "Led elite bartender teams: Led nightly operations for 5-person teams, driving establishments serving 400+ patrons daily to exceed $15k in daily revenue through exceptional service and leadership training from top consumer brands.",
    ],
  },
  {
    title: "Product Manager",
    company_name: "The Block Foodhall",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Jan 2017 - Aug 2018",
    points: [
      "Founded a weekly Night Life event increasing weekly traffic and revenue; that led into a full-time product role, supporting 'The Block' brand Exclusively",
      "Created Physical & Digital Restaurant Graphics as well as go to market strategies for new Brand concepts on the fly. Leading to the quick launch & MVP of new Food & Beverage concepts.",
      "Led a team of marketers to succesfull collaboration wtih engineers, designers, and manufacturers for developing exciting packaging and apparel. ",
    ],
  },
  {
    title: "Civil Engineering Intern",
    company_name: "Martin Horne Engineering",
    icon: logo,
    iconBg: "#fff",
    date: "Jul 2013 - Sept 2013",
    points: [
      "Utilized Autodesk 3d CAD to create initial drafts",
      "Gained fist hand insight to industry challenges & solutions via mentorship and live site walk-throughs.",
    ],
  },
];

const projects = [
  {
    name: "Stealth REs",
    description:
      "A platform allowing home buyer to submit an offer to a seller, open a line of communication & track the process.",
    tags: [
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "reactRouter",
        color: "green-text-gradient",
      },
      {
        name: "Aws",
        color: "green-text-gradient",
      },
    ],
    image: aiRealtor,
    source_code_link: "https://youtu.be/irBIhDpi-7c",
    site_link: "https://youtu.be/irBIhDpi-7c",
  },
  {
    name: "Clutch Audience",
    description:
      "A marketplace for music artists to test their work with listeners worldwide via digital listening sessions.",
    tags: [
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "microServices",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Aws",
        color: "green-text-gradient",
      },
      {
        name: "Google Cloud",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "green-text-gradient",
      },
    ],
    image: aiRealtor,
    source_code_link: "https://youtu.be/JcCbICkLA8o",
    site_link: "https://youtu.be/JcCbICkLA8o",
  },
  {
    name: "White Label Website",
    description:
      "A website that allows you to upload or a.i generate from text, an image to an interactive 3d t-shirt to design for mockup.",
    tags: [
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "A.I",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "framerMotion",
        color: "blue-text-gradient",
      },
    ],
    image: whiteLabelSS,
    source_code_link: "https://github.com/BenRagland/WhiteLabelWebsite",
    site_link: "https://youtu.be/cHcUpVyhps0",
  },
  {
    name: "High Fashion Earth",
    description:
      "An exciting new company in Northern VA that purchases and resales high end clothing. Promoting sustainability and Quality over quantity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: HighFashionEarth,
    source_code_link: "https://github.com/BenRagland/HighFashionEarth",
    site_link: "https://youtu.be/_eLRW4iU4zk",
  },
];

export {
  services,
  technologies,
  experiences,
  projects,
  overviewP1,
  overviewP2,
};
