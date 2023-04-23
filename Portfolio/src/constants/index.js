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
    company_name: "Many Notable Brands",
    icon: logo,
    iconBg: "#383E56",
    date: "Jan 2010 - Present",
    points: [
      "Trained extensively fine etiquette & communication with many notable brands including RPM Italian, 12 Stories, Casamigos and  Martell.",
      "Managed teams of service employees while tracking company kpi's in all sectors of the business.",
      "Track record of success multitasking in dynamic environments offering an array of skills for over 10 years."
    ],
  },
  {
    title: "Freelance Consultant",
    company_name: "Self-Emplyed",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Present",
    points: [
      "Leveraging marketing & hospitality expertise with technical know how to drive brand adoption and retention for a diverse portfolio of lounges and restaurants throughout Washington D.C. ",
      "Provide bespoke training to company owners and employees to imporve business efficiency & S.O.P's",
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
      "Founded a weekly event that grew into a product role, supporting 'The Block' brand Exclusively",
      "Kicked Off Nightlife & Special Events program ",
      " Effectively led manufacturers, engineers, and other graphic designers to source and develop exciting packaging, apparel, and physical store design, in addition to social media graphics, flyer's and promo graphics",
      "Partnered with key stakeholders to develop innovative experimental branding techniques & systems that consistently exceeded established KPI’s."
    ],
  },
  {
    title: "Engineering Intern",
    company_name: "Martin Horne",
    icon: logo,
    iconBg: "#fff",
    date: "Jul 2013 - Sept 2013",
    points: [
      "Honed skill in Autodesk 3d CAD drafting",
      "Gained fist hand insight to many industry challenges & solutions via walking over a dozen sites"
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
