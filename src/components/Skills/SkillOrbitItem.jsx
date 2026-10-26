import { motion, useReducedMotion } from "framer-motion";

const SkillOrbitItem = ({
    skill,
    angle,
    radius,
    depth,
    duration,
    reverse = false,
    index = 0,
}) => {
    const reduceMotion = useReducedMotion();
    const Icon = skill?.icon;

    if (!Icon) return null;

    return (
        <motion.div
            className="absolute left-1/2 top-1/2 [transform-style:preserve-3d]"
            style={{
                width: 0,
                height: 0,
                willChange: reduceMotion ? "auto" : "transform",
            }}
            animate={
                reduceMotion
                    ? undefined
                    : { rotate: reverse ? -360 : 360 }
            }
            transition={
                reduceMotion
                    ? undefined
                    : {
                        duration: Math.max(duration || 1, 1),
                        repeat: Infinity,
                        ease: "linear",
                        delay: -index * 0.7,
                    }
            }
        >
            <div
                className="absolute [transform-style:preserve-3d]"
                style={{
                    transform: `rotate(${angle}deg) translateX(${radius}px) translateZ(${depth}px)`,
                }}
            >
                <motion.div
                    animate={
                        reduceMotion
                            ? undefined
                            : { y: [-4, 4, -4] }
                    }
                    transition={
                        reduceMotion
                            ? undefined
                            : {
                                duration: 3 + (index % 3),
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.15,
                            }
                    }
                    whileHover={reduceMotion ? undefined : { scale: 1.08 }}
                    whileFocus={{ scale: 1.05 }}
                    role="img"
                    aria-label={skill.name}
                    className="
                        group relative flex h-14 w-14
                        -translate-x-1/2 -translate-y-1/2
                        items-center justify-center
                        rounded-2xl border border-white/10
                        bg-slate-950/80
                        shadow-[0_0_18px_rgba(34,211,238,0.08)]
                        transition-[border-color,background-color,box-shadow]
                        duration-300
                        hover:border-cyan-300/40
                        hover:bg-slate-900/95
                        hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]
                        sm:h-16 sm:w-16
                    "
                    style={{
                        transform: `translateZ(${depth * 0.15}px)`,
                    }}
                >
                    <span
                        aria-hidden="true"
                        className="absolute inset-1 rounded-xl opacity-20 blur-md"
                        style={{ backgroundColor: skill.color }}
                    />

                    <Icon
                        size={27}
                        aria-hidden="true"
                        className="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                        style={{ color: skill.color }}
                    />

                    <span
                        className="
                            pointer-events-none absolute left-1/2 top-full z-50
                            mt-3 -translate-x-1/2 whitespace-nowrap
                            rounded-lg border border-white/10
                            bg-slate-950/95 px-3 py-1.5
                            text-[10px] font-semibold text-slate-200
                            opacity-0 shadow-xl
                            transition-opacity duration-200
                            group-hover:opacity-100
                        "
                    >
                        {skill.name}
                    </span>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SkillOrbitItem;

