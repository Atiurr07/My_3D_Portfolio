import { motion } from "framer-motion";
import useMouseParallax from "../../hooks/useMouseParallax";

import brain from "../../assets/images/hero/brain.webp";

const BrainImage = () => {
    const mouse = useMouseParallax(35);

    return (
        <motion.div
        initial={{
            opacity: 0,
            scale: 0.7,
        }}
        animate={{
            opacity: 1,
            scale: 1,
            x: mouse.x * 0.12,
            y: mouse.y * 0.12,
            rotate: mouse.x * 0.12,
        }}
        transition={{
            type: "spring",
            stiffness: 60,
            damping: 15,
        }}
        className="
            absolute
            top-[6%]
            right-[2%]
            md:top-[10%]
            md:right-[8%]
            lg:top-[12%]
            lg:right-[14%]
            z-40
            w-[80px]
            sm:w-[110px]
            md:w-[140px]
            lg:w-[170px]
            select-none
        "
        >
        {/* Brain Glow */}

        <motion.div
            animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.25, 1],
            }}
            transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            }}
            className="
            absolute
            left-1/2
            top-1/2
            -z-10
            h-[170px]
            w-[170px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-500/30
            blur-[70px]
            "
        />

        {/* Brain Image */}

        <motion.img
            src={brain}
            alt="AI Brain"
            draggable={false}
            whileHover={{
            scale: 1.08,
            rotate: 8,
            }}
            transition={{
            duration: 0.35,
            }}
            className="
            w-full
            object-contain
            drop-shadow-[0_20px_60px_rgba(168,85,247,0.65)]
            "
        />

        {/* Pulse Ring */}

        <motion.div
            animate={{
            scale: [1, 1.6, 1],
            opacity: [0.6, 0, 0.6],
            }}
            transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut",
            }}
            className="
            absolute
            left-1/2
            top-1/2
            h-[140px]
            w-[140px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-400/40
            "
        />

        {/* Small Orbit Dots */}

        <motion.div
            animate={{
            rotate: 360,
            }}
            transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            }}
            className="
            absolute
            inset-0
            "
        >
            <span
            className="
                absolute
                left-1/2
                top-0
                h-3
                w-3
                -translate-x-1/2
                rounded-full
                bg-cyan-400
                shadow-[0_0_15px_rgba(34,211,238,0.9)]
            "
            />

            <span
            className="
                absolute
                bottom-0
                left-1/2
                h-3
                w-3
                -translate-x-1/2
                rounded-full
                bg-fuchsia-400
                shadow-[0_0_15px_rgba(217,70,239,0.9)]
            "
            />

            <span
            className="
                absolute
                left-0
                top-1/2
                h-3
                w-3
                -translate-y-1/2
                rounded-full
                bg-sky-300
                shadow-[0_0_15px_rgba(125,211,252,0.9)]
            "
            />

            <span
            className="
                absolute
                right-0
                top-1/2
                h-3
                w-3
                -translate-y-1/2
                rounded-full
                bg-violet-400
                shadow-[0_0_15px_rgba(192,132,252,0.9)]
            "
            />
        </motion.div>

        {/* Top Shine */}

        <motion.div
            animate={{
            opacity: [0.2, 0.7, 0.2],
            x: [-8, 8, -8],
            }}
            transition={{
            duration: 3,
            repeat: Infinity,
            }}
            className="
            absolute
            left-8
            top-4
            h-3
            w-16
            rotate-[-20deg]
            rounded-full
            bg-white/40
            blur-sm
            "
        />
        </motion.div>
    );
};

export default BrainImage;
