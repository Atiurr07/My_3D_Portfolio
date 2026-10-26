import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
    const handleScroll = () => {
        const section = document.getElementById("about");

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <motion.button
            onClick={handleScroll}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay: 1.2,
            }}
            whileHover={{
                scale: 1.03,
            }}
            whileTap={{
                scale: 0.96,
            }}
            aria-label="Scroll to About Section"
            className="
                group
                inline-flex
                items-center
                gap-4

                text-slate-400

                transition-all
                duration-300

                hover:text-cyan-400
            "
        >
            {/* Mouse */}

            <div
                className="
                    relative

                    flex
                    h-14
                    w-8

                    justify-center

                    rounded-full

                    border-2
                    border-white/20

                    bg-white/5

                    backdrop-blur-xl

                    transition-all
                    duration-300

                    group-hover:border-cyan-400
                    group-hover:bg-cyan-500/5
                "
            >
                <motion.span
                    animate={{
                        y: [4, 22, 4],
                    }}
                    transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        absolute
                        top-2

                        h-2.5
                        w-2.5

                        rounded-full

                        bg-cyan-400

                        shadow-[0_0_12px_#22d3ee]
                    "
                />
            </div>

            {/* Text */}

            <div
                className="
                    hidden
                    sm:flex
                    flex-col
                    items-start
                "
            >
                <span
                    className="
                        text-xs
                        uppercase
                        tracking-[0.35em]
                        text-slate-500
                    "
                >
                    Scroll
                </span>

                <span
                    className="
                        mt-1
                        text-sm
                        font-medium
                        text-white
                    "
                >
                    Discover More
                </span>
            </div>

            {/* Arrow */}

            <motion.div
                animate={{
                    y: [0, 6, 0],
                }}
                transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    text-cyan-400
                "
            >
                <ChevronDown size={22} />
            </motion.div>
        </motion.button>
    );
};

export default ScrollIndicator;