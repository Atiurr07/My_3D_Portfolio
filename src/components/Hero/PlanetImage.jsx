import { motion } from "framer-motion";
import useMouseParallax from "../../hooks/useMouseParallax";

import planet from "../../assets/images/hero/planet.webp";

const PlanetImage = () => {
    const mouse = useMouseParallax(12);

    return (
        <motion.div
        initial={{
            opacity: 0,
            scale: 0.6,
        }}
        animate={{
            opacity: 1,
            scale: 1,
            x: mouse.x * 0.05,
            y: mouse.y * 0.05,
        }}
        transition={{
            type: "spring",
            stiffness: 35,
            damping: 20,
        }}
        className="
            absolute
            left-[2%]
            bottom-[4%]
            md:left-[5%]
            md:bottom-[7%]
            lg:left-[8%]
            lg:bottom-[10%]
            z-20
            w-[90px]
            sm:w-[120px]
            md:w-[150px]
            lg:w-[180px]
            select-none
        "
        >
        {/* Planet Glow */}

        <motion.div
            animate={{
            opacity: [0.25, 0.65, 0.25],
            scale: [1, 1.25, 1],
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
            h-[220px]
            w-[220px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-sky-500/20
            blur-[90px]
            "
        />

        {/* Planet */}

        <motion.img
            src={planet}
            alt="Planet"
            draggable={false}
            whileHover={{
            scale: 1.08,
            rotate: 12,
            }}
            transition={{
            duration: 0.35,
            }}
            className="
            w-full
            object-contain
            drop-shadow-[0_25px_70px_rgba(56,189,248,0.45)]
            "
        />

        {/* Planet Ring */}

        <motion.div
            animate={{
            rotate: 360,
            }}
            transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            }}
            className="
            absolute
            left-1/2
            top-1/2
            h-[150px]
            w-[240px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-300/30
            "
        />

        {/* Orbit Dot 1 */}

        <motion.div
            animate={{
            rotate: 360,
            }}
            transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            }}
            className="
            absolute
            inset-0
            "
        >
            <div
            className="
                absolute
                left-1/2
                top-0
                h-3
                w-3
                -translate-x-1/2
                rounded-full
                bg-cyan-300
                shadow-[0_0_18px_rgba(34,211,238,0.9)]
            "
            />
        </motion.div>

        {/* Orbit Dot 2 */}

        <motion.div
            animate={{
            rotate: -360,
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
            <div
            className="
                absolute
                bottom-0
                left-1/2
                h-3
                w-3
                -translate-x-1/2
                rounded-full
                bg-purple-400
                shadow-[0_0_18px_rgba(192,132,252,0.9)]
            "
            />
        </motion.div>

        {/* Shine */}

        <motion.div
            animate={{
            opacity: [0.2, 0.7, 0.2],
            x: [-10, 10, -10],
            }}
            transition={{
            duration: 3,
            repeat: Infinity,
            }}
            className="
            absolute
            left-8
            top-5
            h-4
            w-20
            rotate-[-25deg]
            rounded-full
            bg-white/40
            blur-md
            "
        />
        </motion.div>
    );
};

export default PlanetImage;
