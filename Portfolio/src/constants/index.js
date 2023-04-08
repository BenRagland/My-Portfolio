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

const experiences = [
  {
    title: "Junior Title Processor",
    company_name: "",
    icon: "",
    iconBg: "#383E56",
    date: "Jan 2012 - June 2016",
    points: [
      "Worked under the mentorship of esteemed company owners to gain key insights into negotiations and contract analysis"
      "Facilitated seamless communications between 2-10 parties pertaining to 50-100 separate contracts each month."
    ],
  },
  {
    title: "The Block Food Hall",
    company_name: "Product Marketing",
    icon: "",
    iconBg: "#E6DEDD",
    date: "Jan 2017 - Aug 2018",
    points: [
      "Founded and grew an innovative Social Media Marketing agency from scratch to sustained profitability. Having initially serviced multiple clients, owing to continued success, pivoted the company to support The Block Exclusively"
      " Effectively led manufacturers, engineers, and other graphic designers to source and develop exciting packaging, apparel, and physical store design, in addition to social media graphics, flyer's and promo graphics"
      "Partnered with key stakeholders to develop innovative experimental branding techniques & systems that consistently exceeded established KPI’s."
    ],
  },
  {
    title: "Hospitality",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2010 - Present",
    points: [
      "Trained extensively in hospitality service with many notable brands including RPM Italian, 12 Stories, Casamigos, Martell and Jameson."
      "Spearheaded food and beverage teams while performing under intense pressure from hundreds , at times thousands, of patrons"
      "Track record of success multitasking in dynamic environments offering an array of skills in logical problem solving, optimizing processes & business operations"
    ],
  },
  {
    title: "Freelance Consultant",
    company_name: "",
    icon: "",
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Present",
    points: [
      "Complex, multifaceted role encompassing consultancy and leadership functions in support of a cutting-edge, growth-focused marketing environment"
      "Leverage expertise to drive brand adoption and retention for a diverse portfolio of lounges and restaurants throughout Washington D.C. via high-impact promotional and marketing programs."
      "Provide bespoke training to company owners and employees to deliver meaningful business improvements, while also servicing leadership with targeted reports"
      "Blend creative vision with technical expertise to design and execute compelling multichannel marketing campaigns."
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
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
    image: carrent,
    source_code_link: "https://github.com/",
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
    image: jobit,
    source_code_link: "https://github.com/",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
