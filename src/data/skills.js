import {
    SiPython,
    SiDjango,
    SiJavascript,
    SiReact,
    SiHtml5,
    SiCss,
    SiTailwindcss,
    SiNodedotjs,
    SiMysql,
    SiPostgresql,
    SiSqlite,
    SiMongodb,
    SiTensorflow,
    SiPytorch,
    SiOpencv,
    SiGit,
    SiGithub,
    SiDocker,
    SiLinux,
    SiPostman,
    SiFigma,
    SiGooglecloud,
    SiLangchain,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

export const skillCategories = [
    {
        id: 1,
        title: "Frontend",
        color: "#38BDF8",
        description:
            "Building responsive, interactive and modern user interfaces.",
        skills: [
            {
                name: "React",
                level: 92,
                icon: SiReact,
                color: "#61DAFB",
            },
            {
                name: "JavaScript",
                level: 90,
                icon: SiJavascript,
                color: "#F7DF1E",
            },
            {
                name: "HTML5",
                level: 95,
                icon: SiHtml5,
                color: "#E34F26",
            },
            {
                name: "CSS3",
                level: 92,
                icon: SiCss,
                color: "#1572B6",
            },
            {
                name: "Tailwind CSS",
                level: 95,
                icon: SiTailwindcss,
                color: "#06B6D4",
            },
        ],
    },

    {
        id: 2,
        title: "Backend",
        color: "#22C55E",
        description:
            "Developing scalable backend systems and RESTful APIs.",
        skills: [
            {
                name: "Python",
                level: 96,
                icon: SiPython,
                color: "#3776AB",
            },
            {
                name: "Django",
                level: 93,
                icon: SiDjango,
                color: "#0C4B33",
            },
            {
                name: "Django REST",
                level: 90,
                icon: SiDjango,
                color: "#A30000",
            },
            {
                name: "Node.js",
                level: 78,
                icon: SiNodedotjs,
                color: "#339933",
            },
        ],
    },

    {
        id: 3,
        title: "AI / ML",
        color: "#8B5CF6",
        description:
            "Building intelligent applications with Machine Learning, Deep Learning and Computer Vision.",
        skills: [
            {
                name: "TensorFlow",
                level: 82,
                icon: SiTensorflow,
                color: "#FF6F00",
            },
            {
                name: "PyTorch",
                level: 80,
                icon: SiPytorch,
                color: "#EE4C2C",
            },
            {
                name: "OpenCV",
                level: 92,
                icon: SiOpencv,
                color: "#5C3EE8",
            },
            {
                name: "LangChain",
                level: 68,
                icon: SiLangchain,
                color: "#1C3C3C",
            },
        ],
    },

    {
        id: 4,
        title: "Database",
        color: "#F59E0B",
        description:
            "Designing and managing reliable data storage systems.",
        skills: [
            {
                name: "MySQL",
                level: 90,
                icon: SiMysql,
                color: "#4479A1",
            },
            {
                name: "PostgreSQL",
                level: 82,
                icon: SiPostgresql,
                color: "#4169E1",
            },
            {
                name: "SQLite",
                level: 90,
                icon: SiSqlite,
                color: "#003B57",
            },
            {
                name: "MongoDB",
                level: 82,
                icon: SiMongodb,
                color: "#47A248",
            },
        ],
    },

    {
        id: 5,
        title: "Tools",
        color: "#06B6D4",
        description:
            "Modern development, deployment and collaboration workflow.",
        skills: [
            {
                name: "Git",
                level: 91,
                icon: SiGit,
                color: "#F05032",
            },
            {
                name: "GitHub",
                level: 92,
                icon: SiGithub,
                color: "#FFFFFF",
            },
            {
                name: "Docker",
                level: 72,
                icon: SiDocker,
                color: "#2496ED",
            },
            {
                name: "Linux",
                level: 82,
                icon: SiLinux,
                color: "#FCC624",
            },
            {
                name: "Postman",
                level: 90,
                icon: SiPostman,
                color: "#FF6C37",
            },
            {
                name: "Figma",
                level: 80,
                icon: SiFigma,
                color: "#F24E1E",
            },
        ],
    },

    {
        id: 6,
        title: "Cloud",
        color: "#60A5FA",
        description:
            "Exploring cloud infrastructure, deployment and scalable services.",
        skills: [
            {
                name: "AWS",
                level: 65,
                icon: FaAws,
                color: "#FF9900",
            },
            {
                name: "Google Cloud",
                level: 62,
                icon: SiGooglecloud,
                color: "#4285F4",
            },
        ],
    },
];

export const allSkills = skillCategories.flatMap((category) =>
    category.skills.map((skill) => ({
        ...skill,
        category: category.title,
        categoryColor: category.color,
    }))
);
