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
    title: "Frontend Web Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Javascript + C",
    icon: backend,
  },
  {
    title: "UI/UX Enthusiast",
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
];

const experiences = [
  {
    title: "Frontend Developer (React.js)",
    company_name: "Portfolio Projects",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxbm2yC0lj9EECY3ypc2guxE1GiKz6qrd9rQ&s",
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Developed responsive and interactive web applications using React.js and Tailwind CSS.",
      "Implemented reusable components and optimized state management for smooth UI performance.",
      "Integrated APIs for dynamic content rendering and improved application functionality.",
      "Built personal projects showcasing skills in frontend web development.",
    ],
  },
  {
    title: "Full Stack Developer (MERN)",
    company_name: "Portfolio Projects",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbn0htLAxjs_uWGTyEwszKlGWfgwad0VzHCA&s",
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Developed a MERN stack project with user authentication and CRUD functionality.",
      "Designed and implemented database schemas in MongoDB for structured data storage.",
      "Created REST APIs using Express.js and integrated them with frontend React applications.",
      "Ensured responsive and mobile-friendly design using Tailwind CSS.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "Fiverr / Self Practice",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTdRurK_12ESbJlmq7m5aqSqT-jM821SQ7ow&s",
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Designed YouTube thumbnails, edited photos, and built small frontend websites for clients.",
      "Worked on real-world tasks like landing pages and e-commerce layouts.",
      "Collaborated with clients to deliver requirements on time with good communication.",
      "Gained experience in problem-solving and handling projects independently.",
    ],
  },
  {
    title: "Software Engineering Student",
    company_name: "University",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsUSWVE__I8VfKcYDurdouvHON1GLFv_1bKw&s", // education ka icon dal lena
    iconBg: "#E6DEDD",
    date: "Ongoing",
    points: [
      "Studying core concepts like Data Structures, Algorithms, and Object-Oriented Programming.",
      "Built multiple academic projects to strengthen programming fundamentals.",
      "Explored modern frameworks including ASP.NET MVC and MERN stack.",
      "Passionate about learning new technologies and creating impactful digital solutions.",
    ],
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
];

export { services, technologies, experiences, testimonials, projects };
