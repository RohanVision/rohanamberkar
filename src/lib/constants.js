// Skills Section Logo's
import htmlLogo from '../assets/skill_logo/html.png';
import cssLogo from '../assets/skill_logo/css.png';
import sassLogo from '../assets/skill_logo/sass.png';
import javascriptLogo from '../assets/skill_logo/javascript.png';
import reactjsLogo from '../assets/skill_logo/reactjs.png';
import reduxLogo from '../assets/skill_logo/redux.png';
import tailwindcssLogo from '../assets/skill_logo/tailwindcss.png';
import materialuiLogo from '../assets/skill_logo/materialui.png';
import bootstrapLogo from '../assets/skill_logo/bootstrap.png';
import nodejsLogo from '../assets/skill_logo/nodejs.png';
import expressjsLogo from '../assets/skill_logo/express.png';
import mongodbLogo from '../assets/skill_logo/mongodb.png';
import firebaseLogo from '../assets/skill_logo/firebase.png';
import typescriptLogo from '../assets/skill_logo/typescript.png';
import gitLogo from '../assets/skill_logo/git.png';
import vscodeLogo from '../assets/skill_logo/vscode.png';
import postmanLogo from '../assets/skill_logo/postman.png';
import figmaLogo from '../assets/skill_logo/figma.png';
import netlifyLogo from '../assets/skill_logo/netlify.png';

// Experience Section Logo's
import media_net from '../assets/company_logo/media_net.png';
import accenture from '../assets/company_logo/accenture.png'
import collabAce from '../assets/company_logo/collabAce.png';

// Project Section Logo's
import admin_dashboard from '../assets/projects/admin_dashboard.png';
import forkiFy from '../assets/projects/forkiFy.jpg';
import webArray from '../assets/projects/webArray.png';
import fast_food from '../assets/projects/fast_food.jpg';
import movieAi from '../assets/projects/movieAi.png';
import great_home from '../assets/projects/grate_home.png';
import mytube from '../assets/projects/mytube.png';
import gtavi from '../assets/projects/gtavi.png';

// Education Section Logo's
import conestoga_logo from "../assets/education_logo/conestoga_logo.png";
import mumbaiUniversity_logo from "../assets/education_logo/mumbaiUniversity_logo.png";

export const navItems = [
    {
        name: "About",
        href: "#about",
    },
    {
        name: "Skills",
        href: "#skills",
    },
    {
        name: "Experiences",
        href: "#experiences",
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Education",
        href: "#education",
    },
    {
        name: "Contact",
        href: "#contact",
    },
];

export const categories = ["all", "frontend", "backend", "tools"];

export const skillData = [
    // Frontend
    {
        name: "React",
        level: 90,
        category: "frontend",
        image: reactjsLogo,
    },
    {
        name: "JavaScript",
        level: 90,
        category: "frontend",
        image: javascriptLogo,
    },
    {
        name: "TypeScript",
        level: 85,
        category: "frontend",
        image: typescriptLogo,
    },
    {
        name: "Redux",
        level: 80,
        category: "frontend",
        image: reduxLogo,
    },
    {
        name: "HTML",
        level: 95,
        category: "frontend",
        image: htmlLogo,
    },
    {
        name: "CSS",
        level: 95,
        category: "frontend",
        image: cssLogo,
    },
    {
        name: "Tailwind CSS",
        level: 90,
        category: "frontend",
        image: tailwindcssLogo,
    },
    {
        name: "Bootstrap",
        level: 80,
        category: "frontend",
        image: bootstrapLogo,
    },
    {
        name: "Material UI",
        level: 80,
        category: "frontend",
        image: materialuiLogo,
    },
    {
        name: "SAAS",
        level: 80,
        category: "frontend",
        image: sassLogo,
    },

    // Backend
    {
        name: "Node.js",
        level: 80,
        category: "backend",
        image: nodejsLogo,
    },
    {
        name: "Express",
        level: 75,
        category: "backend",
        image: expressjsLogo,
    },
    {
        name: "MongoDB",
        level: 70,
        category: "backend",
        image: mongodbLogo,
    },

    // Tools
    {
        name: "Git/GitHub",
        level: 90,
        category: "tools",
        image: gitLogo,
    },
    {
        name: "Netlify",
        level: 70,
        category: "tools",
        image: netlifyLogo,
    },
    {
        name: "Figma",
        level: 85,
        category: "tools",
        image: figmaLogo,
    },
    {
        name: "VS Code",
        level: 95,
        category: "tools",
        image: vscodeLogo,
    },
    {
        name: "Firebase",
        level: 95,
        category: "tools",
        image: firebaseLogo,
    },
    {
        name: "Postman",
        level: 95,
        category: "tools",
        image: postmanLogo,
    },
];

