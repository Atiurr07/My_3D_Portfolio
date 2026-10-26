import { Html, useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

const Loader = () => {
    const { progress, active } = useProgress();

    return (
        <Html center>
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.9,
                }}
                animate={{
                    opacity: active ? 1 : 0,
                    scale: active ? 1 : 0.95,
                }}
                transition={{
                    duration: 0.35,
                }}
                className="
                    flex
                    flex-col
                    items-center
                    justify-center

                    rounded-3xl

                    border
                    border-cyan-400/20

                    bg-[#0b1120]/85

                    backdrop-blur-2xl

                    shadow-[0_0_80px_rgba(34,211,238,0.18)]

                    px-8
                    py-8

                    sm:px-10
                    sm:py-10

                    min-w-[260px]
                "
            >
                {/* Progress Ring */}

                <div className="relative flex h-28 w-28 items-center justify-center">

                    <svg
                        className="absolute h-28 w-28 -rotate-90"
                        viewBox="0 0 100 100"
                    >
                        <circle
                            cx="50"
                            cy="50"
                            r="42"
                            stroke="#1e293b"
                            strokeWidth="6"
                            fill="none"
                        />

                        <motion.circle
                            cx="50"
                            cy="50"
                            r="42"
                            fill="none"
                            stroke="#22d3ee"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeDasharray={264}
                            animate={{
                                strokeDashoffset:
                                    264 - (264 * progress) / 100,
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                        />
                    </svg>

                    <span
                        className="
                            text-2xl
                            font-bold
                            text-white
                        "
                    >
                        {Math.floor(progress)}%
                    </span>
                </div>

                {/* Loading Title */}

                <motion.h3
                    animate={{
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                    }}
                    className="
                        mt-8

                        text-lg
                        sm:text-xl

                        font-semibold

                        text-cyan-300
                    "
                >
                    Initializing AI Engine
                </motion.h3>

                {/* Subtitle */}

                <p
                    className="
                        mt-2

                        text-sm

                        text-slate-400

                        text-center
                    "
                >
                    Loading Premium 3D Experience...
                </p>

                {/* Loading Dots */}

                <div className="mt-6 flex gap-2">
                    {[0, 1, 2].map((dot) => (
                        <motion.div
                            key={dot}
                            animate={{
                                y: [0, -6, 0],
                                opacity: [0.3, 1, 0.3],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 0.8,
                                delay: dot * 0.2,
                                repeat: Infinity,
                            }}
                            className="
                                h-3
                                w-3

                                rounded-full

                                bg-cyan-400
                            "
                        />
                    ))}
                </div>
            </motion.div>
        </Html>
    );
};

export default Loader;