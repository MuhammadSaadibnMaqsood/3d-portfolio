import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
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
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Architecture",
    icon: web,
  },
  {
    title: "Full-Stack (MERN)",
    icon: mobile,
  },
  {
    title: "Backend / Node.js",
    icon: backend,
  },
  {
    title: "Next.js Systems",
    icon: creator,
  },
];

const technologies = [
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
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
    name: "SupaBase",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28y_F_fqSBA5jWMYdru_JwbZnYgi3gOfZSg&s",
  },
  {
    name: "MySQL",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
  },
  {
    name: "Express",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLG-N028bTJp3uj9yWfv6QO-4C3t-m29FefA&s",
  },
  {
    name: "Next",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-uHO0JJy_liMD0bVPZPZrokmdGq2s038qA&s",
  },
];

const experiences = [
  {
    title: "Software Engineering Student",
    company_name: "IQRA university — Karachi",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
    iconBg: "#E6DEDD",
    date: "2023 — 2027",
    points: [
      "Started my journey into software engineering — diving deep into DSA, OOP, Database Systems, and core CS fundamentals.",
      "Built academic projects in Java, ASP.NET MVC, and eventually the MERN stack as skills kept growing.",
      "Applied clean architecture, version control, and modular design principles from the very beginning.",
      "Still going strong — balancing university in the mornings while building real-world projects on the side.",
    ],
  },
  {
    title: "Full Stack Developer (MERN)",
    company_name: "Web Development Era",
    icon: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
    iconBg: "#0a0a0a",
    date: "2024",
    points: [
      "2024 was the year everything clicked — went full stack with React, Node.js, MongoDB, Express, and TypeScript.",
      "Built Velta, a full-stack MERN competitive coding & learning platform with role-based auth and real-time features.",
      "Picked up Next.js, Supabase, Tailwind CSS, GSAP, and Framer Motion to level up the frontend game.",
      "Launched Khan & Sons — a client e-commerce store with a custom domain, and built a 3D portfolio with Three.js.",
    ],
  },
  {
    title: "Frontend Developer & Freelancer",
    company_name: "Fiverr — Self Employed",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Took the leap into professional work — co-founded a Fiverr team with four friends offering web dev, design & more.",
      "Shipped production-ready React & Next.js projects including a K27 clothing clone, gaming site, and URL shortener.",
      "Debugged and redesigned a Flask-based mobile tracking app for a client — first taste of real problem solving.",
    ],
  },
  {
    title: "Exploring AI & Machine Learning",
    company_name: "Self Learning & FYP",
    icon: "https://cdn-icons-png.flaticon.com/512/8637/8637101.png",
    iconBg: "#0a0a0a",
    date: "2026 — Present",
    points: [
      "Started a new chapter — learning Python, ML fundamentals, and Data Science through hands-on projects.",
      "Worked through Iris dataset classification, Boston Housing price prediction, and university Data Science coursework.",
      "Building GymMind — an AI-powered gym coach & progress tracker, selected as my Final Year Project with startup potential.",
      "Bridging full-stack development with AI/ML to build smarter, real-world applications for the future.",
    ],
  },
];

const projects = [
  {
    name: "Chat Application",
    description:
      "A real-time chat application built with MERN stack that supports user authentication, private & group chats, and instant messaging using WebSockets.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: "/chatapp.PNG",
    source_code_link: "https://github.com/MuhammadSaadibnMaqsood/Chat-app",
  },
  {
    name: "Aura",
    description:
      "An e-commerce platform that generates QR codes for receipts to simplify warranty claims. Features include product listing, cart, checkout, and a dashboard for shop owners.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
    ],
    image: "/Aura.PNG",
    source_code_link:
      "https://github.com/MuhammadSaadibnMaqsood/AURA-Ecommerce-Plateform",
  },
  {
    name: "K72",
    description:
      "A modern frontend project built with React, Tailwind, and GSAP animations, focusing on smooth transitions and interactive UI design.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "gsap",
        color: "pink-text-gradient",
      },
    ],
    image: "/k27.PNG",
    source_code_link: "https://github.com/MuhammadSaadibnMaqsood/K27-Clone",
  },
  {
    name: "Redefine Gaming",
    description:
      "A gaming-themed frontend website designed with GSAP animations and Tailwind CSS, delivering smooth animations and a highly engaging UI.",
    tags: [
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: "/redefine.PNG",
    source_code_link:
      "https://github.com/MuhammadSaadibnMaqsood/Gaming-Website",
  },
  {
    name: "URL-Shortner",
    description:
      "Bitlink is a trustable URL shortner app which help you to short your URL, build by using Nextjs, tailwind and gsap",
    tags: [
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "next",
        color: "pink-text-gradient",
      },
    ],
    image: "/url.PNG",
    source_code_link:
      "https://github.com/MuhammadSaadibnMaqsood/URL-Shortner",
  },
];

export { services, technologies, experiences, projects };