export const experiences = [
    {
        id: 0,
        img: media_net,
        role: "Senior Frontend Engineer",
        company: "Media.net Software Services",
        date: "March 2020 –  June 2024",
        responsibilities: [
            "Collaborated with the product managers and designers to brainstorm on design and ship multiple features for clients like Yahoo and Forbes, creating modern web applications with React & Redux by referencing Figma designs.",
            "Managed Media.net's official website UI, orchestrating collaborative efforts across cross-functional teams to guarantee strict adherence to regulatory frameworks like CCPA, GDPR, and WCGA. Simultaneously, promoted ongoing optimization initiatives, which not only facilitated timely compliance but also led to 10% improvements in SEO rankings.",
            "Led the design and development of an internal data analysis tool, driving 6% user growth (1M to 1.06M) over a year by implementing data-driven features and conducting A/B testing to optimize user experience and get insights.",
            "Made the existing designs responsive and mobile-first for Yahoo and Forbes clients by implementing accelerated mobile pages, boosting the user experience, and resulting in a ~7% decrease in bounce rate.",
            "Created a simple CRM to handle data management in React by integrating a headless CMS (WordPress).",
            "Implemented unit & integration tests using Jest & React Testing Library, improving code reliability & maintainability."
        ]
    },
    {
        id: 1,
        img: accenture,
        role: "Frontend Developer ",
        company: "Accenture Solutions",
        date: "September 2018 – March 2020",
        responsibilities: [
            "Designed and implemented Merck website architecture with React and Redux, solving user experience challenges and reducing website loading time by 45%, achieving a 90+ SEO score in Lighthouse, and driving an 8% increase in organic traffic",
            "Collaborated with the product manager on the Product’s feature development and bug resolution to enhance cross-browser compatibility. ",
            "Increased end-to-end test coverage with Cypress, reducing bugs and improving customer flow.",
            "Enhanced front-end performance by optimizing asset loading and implementing code-splitting techniques by updating the rules in the Webpack configuration.",
            "Built landing pages, dashboards, and marketing materials to support client global campaigns in HTML and CSS.",
        ]
    },
    {
        id: 2,
        img: collabAce,
        role: "Frontend Developer ",
        company: "CollabAce Innovative Labs Pvt. Ltd",
        date: "October 2017 – September 2018",
        responsibilities: [
            "Created dozens of web pages converting Figma designs for email templates into HTML pages, styled using CSS3.",
            "Managed the frontend of the CollabAce website, ensuring compliance with CCPA, GDPR, and WCAG, leading to a 10% SEO improvement.",
            "Improved website performance and efficiency through code optimization by removing redundant code through functional programming, reusing functions, and reducing the JavaScript and CSS file sizes.",
        ]
    },
];

export const education = [
    {
        id: 0,
        img: conestoga_logo,
        school: "Conestoga College",
        date: "May 2023 - August 2024",
        grade: "3.85",
        desc: "A comprehensive undergraduate program specializing in Information Technology, equipping me with a strong foundation in programming, software development, and IT concepts. Gained practical experience through real-world projects, fostering the ability to apply theoretical knowledge in practical settings. Developed industry-relevant skills and knowledge to excel in IT roles.",
        degree: "Post Graduation Diploma - Web Developement",
    },
    {
        id: 1,
        img: mumbaiUniversity_logo,
        school: "University of Mumbai",
        date: "June 2015 - November 2017",
        grade: "A",
        desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
        degree: "Bachelor of Science - BSC (Information Technology)",
    },
];

