import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
    Trophy,
    FolderGit2,
    Brain,
    Code2,
} from "lucide-react";
import { achievements } from "../../data/achievements";

console.log({
    Trophy,
    FolderGit2,
    Brain,
    Code2,
});

const AchievementCard = ({ item, index }) => {
    const Icon = item.icon;

    const [ref, inView] = useInView({
        threshold: 0.35,
        triggerOnce: false,
    });

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                y: 60,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: false,
            }}
            transition={{
                duration: 0.7,
                delay: index * 0.12,
            }}
            whileHover={{
                y: -10,
                scale: 1.03,
            }}
            className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                p-8
                shadow-[0_20px_80px_rgba(0,0,0,0.35)]
            "
        >
            {/* Glow */}

            <div
                className="absolute -right-20 -top-20 h-44 w-44 rounded-full blur-[90px]"
                style={{
                    background: `${item.color}30`,
                }}
            />

            {/* Animated Shine */}

            <motion.div
                animate={{
                    x: ["-120%", "150%"],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "linear",
                    delay: index,
                }}
                className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-0
                    w-20
                    skew-x-12
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                "
            />

            {/* Icon */}

            <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{
                    background: `${item.color}20`,
                }}
            >
                <Icon
                    size={32}
                    style={{
                        color: item.color,
                    }}
                />
            </div>

            {/* Number */}

            {/* <h3
                className="mt-8 text-5xl font-black"
                style={{
                    color: item.color,
                }}
            >
                {inView && (
                    <CountUp
                        end={item.value}
                        duration={2}
                    />
                )}
                {item.suffix}
            </h3> */}

            <h3
                className="mt-8 text-5xl font-black"
                style={{ color: item.color }}
            >
                {item.value}
                {item.suffix}
            </h3>

            {/* Title */}

            <h4 className="mt-5 text-xl font-bold text-white">
                {item.title}
            </h4>

            {/* Description */}

            <p className="mt-4 leading-7 text-slate-400">
                {item.description}
            </p>

            {/* Bottom Accent */}

            <motion.div
                whileHover={{
                    scaleX: 1,
                }}
                className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-cyan-400"
            />
        </motion.div>
    );
};

const AchievementsSection = () => {
    return (
        <section
            id="achievements"
            className="
                relative
                overflow-hidden
                py-28
            "
        >
            {/* Background Glow */}

            <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

            <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[140px]" />

            {/* Grid */}

            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.04]
                    bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)]
                    bg-[size:45px_45px]
                "
            />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Heading */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: false,
                    }}
                    transition={{
                        duration: .7,
                    }}
                    className="text-center"
                >
                    <p className="text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
                        Achievements
                    </p>

                    <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
                        Numbers That Define My Journey
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                        Every project, every hour of coding and every AI model
                        trained has contributed to my continuous growth as a
                        Full Stack Developer and AI Engineer.
                    </p>
                </motion.div>

                {/* Cards */}

                <div
                    className="
                        mt-20
                        grid
                        gap-8
                        sm:grid-cols-2
                        xl:grid-cols-4
                    "
                >
                    {achievements.map((item, index) => (
                        <AchievementCard
                            key={item.id}
                            item={item}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;