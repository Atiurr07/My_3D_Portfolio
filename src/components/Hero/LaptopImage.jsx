import { motion } from "framer-motion";
import useMouseParallax from "../../hooks/useMouseParallax";

import laptop from "../../assets/images/hero/laptop.webp";

const LaptopImage = () => {
    const mouse = useMouseParallax(18);

    return (
        <motion.div
        initial={{
            opacity: 0,
            scale: 0.8,
            y: 40,
        }}
        animate={{
            opacity: 1,
            scale: 1,
            x: mouse.x * 0.55,
            y: mouse.y * 0.55,
            rotate: mouse.x * 0.08,
            
        }}
        transition={{
            type: "spring",
            stiffness: 55,
            damping: 15,
        }}
        className="
            absolute
            left-1/2
            top-1/2
            z-30
            w-[220px]
            sm:w-[240px]
            md:w-[340px]
            lg:w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            select-none
        "
        >
        {/* Glow Behind Laptop */}

        <motion.div
            animate={{
            opacity: [0.35, 0.7, 0.35],
            scale: [1, 1.15, 1],
            }}
            transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            }}
            className="
            absolute
            left-1/2
            top-1/2
            -z-10
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/30
            blur-[90px]
            "
        />

        {/* Laptop Image */}

        <motion.img
            src={laptop}
            alt="Laptop"
            draggable={false}
            whileHover={{
            scale: 1.05,
            rotate: -2,
            }}
            transition={{
            duration: 0.35,
            }}
            className="
            w-full
            object-contain
            drop-shadow-[0_35px_80px_rgba(0,255,255,0.45)]
            "
        />

        {/* Reflection */}

        <div
            className="
            absolute
            bottom-4
            left-1/2
            h-10
            w-[70%]
            -translate-x-1/2
            rounded-full
            bg-cyan-400/20
            blur-2xl
            "
        />

        {/* Floating Highlight */}

        <motion.div
            animate={{
            opacity: [0.2, 0.8, 0.2],
            x: [-15, 15, -15],
            }}
            transition={{
            duration: 4,
            repeat: Infinity,
            }}
            className="
            absolute
            left-8
            top-6
            h-4
            w-24
            rotate-[-20deg]
            rounded-full
            bg-white/40
            blur-md
            "
        />
        </motion.div>
    );
};

export default LaptopImage;
