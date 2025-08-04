import project1 from "../assets/projects/project-5.jpeg";
import project2 from "../assets/projects/project-1.jpeg";
import project3 from "../assets/projects/project-2.jpeg";
import project4 from "../assets/projects/project-3.jpeg";
import project5 from "../assets/projects/project-4.jpeg";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `

I am an enthusiastic aspiring full stack developer with a strong interest in building robust and scalable web applications. Through my academic projects and self-learning, I have developed skills in front-end technologies like React , as well as back-end technologies like Node.js,Express.js and MongoDB. My goal is to leverage my foundational knowledge and passion for technology to contribute to innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile aspiring full stack developer with a passion for creating efficient and user-friendly web applications. Through my projects and self-learning, I have worked with technologies like React, Express.js, Node.js, TailwindCss, and MongoDB. My journey in web development started with a curiosity for how things work, and it has grown into a drive to learn and take on new challenges. I enjoy working in teams and solving complex problems to create high-quality solutions. Outside of coding, I like staying active and exploring new technologies.`;

export const PROJECTS = [
  {
    title: "PayZo",
    image: project6,
    description:
      "Payzo is a web application enabling real-time UPI-based peer-to-peer and via phone number or QR code. With OTP-secured authentication, instant wallet transfers, and integrated bank on-ramp/off-ramp, it delivers a seamless payment experience. Built with modular development and CI/CD pipelines, it features intuitive dashboards for wallet balances, transaction history, and portfolio insights, ensuring speed, security, and reliability.",

    technologies: [
      "NextJs",
      "Express",
      "TypeScript",
      "Prisma",
      "Postgres",
      "NeonDb",
    ],
    link: "https://payzoo.vercel.app/",
  },
  {
    title: "Inscribe",
    image: project1,
    description:
      "A full-stack blog platform using React, Tailwind CSS, and Hono with Prisma and PostgreSQL. Deployed on Cloudflare Workers with JWT authentication for scalability. Integrated Gemini API for summaries and published reusable NPM modules.",
    technologies: [
      "Vite",
      "TailwindCSS",
      "Hono",
      "Prisma",
      "PostgreSQL",
      "Cloudflare",
    ],
    link: "https://inscribe-7rjt4tax8-rohit-rajs-projects-70afee96.vercel.app/",
  },
  {
    title: "Real-Estate Website",
    image: project2,
    description:
      "A fully functional real-estate website with features like Google OAuth, CRUD operations, image uploading, image sliders, advanced search, and Redux for state management and persistence",
    technologies: [
      "React",
      "TailwindCSS",
      "Redux",
      "Node.js",
      "MongoDB",
      "Firebase",
    ],
    link: "https://dream-estate-i2u9.onrender.com",
  },
  {
    title: "Task Management App",
    image: project3,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://rohit-raj25.github.io/to-do/",
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TailwindCSS", "Material UI", "Tailwind"],
    link: "https://rohitcodes.me/",
  },
  {
    title: "Admin Dashboard",
    image: project5,
    description:
      "Static Enterprise React Admin Dashboard with Material UI, Nivo Charts, Formik, Yup, FullCalendar, Data Grid, and comprehensive features.",
    technologies: ["react", "TailwindCSS", "Material UI", "FullCalendar"],
    link: "https://admin-dashboard-chi-tawny.vercel.app/",
  },
];

export const CONTACT = {
  address: "Gurgaon , Haryana ",
  phoneNo: "+91 7827977202 ",
  email: "rohitraj250310@gmail.com",
};
