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
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  tesla,
  threejs,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];
const overview = `I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
          `
const experiences = [
  {
    title: "Hospitality",
    company_name: "Hospitality",
    icon: tesla,
    iconBg: "#383E56",
    date: "Jan 2010 - Present",
    points: [
      "Trained extensively in hospitality service with many notable brands including RPM Italian, 12 Stories, Casamigos, Martell and Jameson.",
      "Spearheaded food and beverage teams while performing under intense pressure from hundreds , at times thousands, of patrons",
      "Track record of success multitasking in dynamic environments offering an array of skills in logical problem solving, optimizing processes & business operations"
    ],
  },
  {
    title: "Freelance Consultant",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Present",
    points: [
      "Complex, multifaceted role encompassing consultancy and leadership functions in support of a cutting-edge, growth-focused marketing environment",
      "Leverage expertise to drive brand adoption and retention for a diverse portfolio of lounges and restaurants throughout Washington D.C. via high-impact promotional and marketing programs.",
      "Provide bespoke training to company owners and employees to deliver meaningful business improvements, while also servicing leadership with targeted reports",
      "Blend creative vision with technical expertise to design and execute compelling multichannel marketing campaigns."
    ]
  },
  {
    title: "Product Manager",
    company_name: "The Block Foodhall",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2017 - Aug 2018",
    points: [
      "Founded and grew an innovative Social Media Marketing agency from scratch to sustained profitability. Having initially serviced multiple clients, owing to continued success, pivoted the company to support The Block Exclusively",
      " Effectively led manufacturers, engineers, and other graphic designers to source and develop exciting packaging, apparel, and physical store design, in addition to social media graphics, flyer's and promo graphics",
      "Partnered with key stakeholders to develop innovative experimental branding techniques & systems that consistently exceeded established KPI’s."
    ],
  },
  {
    title: "Jr. Real Estate Title Processor",
    company_name: "",
    icon: tesla,
    iconBg: "#fff",
    date: "Jan 2012 - June 2016",
    points: [
      "Worked under the mentorship of esteemed company owners to gain key insights into negotiations and contract analysis",
      "Facilitated seamless communications between 2-10 parties pertaining to 50-100 separate contracts each month."
    ],
  }
];


const projects = [
  {
    name: "Shoe Purchasing site",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent
  },
  {
    name: "High Fashion Earth",
    description:
      "An Informational site for a VA company that resales clothing",
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
    image: jobit
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide
  },
];

export { services, technologies, experiences, projects,overview };
