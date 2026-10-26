import { motion, useReducedMotion } from "framer-motion";

const ExperienceBackground = () => {
    const reduceMotion = useReducedMotion();

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
        >
            <div className="absolute inset-0 bg-[#050816]" />

            <motion.div
                animate={
                    reduceMotion
                        ? undefined
                        : {
                            scale: [1, 1.08, 1],
                            opacity: [0.08, 0.15, 0.08],
                        }
                }
                transition={{
                    duration: 10,
                    repeat: reduceMotion ? 0 : Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]"
            />

            <motion.div
                animate={
                    reduceMotion
                        ? undefined
                        : {
                            scale: [1.06, 1, 1.06],
                            opacity: [0.07, 0.14, 0.07],
                        }
                }
                transition={{
                    duration: 12,
                    repeat: reduceMotion ? 0 : Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-violet-600/20 blur-[130px]"
            />

            <div
                className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] [background-size:56px_56px]"
            />

            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050816] to-transparent" />
        </div>
    );
};

export default ExperienceBackground;
