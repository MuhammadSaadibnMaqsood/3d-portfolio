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
    title: "Frontend Developer (React.js)",
    company_name: "K27 Clone & Gaming Website",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    iconBg: "#0a0a0a",
    date: "2025",
    points: [
      "Developed a responsive K27 clothing brand clone using React.js and Tailwind CSS with modern UI design principles.",
      "Built a fully responsive Gaming Website with interactive layouts and clean component structure.",
      "Implemented reusable components and optimized rendering performance for smooth user experience.",
      "Focused on responsive design, hover animations, and clean UI architecture for production-ready frontend applications.",
    ],
  },
  {
    title: "Frontend Project – URL Shortener",
    company_name: "Personal Project",
    icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
    iconBg: "#E6DEDD",
    date: "2026",
    points: [
      "Developed a URL Shortener web application with clean UI and simple user workflow.",
      "Implemented link input validation and dynamic rendering of shortened URLs.",
      "Focused on user-friendly interface design and responsive layout using modern CSS techniques.",
      "Structured the project with maintainable and scalable frontend architecture.",
    ],
  },
  {
    title: "Full Stack Developer (MERN)",
    company_name: "Velta – Competitive Learning",
    icon: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
    iconBg: "#0a0a0a",
    date: "OCTUBER 2025 - PRESENT",
    points: [
      "Developed a full-stack MERN platform where users can learn coding, solve problems, and compete with time-based challenges.",
      "Built secure authentication system with role-based access (Student & Admin dashboards).",
      "Designed MongoDB schemas and RESTful APIs using Express.js for scalable backend architecture.",
      "Integrated frontend React application with backend APIs for real-time data interaction.",
    ],
  },
  {
    title: "Software Engineering Student",
    company_name: "University",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
    iconBg: "#E6DEDD",
    date: "Ongoing",
    points: [
      "Studying core concepts including Data Structures, Algorithms, OOP, and Database Systems.",
      "Built academic projects in Java, ASP.NET MVC, and MERN stack.",
      "Applied software engineering principles like modularity, version control, and clean architecture.",
      "Continuously exploring modern web technologies and performance optimization techniques.",
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
