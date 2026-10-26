import { motion, useReducedMotion } from "framer-motion";

const starPositions = [
    { left: "8%", top: "18%", size: 2, delay: 0 },
    { left: "17%", top: "72%", size: 1, delay: 1.2 },
    { left: "29%", top: "31%", size: 2, delay: 0.6 },
    { left: "42%", top: "12%", size: 1, delay: 1.8 },
    { left: "53%", top: "78%", size: 2, delay: 0.3 },
    { left: "66%", top: "24%", size: 1, delay: 1.4 },
    { left: "74%", top: "67%", size: 2, delay: 0.9 },
    { left: "84%", top: "17%", size: 1, delay: 1.7 },
    { left: "92%", top: "53%", size: 2, delay: 0.5 },
    { left: "11%", top: "45%", size: 1, delay: 2 },
    { left: "37%", top: "87%", size: 1, delay: 1 },
    { left: "61%", top: "43%", size: 1, delay: 2.2 },
];

const SkillsBackground = () => {
    const reduceMotion = useReducedMotion();

    const nebulaTransition = (duration) =>
        reduceMotion
            ? undefined
            : {
                duration,
                repeat: Infinity,
                ease: "easeInOut",
            };

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
        >
            <div className="absolute inset-0 bg-[#050816]" />

            {/* Cyan nebula */}
            <motion.div
                animate={
                    reduceMotion
                        ? undefined
                        : {
                            scale: [1, 1.08, 1],
                            opacity: [0.12, 0.2, 0.12],
                        }
                }
                transition={nebulaTransition(12)}
                className="
                    absolute -left-40 top-10 h-[500px] w-[500px]
                    rounded-full bg-cyan-500/20 blur-[130px]
                "
            />

            {/* Violet nebula */}
            <motion.div
                animate={
                    reduceMotion
                        ? undefined
                        : {
                            scale: [1.05, 1, 1.05],
                            opacity: [0.1, 0.18, 0.1],
                        }
                }
                transition={nebulaTransition(14)}
                className="
                    absolute -right-40 bottom-0 h-[550px] w-[550px]
                    rounded-full bg-violet-600/20 blur-[140px]
                "
            />

            {/* Subtle central atmosphere */}
            <div
                className="
                    absolute left-1/2 top-1/2 h-[600px] w-[600px]
                    -translate-x-1/2 -translate-y-1/2
                    rounded-full bg-cyan-500/[0.035] blur-[100px]
                "
            />

            {/* Subtle space grid */}
            <div
                className="
                    absolute inset-0 opacity-[0.025]
                    [background-image:linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)]
                    [background-size:56px_56px]
                "
            />

            {/* Stars */}
            {starPositions.map((star, index) => (
                <motion.span
                    key={`${star.left}-${star.top}`}
                    animate={
                        reduceMotion
                            ? { opacity: 0.65 }
                            : {
                                opacity: [0.25, 0.85, 0.25],
                                scale: [0.9, 1.2, 0.9],
                            }
                    }
                    transition={
                        reduceMotion
                            ? undefined
                            : {
                                duration: 3.5 + star.delay,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: star.delay,
                            }
                    }
                    className="
                        absolute rounded-full bg-cyan-200
                        shadow-[0_0_8px_rgba(103,232,249,0.65)]
                    "
                    style={{
                        left: star.left,
                        top: star.top,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                    }}
                />
            ))}

            {/* Top and bottom fades */}
            <div
                className="
                    absolute inset-x-0 top-0 h-40
                    bg-gradient-to-b from-[#050816] to-transparent
                "
            />

            <div
                className="
                    absolute inset-x-0 bottom-0 h-40
                    bg-gradient-to-t from-[#050816] to-transparent
                "
            />
        </div>
    );
};

export default SkillsBackground;
