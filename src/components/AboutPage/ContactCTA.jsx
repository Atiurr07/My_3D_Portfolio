import { motion } from "framer-motion";
import {
    ArrowRight,
    Mail,
    Download,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

const ContactCTA = () => {
    const socialLinks = [
        {
            id: 1,
            title: "GitHub",
            icon: FaGithub,
            href: "https://github.com/Atiurr07",
        },
        {
            id: 2,
            title: "LinkedIn",
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/atiurr-rahman07/",
        },
        {
            id: 3,
            title: "Email",
            icon: Mail,
            href: "mailto:rahmanatiurr4@gmail.com",
        },
    ];

    return (
        <section
            id="contact-cta"
            className="relative overflow-hidden py-32"
        >
            {/* ================= Background Glow ================= */}

            <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="relative mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 60,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: false,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="
                        relative
                        overflow-hidden
                        rounded-[42px]
                        border
                        border-cyan-400/20
                        bg-gradient-to-br
                        from-cyan-500/10
                        via-[#08111f]
                        to-violet-500/10
                        p-10
                        md:p-16
                        backdrop-blur-3xl
                    "
                >
                    {/* Reflection */}

                    <motion.div
                        animate={{
                            x: ["-150%", "180%"],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="
                            pointer-events-none
                            absolute
                            inset-y-0
                            left-0
                            w-28
                            skew-x-[-25deg]
                            bg-gradient-to-r
                            from-transparent
                            via-white/10
                            to-transparent
                        "
                    />

                    {/* Status Badge */}

                    <motion.div
                        animate={{
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                        className="
                            inline-flex
                            items-center
                            gap-3
                            rounded-full
                            border
                            border-green-400/30
                            bg-green-500/10
                            px-5
                            py-2
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[3px]
                            text-green-300
                        "
                    >
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                        Available for Opportunities
                    </motion.div>

                    {/* Heading */}

                    <h2
                        className="
                            mt-8
                            max-w-4xl
                            text-4xl
                            font-black
                            leading-tight
                            text-white
                            md:text-6xl
                        "
                    >
                        Let's Build Something
                        <span className="text-cyan-400">
                            {" "}Extraordinary
                        </span>
                    </h2>

                    <p
                        className="
                            mt-8
                            max-w-3xl
                            text-lg
                            leading-9
                            text-slate-300
                        "
                    >
                        I'm actively looking for opportunities where I can
                        contribute as a Python Full Stack Engineer, AI/ML
                        Engineer, or Software Developer. If you're building
                        something impactful, I'd love to collaborate.
                    </p>

                    {/* CTA Buttons */}

                    <div className="mt-12 flex flex-wrap gap-5">

                        <motion.a
                            href="mailto:rahmanatiurr4@gmail.com"
                            whileHover={{
                                scale: 1.05,
                                y: -3,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            className="
                                inline-flex
                                items-center
                                gap-3
                                rounded-xl
                                bg-gradient-to-r
                                from-cyan-500
                                via-blue-600
                                to-violet-600
                                px-8
                                py-4
                                font-semibold
                                text-white
                                shadow-[0_15px_40px_rgba(34,211,238,0.25)]
                            "
                        >
                            Get In Touch

                            <ArrowRight size={18} />
                        </motion.a>

                        <motion.a
                            href="/resume.pdf"
                            download
                            whileHover={{
                                scale: 1.05,
                                y: -3,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            className="
                                inline-flex
                                items-center
                                gap-3
                                rounded-xl
                                border
                                border-cyan-400/30
                                bg-white/5
                                px-8
                                py-4
                                font-semibold
                                text-white
                                backdrop-blur-xl
                            "
                        >
                            Download Resume

                            <Download size={18} />
                        </motion.a>

                    </div>

                    {/* Social Links */}

                    <div className="mt-14 flex flex-wrap gap-5">

                        {socialLinks.map((item) => {

                            const Icon = item.icon;

                            return (

                                <motion.a
                                    key={item.id}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{
                                        y: -6,
                                        scale: 1.08,
                                    }}
                                    whileTap={{
                                        scale: 0.95,
                                    }}
                                    className="
                                        flex
                                        h-16
                                        w-16
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/10
                                        bg-white/5
                                        text-white
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                        hover:border-cyan-400
                                        hover:text-cyan-400
                                        hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
                                    "
                                >
                                    <Icon size={24} />
                                </motion.a>

                            );

                        })}

                    </div>

                </motion.div>

            </div>

            {/* Floating Particles */}

            {[...Array(14)].map((_, index) => (

                <motion.div
                    key={index}
                    animate={{
                        y: [0, -50, 0],
                        opacity: [0.15, 0.5, 0.15],
                    }}
                    transition={{
                        duration: 6 + index,
                        repeat: Infinity,
                        delay: index * 0.4,
                    }}
                    className="
                        absolute
                        rounded-full
                        bg-cyan-400/20
                        blur-sm
                    "
                    style={{
                        width: 5 + Math.random() * 8,
                        height: 5 + Math.random() * 8,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />

            ))}

        </section>
    );
};

export default ContactCTA;