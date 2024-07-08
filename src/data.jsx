import { nanoid } from "nanoid";
import { FaNode, FaFigma, FaReact, FaNodeJs } from "react-icons/fa";
import dramKit from "./assets/dram-kit.png";
import workout from "./assets/workout.png";

export const links = [
  // { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "expertise" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#testimonials", text: "testimonial" },
  { id: nanoid(), href: "#contact", text: "contact-me" },
];

export const skills = [
  {
    id: nanoid(),
    title: "Front-End",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled frontend developer with expertise in HTML, CSS, TailwindCSS, Bootstrap, and React. My proficiency in these technologies allows me to create responsive, user-friendly, and visually appealing web applications, ensuring optimal performance and seamless user experiences.",
  },
  {
    id: nanoid(),
    title: "Back-End",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in  backend developer specializing in Node.js and Express.js, with a strong command of MongoDB for database management. I am proficient in implementing JWT for secure authentication, ensuring robust and scalable server-side applications.",
  },
  {
    id: nanoid(),
    title: "UI & UX Design",
    icon: <FaFigma className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in UI and UX design, with a keen eye for detail and a strong understanding of user-centered design principles. My skills in wireframing, prototyping, and usability testing enable me to create intuitive and engaging interfaces that enhance the overall user experience",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: dramKit,
    url: "https://muhasin-m.github.io/Drum-Kit/",
    github: "https://github.com/muhasin-m/Drum-Kit",
    title: "Fröhliche Weihnachten - Drum Kit",
    text: "Fröhliche Weihnachten is a fun and interactive drum kit project built using HTML, CSS, and JavaScript. This project allows users to play different drum sounds by either pressing keyboard keys or clicking on specific letters on the screen. It was created as a practice exercise to improve JavaScript skills.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    github: "https://github.com/muhasin-mahmud/social-media",
    title: "first project",
    text: "A social media application using the MERN stack (MongoDB, Express.js, React, and Node.js). The app allows users to create profiles, share posts, follow other users, and engage with content through likes and comments. It features real-time updates, secure authentication with JWT, and a responsive design for optimal user experience across all devices.",
  },
  {
    id: nanoid(),
    img: workout,
    url: "/",
    github: "https://github.com/muhasin-m/mern-stack_workout-project",
    title: "MERN - Workout Buddy",
    text: "This project is a MERN stack workout application, built with React, Node.js, Express.js, and MongoDB. It features JWT authentication, user login, and registration, allowing users to individually add and track their workouts. The application boasts a responsive design, ensuring a seamless experience across all devices.",
  },
];
