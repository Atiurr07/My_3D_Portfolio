import { motion, useReducedMotion } from "framer-motion";

const ProjectsBackground = () => {
    const reduceMotion = useReducedMotion();

    const transition = (duration) => ({
        duration,
        repeat: reduceMotion ? 0 : Infinity,
        ease: "easeInOut",
    });

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
        >
            <div className="absolute inset-0 bg-[#050816]" />

            <motion.div
                animate={
                    reduceMotion
                        ? { opacity: 0.12 }
                        : {
                            x: [0, 25, 0],
                            y: [0, -15, 0],
                            opacity: [0.08, 0.15, 0.08],
                        }
                }
                transition={transition(12)}
                className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]"
            />

            <motion.div
                animate={
                    reduceMotion
                        ? { opacity: 0.1 }
                        : {
                            x: [0, -20, 0],
                            y: [0, 20, 0],
                            opacity: [0.06, 0.13, 0.06],
                        }
                }
                transition={transition(14)}
                className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[130px]"
            />

            <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] [background-size:56px_56px]" />

            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050816] to-transparent" />
        </div>
    );
};

export default ProjectsBackground;
