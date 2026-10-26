import { motion, useReducedMotion } from "framer-motion";

const particles = Array.from({ length: 25 }, (_, index) => ({
    id: index,
    left: `${(index * 37 + 13) % 100}%`,
    top: `${(index * 61 + 7) % 100}%`,
    duration: 4 + (index % 5),
    delay: index * 0.16,
}));

const FloatingParticles = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block">
            {particles.map((particle) => (
                <motion.span
                    key={particle.id}
                    animate={shouldReduceMotion ? undefined : {
                        y: [-15, 15, -15],
                        opacity: [0.12, 0.55, 0.12],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                    style={{ left: particle.left, top: particle.top }}
                    className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300 blur-[1px]"
                />
            ))}
        </div>
    );
};

export default FloatingParticles;
