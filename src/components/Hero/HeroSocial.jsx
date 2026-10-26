import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";

const socialLinks = [
    {
        id: 1,
        icon: FaGithub,
        href: "https://github.com/atiurr07",
        label: "GitHub",
    },
    {
        id: 2,
        icon: FaLinkedinIn,
        href: "https://www.linkedin.com/in/atiurr-rahman07",
        label: "LinkedIn",
    },
    {
        id: 3,
        icon: FaInstagram,
        href: "https://instagram.com/your-instagram",
        label: "Instagram",
    },
    {
        id: 4,
        icon: Mail,
        href: "mailto:rahmanatiurr4@gmail.com",
        label: "Email",
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
    },
};

const HeroSocial = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="
                flex
                flex-wrap
                items-center
                gap-4
                sm:gap-5
            "
        >
            {socialLinks.map(({ id, icon: Icon, href, label }) => (
                <motion.a
                    key={id}
                    variants={itemVariants}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        y: -6,
                        scale: 1.08,
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 18,
                    }}
                    aria-label={label}
                    className="
                        group
                        relative

                        flex
                        h-12
                        w-12

                        sm:h-14
                        sm:w-14

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-white/10

                        bg-white/5

                        backdrop-blur-xl

                        text-slate-300

                        overflow-hidden

                        transition-all
                        duration-300

                        hover:border-cyan-400/60
                        hover:text-cyan-300
                        hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
                    "
                >
                    {/* Glow Background */}

                    <span
                        className="
                            absolute
                            inset-0
                            rounded-full
                            bg-gradient-to-br
                            from-cyan-500/10
                            via-blue-500/10
                            to-violet-500/10
                            opacity-0
                            group-hover:opacity-100
                            transition-opacity
                            duration-300
                        "
                    />

                    <Icon
                        size={20}
                        className="
                            relative
                            z-10
                            transition-all
                            duration-300
                            group-hover:rotate-6
                            group-hover:scale-110
                        "
                    />
                </motion.a>
            ))}
        </motion.div>
    );
};

export default HeroSocial;