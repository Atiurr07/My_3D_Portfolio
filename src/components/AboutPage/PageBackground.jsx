import { motion } from "framer-motion";

const stars = Array.from({ length: 60 }, (_, index) => ({
    id: index,
    top: (index * 37) % 100,
    left: (index * 61) % 100,
    duration: 2 + (index % 5),
    delay: (index % 6) * 0.5,
}));

const PageBackground = () => {
    return (
        <>
            {/* Background */}

            <div className="absolute inset-0 bg-[#050816]" />

            {/* Aurora */}

            <motion.div
                animate={{
                    opacity: [0.25, 0.5, 0.25],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                }}
                className="
                    absolute
                    top-0
                    right-0
                    h-[700px]
                    w-[700px]
                    rounded-full
                    bg-cyan-500/10
                    blur-[160px]
                "
            />

            <motion.div
                animate={{
                    opacity: [0.2, 0.45, 0.2],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                }}
                className="
                    absolute
                    bottom-0
                    left-0
                    h-[700px]
                    w-[700px]
                    rounded-full
                    bg-violet-500/10
                    blur-[170px]
                "
            />

            {/* Grid */}

            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.05]
                    bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)]
                    bg-[size:60px_60px]
                "
            />

            {/* Stars */}

            {stars.map((star) => (
                <motion.span
                    key={star.id}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [0.5, 1.2, 0.5],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                    }}
                    className="absolute h-[2px] w-[2px] rounded-full bg-white"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                    }}
                />
            ))}
        </>
    );
};

export default PageBackground;