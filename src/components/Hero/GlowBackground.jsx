import { motion } from "framer-motion";

const GlowBackground = () => {
    return (
        <>
        {/* Main Blue Glow */}
        <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
            opacity: [0.45, 0.7, 0.45],
            scale: [1, 1.08, 1],
            }}
            transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            }}
            className="
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-500/25
            blur-[130px]
            "
        />

        {/* Purple Glow */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
            opacity: [0.25, 0.5, 0.25],
            scale: [1, 1.12, 1],
            }}
            transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            }}
            className="
            absolute
            right-0
            top-10
            h-[320px]
            w-[320px]
            rounded-full
            bg-purple-600/30
            blur-[120px]
            "
        />

        {/* Bottom Glow */}
        <motion.div
            animate={{
            opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
            duration: 7,
            repeat: Infinity,
            }}
            className="
            absolute
            bottom-0
            left-10
            h-[260px]
            w-[260px]
            rounded-full
            bg-sky-500/20
            blur-[110px]
            "
        />

        {/* Small Accent Glow */}
        <motion.div
            animate={{
            y: [-20, 20, -20],
            opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
            duration: 6,
            repeat: Infinity,
            }}
            className="
            absolute
            right-16
            bottom-16
            h-28
            w-28
            rounded-full
            bg-cyan-400/40
            blur-[70px]
            "
        />

        {/* Top Accent */}
        <motion.div
            animate={{
            x: [-10, 20, -10],
            opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
            duration: 9,
            repeat: Infinity,
            }}
            className="
            absolute
            left-20
            top-20
            h-24
            w-24
            rounded-full
            bg-indigo-500/30
            blur-[65px]
            "
        />

        {/* Center Light */}
        <motion.div
            animate={{
            scale: [0.9, 1.05, 0.9],
            opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
            duration: 5,
            repeat: Infinity,
            }}
            className="
            absolute
            left-1/2
            top-1/2
            h-60
            w-60
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/10
            blur-[80px]
            "
        />
        </>
    );
};

export default GlowBackground;