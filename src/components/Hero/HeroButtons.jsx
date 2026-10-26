import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const HeroButtons = () => {
    return (
        <div
            className="
                flex
                flex-col
                sm:flex-row
                items-stretch
                sm:items-center
                gap-4
                w-full
                sm:w-auto
            "
        >
            {/* Primary Button */}

            <motion.a
                href="#projects"
                whileHover={{
                    scale: 1.04,
                    y: -4,
                }}
                whileTap={{
                    scale: 0.97,
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                }}
                className="
                    group
                    relative
                    overflow-hidden

                    inline-flex
                    items-center
                    justify-center
                    gap-3

                    h-14
                    px-8

                    rounded-2xl

                    bg-gradient-to-r
                    from-cyan-500
                    via-blue-600
                    to-violet-600

                    text-white
                    font-semibold
                    tracking-wide

                    shadow-[0_15px_45px_rgba(59,130,246,0.45)]

                    transition-all
                    duration-300
                "
            >
                <span className="relative z-10">
                    View My Work
                </span>

                <ArrowRight
                    size={18}
                    className="
                        relative
                        z-10
                        transition-transform
                        duration-300
                        group-hover:translate-x-1.5
                    "
                />

                {/* Shine Effect */}

                <span
                    className="
                        absolute
                        inset-0
                        -translate-x-full
                        bg-gradient-to-r
                        from-transparent
                        via-white/20
                        to-transparent
                        group-hover:translate-x-full
                        transition-transform
                        duration-700
                    "
                />
            </motion.a>

            {/* Secondary Button */}

            <motion.a
                href="/resume.pdf"
                download
                whileHover={{
                    scale: 1.04,
                    y: -4,
                }}
                whileTap={{
                    scale: 0.97,
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                }}
                className="
                    group

                    inline-flex
                    items-center
                    justify-center
                    gap-3

                    h-14
                    px-8

                    rounded-2xl

                    border
                    border-cyan-400/25

                    bg-white/5

                    backdrop-blur-xl

                    text-white
                    font-semibold
                    tracking-wide

                    transition-all
                    duration-300

                    hover:border-cyan-400
                    hover:bg-cyan-500/10
                    hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
                "
            >
                <Download
                    size={18}
                    className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-1
                    "
                />

                Download CV
            </motion.a>
        </div>
    );
};

export default HeroButtons;