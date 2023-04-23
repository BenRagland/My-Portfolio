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
  carrent,
  whiteLabelSS,
  threejs,
  backend,
  logo,
  HighFashionEarth
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
    title: "Graphic Designer",
    icon: mobile,
  },
  {
    title: "Strategic Marketer",
    icon: creator,
  },
  {
    title: "Business Strategist",
    icon: backend,
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
    name: "Tailwind",
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
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const overviewP1 = `I'm a passionate software developer with a keen eye for design and 
                  spotting growth opportunities. I'm dedicated to delivering efficient, user-friendly, beautiful solutions
                  that make meaningful impact.`

const overviewP2= `Whether designing intuitive user interfaces
                  or creating a product to grasp a new market, I am always eager to tackle new challenges and
                  come up with innovative solutions. With my commitment to continuous learning, I'm confident 
                  that I can bring value to any project and help drive its success.  Let's work 
                  together to bring your ideas to life! `


const experiences = [
  {
    title: "Hospitality",
    company_name: "Hospitality",
    icon: logo,
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
    icon: logo,
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
    icon: logo,
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
    icon: logo,
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
    name: "High Fashion Earth",
    description:
      "An exciting new company in Arlington, VA that purchases and resales high end clothing. Promoting sustainability and Quality over quantity.",
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
    image: HighFashionEarth
  },
  {
    name: "White Label Website",
    description:
      "A project allowing you to customize and download a mockup a t-shirt with any logo, color, or art piece rendered by an A.I image creator. ",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "threeJs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: whiteLabelSS
  },
];

export { services, technologies, experiences, projects,overviewP1,overviewP2 };
