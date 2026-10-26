import { motion, useReducedMotion } from "framer-motion";

const GlowEffects = () => {
    const shouldReduceMotion = useReducedMotion();

    const items = [
        "left-[12%] top-[30%] bg-cyan-400",
        "right-[20%] top-[20%] bg-violet-500",
        "bottom-[12%] left-[40%] bg-blue-500",
    ];

    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            {items.map((position, index) => (
                <motion.div
                    key={position}
                    animate={shouldReduceMotion ? undefined : {
                        opacity: [0.12, 0.3, 0.12],
                        scale: [1, index === 1 ? 1.35 : 1.2, 1],
                    }}
                    transition={{
                        duration: 6 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className={`absolute h-4 w-4 rounded-full blur-xl sm:h-5 sm:w-5 ${position}`}
                />
            ))}
        </div>
    );
};

export default GlowEffects;
