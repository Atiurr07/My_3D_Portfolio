import { motion } from "framer-motion";

const stars = [
    { id: 1, top: "8%", left: "12%", size: 5, delay: 0 },
    { id: 2, top: "18%", left: "78%", size: 4, delay: 0.3 },
    { id: 3, top: "28%", left: "48%", size: 6, delay: 0.6 },
    { id: 4, top: "42%", left: "20%", size: 5, delay: 0.8 },
    { id: 5, top: "55%", left: "85%", size: 4, delay: 1 },
    { id: 6, top: "70%", left: "35%", size: 6, delay: 1.2 },
    { id: 7, top: "82%", left: "70%", size: 5, delay: 1.4 },
    { id: 8, top: "14%", left: "60%", size: 5, delay: 1.6 },
    { id: 9, top: "32%", left: "90%", size: 4, delay: 1.8 },
    { id: 10, top: "88%", left: "18%", size: 5, delay: 2 },
    { id: 11, top: "10%", left: "32%", size: 4, delay: 2.2 },
    { id: 12, top: "63%", left: "58%", size: 6, delay: 2.4 },
    { id: 13, top: "77%", left: "50%", size: 5, delay: 2.6 },
    { id: 14, top: "48%", left: "66%", size: 4, delay: 2.8 },
    { id: 15, top: "25%", left: "8%", size: 5, delay: 3 },
    ];

    const Stars = () => {
    return (
        <>
        {stars.map((star) => (
            <motion.span
            key={star.id}
            initial={{
                opacity: 0.2,
                scale: 0.8,
            }}
            animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.5, 0.8],
            }}
            transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
            }}
            className="absolute rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]"
            style={{
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
            }}
            />
        ))}

        {/* Large glowing stars */}

        <motion.div
            animate={{
            opacity: [0.4, 1, 0.4],
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1],
            }}
            transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
            }}
            className="
            absolute
            left-[82%]
            top-[15%]
            flex
            items-center
            justify-center
            "
        >
            <div className="h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_25px_8px_rgba(34,211,238,0.8)]" />
        </motion.div>

        <motion.div
            animate={{
            opacity: [0.4, 1, 0.4],
            rotate: [360, 180, 0],
            scale: [1, 1.2, 1],
            }}
            transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            }}
            className="
            absolute
            left-[18%]
            top-[72%]
            flex
            items-center
            justify-center
            "
        >
            <div className="h-4 w-4 rounded-full bg-purple-400 shadow-[0_0_25px_8px_rgba(168,85,247,0.8)]" />
        </motion.div>

        <motion.div
            animate={{
            opacity: [0.3, 0.9, 0.3],
            y: [-6, 6, -6],
            }}
            transition={{
            duration: 5,
            repeat: Infinity,
            }}
            className="
            absolute
            left-[55%]
            top-[8%]
            "
        >
            <div className="h-3 w-3 rounded-full bg-sky-300 shadow-[0_0_20px_6px_rgba(125,211,252,0.9)]" />
        </motion.div>
        </>
    );
};

export default Stars;
