// Portfolio data
export const experienceData = [
  {
    id: 1,
    title: "Software Developer",
    company: "Legal Tunnel LLP",
    duration: "March 2025 - June 2025",
    type: "Full-time",
    description:
      "Inst Legal is a tech-driven law firm streamlining legal documentation, drafting, and filing to make legal services more accessible and affordable.",
    responsibilities: [
      "Built responsive and optimized UIs using Next.js, React.js, Tailwind CSS, and DaisyUI, improving page load time by 30%.",
      "Developed scalable REST APIs with Python FastAPI and PostgreSQL",
      "Deployed services on AWS and managed environments using Linux, ensuring 99.9% uptime.",
      "Collaborated across teams to deliver end-to-end features, boosting development efficiency by 25%.",
    ],
    techStack: [
      { name: "React", icon: "⚛️" },
      { name: "JavaScript", icon: "🟨" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Node.js", icon: "🟢" },
      { name: "Next.js", icon: "⚫" },
    ],
    image: "/api/placeholder/400/250",
    projectName: "ChicChat: Connect Seamlessly in Real-Time",
  },
  {
    id: 2,
    title: "Junior Frontend Developer",
    company: "Arm Education Opc Pvt Limited",
    duration: "September 2023 - August 2024",
    type: "Full-time",
    description:
      "Developed dynamic and responsive web applications using Angular and React, ensuring a seamless user experience.",
    responsibilities: [
      "Developed dynamic and responsive web applications using Angular and React, ensuring a seamless user experience.",
      "Integrated robust authentication and authorization features using Keycloak in both React and Next.js environments, ensuring secure user access.",
      "Worked on the migration project from PHP to Java using Maven, with JUnit testing, Java Collections Framework, and XML for configuration and data handling.",
    ],
    techStack: [
      { name: "React", icon: "⚛️" },
      { name: "Angular", icon: "🅰️" },
      { name: "JavaScript", icon: "🟨" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Node.js", icon: "🟢" },
      { name: "Next.js", icon: "⚫" },
      { name: "Java", icon: "☕" },
    ],
    image: "/api/placeholder/400/250",
    projectName: "ChicChat: Connect Seamlessly in Real-Time",
  },
  {
    id: 3,
    title: "Junior Frontend Developer",
    company: "Arm Education Opc Pvt Limited",
    duration: "March 2023 - August 2023",
    type: "Internship",
    description:
      "Developed web applications using React.js, Next.js, and various UI libraries including Tailwind UI, Ant Design, and Material UI.",
    responsibilities: [
      "Developed web applications using React.js, Next.js, and various UI libraries including Tailwind UI, Ant Design, and Material UI, ensuring modern and user-friendly interfaces.",
      "Integrated third-party APIs to extend application functionalities and developed backend services using Next Auth, providing secure authentication solutions.",
      "Enhanced application performance and user experience by leveraging state-of-the-art tools and technologies.",
    ],
    techStack: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "⚫" },
      { name: "JavaScript", icon: "🟨" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Node.js", icon: "🟢" },
      { name: "Tailwind", icon: "🎨" },
      { name: "Material UI", icon: "🎯" },
    ],
    image: "/api/placeholder/400/250",
    projectName: "Discord Clone Application",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Rise Stream",
    subtitle: "Manage tasks with ease and collaboration",
    description:
      "IntelliDo helps you organize your daily tasks, collaborate with team members, and stay productive with a beautiful and intuitive interface.",
    longDescription: "",
    techStack: [
      { name: "Next.js", icon: "⚛️", color: "bg-blue-100 text-blue-800" },
      { name: "Node.js", icon: "🟢", color: "bg-green-100 text-green-800" },
      { name: "PostgreSQL", icon: "🐘", color: "bg-blue-100 text-blue-800" },
      { name: "Express", icon: "🚀", color: "bg-gray-100 text-gray-800" },
      { name: "TypeScript", icon: "🔷", color: "bg-blue-100 text-blue-800" },
      { name: "Tailwind", icon: "🎨", color: "bg-cyan-100 text-cyan-800" },
    ],
    image: "/images/riseStream/first.png",
    demoUrl: "https://rise-stream-fe.vercel.app/sign-in",
    githubUrl: "https://github.com/anurag2169/rise-stream-fe",
    features: [
      "Video upload and streaming",
      "User authentication and profiles",
      "Personalized recommendations",
      "Real-time comments and likes",
      "Responsive design",
    ],
    category: "Full Stack",
    status: "Completed",
  },
  {
    id: 2,
    title: "Intellido",
    subtitle: "Smart AI-Driven Task Collaboration Platform",
    description:
      "Intellido is a collaborative task management platform that enables teams to organize, share, and automate tasks effortlessly.",
    longDescription:
      "Intellido is a full-stack AI-powered to-do management platform where users can create, share, and manage tasks across teams. It integrates Clerk for authentication, NeonDB for scalable storage, and AI Copilot Kit to automate repetitive work like bulk task creation and prioritization. Built with Next.js and TypeScript, it delivers real-time updates and seamless collaboration for productivity-focused teams.",
    techStack: [
      { name: "Next.js", icon: "⚛️", color: "bg-blue-100 text-blue-800" },
      { name: "Express js", icon: "🐍", color: "bg-yellow-100 text-yellow-800" },
      { name: "TypeScript", icon: "🟦", color: "bg-blue-100 text-blue-800" },
      { name: "Prisma", icon: "📊", color: "bg-indigo-100 text-indigo-800" },
      { name: "NeonDB", icon: "🟢", color: "bg-green-100 text-green-800" },
      { name: "Clerk", icon: "🔐", color: "bg-purple-100 text-purple-800" },
      { name: "Webhooks", icon: "🔔", color: "bg-pink-100 text-pink-800" },
      { name: "Vercel", icon: "☁️", color: "bg-gray-100 text-gray-800" },
      {
        name: "AI Copilot Kit",
        icon: "🤖",
        color: "bg-purple-100 text-purple-800",
      },
    ],
    image: "/images/intellido.png",
    demoUrl: "https://intellido.vercel.app/",
    githubUrl: "https://github.com/anurag2169/ai-todo-saas",
    features: [
      "Collaborative to-do platform with email-based task sharing and real-time updates",
      "AI Copilot Kit for bulk task automation, prioritization, and smart suggestions",
      "Full-stack build with Next.js, Prisma, NeonDB, Clerk authentication, and FastAPI backend",
    ],
    category: "Full Stack",
    status: "Completed",
  },
  {
    id: 3,
    title: "ChaiCode Landing Page",
    subtitle: "Modern, Animated Landing Page for a Learning Platform",
    description:
      "Designed and developed a high-performance, animation-rich landing page for ChaiCode, a professional tech learning platform, optimized for engagement and responsiveness.",
    longDescription:
      "ChaiCode Landing Page is a visually dynamic, interactive, and fully responsive website built to showcase the ChaiCode learning platform. The page integrates smooth animations, fast-loading components, and modern UI practices with Tailwind CSS. Optimized for conversions, it delivers a polished user experience and serves as a key promotional tool for the platform.",
    techStack: [
      { name: "Next.js", icon: "⚛️", color: "bg-blue-100 text-blue-800" },
      { name: "TypeScript", icon: "🔷", color: "bg-blue-100 text-blue-800" },
      { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 text-cyan-800" },
      {
        name: "Framer Motion",
        icon: "🎞️",
        color: "bg-purple-100 text-purple-800",
      },
      { name: "Vercel", icon: "☁️", color: "bg-gray-100 text-gray-800" },
    ],
    image: "/images/chaicode.png",
    demoUrl: "https://chaiaurcode-anurag.vercel.app/",
    githubUrl: "https://github.com/anurag2169/chaiCodeLandingPage",
    features: [
      "Responsive, mobile-first design with smooth animations",
      "Built using Next.js and Tailwind CSS for speed and performance",
      "Interactive UI elements powered by Framer Motion",
      "SEO-friendly architecture for better discoverability",
      "Deployed on Vercel with lightning-fast load times",
    ],
    category: "Frontend",
    status: "Completed",
  },
  {
    id: 4,
    title: "CrackIt",
    subtitle: "DSA Learning Platform",
    description:
      "CrackIt is a dedicated DSA learning platform where users can explore and practice company-wise DSA interview questions with an intuitive, modern interface.",
    longDescription:
      "CrackIt is a platform designed for developers preparing for technical interviews. It offers company-specific DSA questions, categorized challenges, and an easy-to-use interface built with React, ShadCN, Radix UI, and Tailwind CSS. The app is deployed on Render and focuses on helping users systematically prepare for coding interviews with clean UI and seamless navigation.",
    techStack: [
      { name: "React", icon: "⚛️", color: "bg-blue-100 text-blue-800" },
      { name: "ShadCN", icon: "🛠️", color: "bg-purple-100 text-purple-800" },
      { name: "Radix UI", icon: "🎛️", color: "bg-orange-100 text-orange-800" },
      { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 text-cyan-800" },
      { name: "TypeScript", icon: "🔷", color: "bg-blue-100 text-blue-800" },
      { name: "Render", icon: "☁️", color: "bg-gray-100 text-gray-800" },
    ],
    image: "/images/crackit.png",
    demoUrl: "https://crackit-0937.onrender.com/",
    githubUrl: "https://github.com/anurag2169/crackit-dsa",
    features: [
      "Company-wise categorized DSA questions for interview preparation",
      "Clean and responsive UI built with ShadCN, Radix UI, and Tailwind CSS",
      "Organized problem sets with filtering and search capabilities",
      "Fast and lightweight deployment on Render",
      "Built to help developers systematically practice and track progress",
    ],
    category: "Education",
    status: "Completed",
  },
];

export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      "React",
      "Angular",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Java",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    name: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Figma", "Postman", "Jest", "Webpack"],
  },
];
