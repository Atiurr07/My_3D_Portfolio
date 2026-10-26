import { motion, useReducedMotion } from "framer-motion";
import { BrainCircuit, Sparkles } from "lucide-react";

const SkillCenter = () => {
    const reduceMotion = useReducedMotion();

    const ringTransition = (duration) =>
        reduceMotion
            ? undefined
            : {
                duration,
                repeat: Infinity,
                ease: "linear",
            };

    return (
        <div
            className="
                absolute left-1/2 top-1/2 z-20
                h-40 w-40 -translate-x-1/2 -translate-y-1/2
                sm:h-48 sm:w-48 lg:h-56 lg:w-56
            "
        >
            <motion.div
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={ringTransition(18)}
                className="
                    absolute inset-0 rounded-full border
                    border-cyan-400/20 [transform:rotateX(68deg)]
                "
            />

            <motion.div
                animate={reduceMotion ? undefined : { rotate: -360 }}
                transition={ringTransition(13)}
                className="
                    absolute inset-3 rounded-full border
                    border-violet-400/20 [transform:rotateY(68deg)]
                "
            />

            <motion.div
                animate={
                    reduceMotion
                        ? undefined
                        : {
                            scale: [0.92, 1.05, 0.92],
                            opacity: [0.3, 0.5, 0.3],
                        }
                }
                transition={
                    reduceMotion
                        ? undefined
                        : {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }
                }
                className="
                    absolute left-1/2 top-1/2 h-32 w-32
                    -translate-x-1/2 -translate-y-1/2
                    rounded-full bg-cyan-400/20 blur-3xl
                "
            />

            <motion.div
                animate={
                    reduceMotion
                        ? undefined
                        : {
                            y: [-4, 4, -4],
                            rotateY: [0, 360],
                        }
                }
                transition={
                    reduceMotion
                        ? undefined
                        : {
                            y: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                            rotateY: {
                                duration: 18,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        }
                }
                className="
                    absolute left-1/2 top-1/2
                    flex h-24 w-24 -translate-x-1/2 -translate-y-1/2
                    items-center justify-center rounded-full
                    border border-cyan-300/40
                    bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.9),rgba(34,211,238,0.5)_18%,rgba(14,116,144,0.5)_48%,rgba(5,8,22,0.98)_75%)]
                    shadow-[0_0_35px_rgba(34,211,238,0.3),inset_0_0_30px_rgba(56,189,248,0.2)]
                    [transform-style:preserve-3d]
                    sm:h-28 sm:w-28
                "
            >
                <BrainCircuit
                    aria-hidden="true"
                    className="text-white drop-shadow-[0_0_12px_rgba(103,232,249,0.9)]"
                    size={42}
                />

                <motion.span
                    animate={reduceMotion ? undefined : { rotate: 360 }}
                    transition={ringTransition(7)}
                    className="
                        absolute inset-2 rounded-full
                        border border-dashed border-cyan-300/30
                    "
                />
            </motion.div>

            <motion.div
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={ringTransition(8)}
                className="absolute inset-0"
            >
                <Sparkles
                    aria-hidden="true"
                    size={13}
                    className="
                        absolute right-4 top-1/2 text-cyan-300
                        drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]
                    "
                />
            </motion.div>

            <div
                className="
                    absolute left-1/2 top-full mt-8
                    -translate-x-1/2 whitespace-nowrap text-center
                "
            >
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-cyan-300">
                    AI Core
                </p>

                <p className="mt-1 text-xs text-slate-600">
                    Intelligent Systems
                </p>
            </div>
        </div>
    );
};

export default SkillCenter;