export const projects = [
    {
        id: 0,
        title: 'Admin Dashboard',
        description:
            "A ReactJS A powerful dashboard that provides insights into user behavior, sales trends, and key performance indicators. Designed to help administrators make data-driven decisions through intuitive charts, filters, and reporting tools.",
        image: admin_dashboard,
        tags: ["JavaScript", "ReactJS", "API", "TailwindCSS", "FramerMotion"],
        github: "https://github.com/RohanVision/analytics-dashboard",
        webapp: "https://analytics-dashboard-seven-gamma.vercel.app/",
    },
    {
        id: 1,
        title: "Movies GPT",
        description:
            "A React-based web application powered by OPEN AI Api's search. Provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
        image: movieAi,
        tags: ["JavaScript", "React JS", "API", "OpenAI", "TailwindCSS", "Firebase"],
        github: "https://github.com/RohanVision/netflix-gpt",
        webapp: "https://netflisx-gpt.netlify.app/",
    },
    {
        id: 2,
        title: 'GTA VI - (for client)',
        description:
            "This is GSAP animation landing page which I build in ReactJS, tailwindCSS and GSAP animation for a client, the content and images I changed to one my favourite game GTA",
        image: gtavi,
        tags: ["React JS", "JavaScript", "GSAP", "TailwindCSS"],
        github: "https://github.com/RohanVision/gtavi_animation",
        webapp: "https://gtavi-animation.vercel.app/",
    },
    {
        id: 3,
        title: 'Fast Food App',
        description:
            "Fast Food is food delivery app which fetch data from Swiggy live API's and show products based on location, User can get recommedation based on ratings and Search Restaurants and add items to cart",
        image: fast_food,
        tags: ["React JS", "JavaScript", "Redux", "Swiggy API", "TailwindCSS"],
        github: "https://github.com/RohanVision/Namste-Rohan",
        webapp: "https://fast-foods-delivery.netlify.app/",
    },
    {
        id: 4,
        title: 'Web Array',
        description:
            "A landing page with interactive animations build for Ad tech client Web Array. Fully pixal perfect page build with HTML5, CSS3, and JavaScript. Followed strict adherence to regulatory frameworks like CCPA, GDPR, and WCGA. to achive best SEO practice",
        image: webArray,
        tags: ["JavaScript", "Animation", "HTML5", "CSS3"],
        github: "https://github.com/RohanVision/web_array",
        webapp: "https://web-array-ki52k7e0d-rohans-projects-82bbbe4c.vercel.app/",
    },
    {
        id: 5,
        title: 'Mytube Live',
        description:
            "A React application where user can wathch their favourait video and add comments and do live chat with other user. The focus of the app is on performance and implement React new hooks for scalablity and readability",
        image: mytube,
        tags: ["ReactJS", "JavaScript", "Redux", "Youtube API", "TailwindCSS"],
        github: "https://github.com/RohanVision/youtube-app",
        webapp: "https://youtube-app-omega-five.vercel.app/",
    },
    {
        id: 6,
        title: 'Great Homes',
        description:
            "A Full Stack web application using ReactJS and NodeJS that provides House recommendations based on different criteria, such as location, user preferences, and many more. The intuitive design and smooth experience make it a go-to app for buyer to directly connect with Seller.",
        image: great_home,
        tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/RohanVision/forkifyApp-rohan",
        webapp: "https://greathomes.onrender.com/",
    },
    {
        id: 7,
        title: 'Forkify Food App',
        description:
            "A simple Food app where user can search for food and make there own recipe according to there preference",
        image: forkiFy,
        tags: ["JavaScript", "HTML", "CSS", "API"],
        github: "https://github.com/RohanVision/forkifyApp-rohan",
        webapp: "https://rohan-forkifyapp.netlify.app/",
    },
];  