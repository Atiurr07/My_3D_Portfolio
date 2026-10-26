import { motion, useReducedMotion } from "framer-motion";

const AboutBackground = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <>
            <motion.div
                aria-hidden="true"
                animate={shouldReduceMotion ? undefined : {
                    scale: [1, 1.15, 1],
                    opacity: [0.2, 0.35, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute -left-44 top-8 h-80 w-80 rounded-full bg-cyan-500/15 blur-[120px] sm:h-[420px] sm:w-[420px] sm:blur-[140px]"
            />

            <motion.div
                aria-hidden="true"
                animate={shouldReduceMotion ? undefined : {
                    scale: [1.08, 0.92, 1.08],
                    opacity: [0.12, 0.28, 0.12],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute -bottom-20 -right-40 h-96 w-96 rounded-full bg-violet-600/15 blur-[140px] sm:h-[500px] sm:w-[500px] sm:blur-[180px]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] [background-size:42px_42px]"
            />
        </>
    );
};

export default AboutBackground;
