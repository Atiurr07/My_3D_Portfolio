import { motion } from "framer-motion";
import useMouseParallax from "../../hooks/useMouseParallax";

const OrbitRing = () => {
    const mouse = useMouseParallax(40);

    return (
        <motion.div
        initial={{
            opacity: 0,
            scale: 0.8,
        }}
        animate={{
            opacity: 1,
            scale: 1,
            x: mouse.x * 0.03 ,
            y: mouse.y * 0.03 ,
            rotate: 360,
        }}
        transition={{
            type: "spring",
            stiffness: 50,
            damping: 15,
        }}
        className="
            absolute
            top-[15%]
            right-[10%]
            z-30
            h-[140px]
            w-[140px]
            sm:h-[180px]
            sm:w-[180px]
            md:h-[210px]
            md:w-[210px]
            lg:h-[240px]
            lg:w-[240px]
            rounded-full
            pointer-events-none
        "
        >
        {/* Main Ring */}

        <div
            className="
            absolute
            inset-0
            rounded-full
            border
            border-cyan-400/30
            shadow-[0_0_35px_rgba(34,211,238,0.35)]
            "
        />

        {/* Inner Ring */}

        <div
            className="
            absolute
            left-1/2
            top-1/2
            h-[180px]
            w-[180px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-purple-400/30
            "
        />

        {/* Outer Glow */}

        <div
            className="
            absolute
            inset-0
            rounded-full
            bg-cyan-400/10
            blur-xl
            "
        />

        {/* Orbit Ball 1 */}

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
                -top-2
                h-4
                w-4
                -translate-x-1/2
                rounded-full
                bg-cyan-400
                shadow-[0_0_18px_rgba(34,211,238,0.9)]
            "
            />
        </motion.div>

        {/* Orbit Ball 2 */}

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
                right-0
                top-1/2
                h-3
                w-3
                -translate-y-1/2
                rounded-full
                bg-purple-400
                shadow-[0_0_18px_rgba(192,132,252,0.9)]
            "
            />
        </motion.div>

        {/* Orbit Ball 3 */}

        <motion.div
            animate={{
            rotate: 360,
            }}
            transition={{
            duration: 10,
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
                bg-sky-300
                shadow-[0_0_18px_rgba(125,211,252,0.9)]
            "
            />
        </motion.div>

        {/* Orbit Ball 4 */}

        <motion.div
            animate={{
            rotate: -360,
            }}
            transition={{
            duration: 12,
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
                left-0
                top-1/2
                h-3
                w-3
                -translate-y-1/2
                rounded-full
                bg-pink-400
                shadow-[0_0_18px_rgba(244,114,182,0.9)]
            "
            />
        </motion.div>

        {/* Center Glow */}

        <motion.div
            animate={{
            scale: [0.9, 1.15, 0.9],
            opacity: [0.2, 0.45, 0.2],
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
            h-20
            w-20
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/20
            blur-2xl
            "
        />
        </motion.div>
    );
};

export default OrbitRing;
