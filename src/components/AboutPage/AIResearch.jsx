import { motion } from "framer-motion";
import {
    BrainCircuit,
    Bot,
    Cpu,
    Eye,
} from "lucide-react";

const researchAreas = [
    {
        id: 1,
        title: "Machine Learning",
        icon: BrainCircuit,
        description:
            "Building predictive models and intelligent systems capable of learning from structured and unstructured data.",
        color: "from-cyan-500 to-blue-600",
    },
    {
        id: 2,
        title: "Computer Vision",
        icon: Eye,
        description:
            "Developing vision-based applications including object detection, image classification and real-time analysis.",
        color: "from-violet-500 to-fuchsia-600",
    },
    {
        id: 3,
        title: "Generative AI",
        icon: Bot,
        description:
            "Exploring LLMs, prompt engineering and AI assistants to create more intelligent user experiences.",
        color: "from-emerald-500 to-cyan-500",
    },
    {
        id: 4,
        title: "AI Engineering",
        icon: Cpu,
        description:
            "Integrating modern AI models with scalable full stack applications using production-ready architectures.",
        color: "from-orange-500 to-pink-500",
    },
];

const AIResearch = () => {
    return (
        <section
            id="ai-research"
            className="relative overflow-hidden py-28"
        >
            {/* Background Glow */}

            <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

            <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

            {/* Grid */}

            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.04]
                    bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)]
                    bg-[size:48px_48px]
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
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <p className="text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
                        AI Research & Innovation
                    </p>

                    <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
                        Exploring Intelligent Systems Beyond Development
                    </h2>

                    <p className="mt-7 text-lg leading-8 text-slate-400">
                        My curiosity extends beyond software engineering into
                        Artificial Intelligence, Computer Vision, Machine
                        Learning and intelligent automation. I continuously
                        explore emerging technologies to build practical,
                        scalable and impactful AI-powered solutions.
                    </p>
                </motion.div>

                {/* Research Cards */}

                <div
                    className="
                        mt-20
                        grid
                        gap-8
                        md:grid-cols-2
                    "
                >
                    {researchAreas.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.article
                                key={item.id}
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
                                    amount: 0.25,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.12,
                                }}
                                whileHover={{
                                    y: -8,
                                }}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[28px]
                                    border
                                    border-white/10
                                    bg-white/[0.04]
                                    p-8
                                    backdrop-blur-2xl
                                    transition-all
                                    duration-500
                                "
                            >
                                {/* Part 2 will continue here */}
                                {/* Animated Gradient Glow */}

                                <div
                                    className={`
                                        absolute
                                        -right-24
                                        -top-24
                                        h-56
                                        w-56
                                        rounded-full
                                        bg-gradient-to-br
                                        ${item.color}
                                        opacity-10
                                        blur-[120px]
                                        transition-all
                                        duration-700
                                        group-hover:opacity-30
                                    `}
                                />

                                {/* Glass Reflection */}

                                <motion.div
                                    animate={{
                                        x: ["-150%", "180%"],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 6,
                                        ease: "linear",
                                        delay: index * 0.4,
                                    }}
                                    className="
                                        pointer-events-none
                                        absolute
                                        inset-y-0
                                        left-0
                                        w-24
                                        skew-x-[-25deg]
                                        bg-gradient-to-r
                                        from-transparent
                                        via-white/10
                                        to-transparent
                                    "
                                />

                                {/* Icon */}

                                <div
                                    className={`
                                        relative
                                        flex
                                        h-20
                                        w-20
                                        items-center
                                        justify-center
                                        rounded-3xl
                                        bg-gradient-to-br
                                        ${item.color}
                                        shadow-[0_15px_35px_rgba(34,211,238,0.25)]
                                    `}
                                >

                                    <motion.div
                                        animate={{
                                            rotate: [0, 5, -5, 0],
                                            scale: [1, 1.08, 1],
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                        }}
                                    >
                                        <Icon
                                            size={38}
                                            className="text-white"
                                        />
                                    </motion.div>

                                </div>

                                {/* Title */}

                                <h3
                                    className="
                                        mt-8
                                        text-2xl
                                        font-bold
                                        text-white
                                        transition-colors
                                        duration-300
                                        group-hover:text-cyan-300
                                    "
                                >
                                    {item.title}
                                </h3>

                                {/* Description */}

                                <p
                                    className="
                                        mt-5
                                        leading-8
                                        text-slate-400
                                    "
                                >
                                    {item.description}
                                </p>

                                {/* Research Topics */}

                                <div className="mt-8 flex flex-wrap gap-3">

                                    {[
                                        "Research",
                                        "Innovation",
                                        "AI",
                                    ].map((tag) => (

                                        <motion.span
                                            key={tag}
                                            whileHover={{
                                                scale: 1.06,
                                                y: -2,
                                            }}
                                            className="
                                                rounded-full
                                                border
                                                border-white/10
                                                bg-white/5
                                                px-4
                                                py-2
                                                text-sm
                                                text-slate-300
                                                backdrop-blur-xl
                                                transition-all
                                                duration-300
                                                hover:border-cyan-400
                                                hover:bg-cyan-500/10
                                                hover:text-cyan-300
                                            "
                                        >
                                            {tag}
                                        </motion.span>

                                    ))}

                                </div>

                                {/* Footer */}

                                <div
                                    className="
                                        mt-10
                                        flex
                                        items-center
                                        justify-between
                                    "
                                >

                                    <span
                                        className="
                                            text-sm
                                            font-medium
                                            text-slate-500
                                        "
                                    >
                                        Active Learning
                                    </span>

                                    <motion.div
                                        whileHover={{
                                            x: 5,
                                        }}
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            font-semibold
                                            text-cyan-400
                                        "
                                    >
                                        Exploring →

                                    </motion.div>

                                </div>

                                {/* Bottom Glow */}

                                <div
                                    className="
                                        absolute
                                        bottom-0
                                        left-1/2
                                        h-16
                                        w-40
                                        -translate-x-1/2
                                        rounded-full
                                        bg-cyan-500/10
                                        blur-[60px]
                                        opacity-0
                                        transition-opacity
                                        duration-500
                                        group-hover:opacity-100
                                    "
                                />
                            </motion.article>
                        );
                    })}
                </div>

                {/* ================= AI Statistics ================= */}
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
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                    }}
                    className="
                        mt-24
                        grid
                        gap-6
                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >
                    {[
                        {
                            value: "15+",
                            label: "AI Projects",
                        },
                        {
                            value: "10+",
                            label: "Technologies",
                        },
                        {
                            value: "4+",
                            label: "Research Areas",
                        },
                        {
                            value: "∞",
                            label: "Learning Mindset",
                        },
                    ].map((item) => (
                        <motion.div
                            key={item.label}
                            whileHover={{
                                y: -6,
                                scale: 1.03,
                            }}
                            className="
                                rounded-3xl
                                border
                                border-white/10
                                bg-white/[0.04]
                                p-8
                                text-center
                                backdrop-blur-2xl
                                transition-all
                                duration-500
                                hover:border-cyan-400/40
                                hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)]
                            "
                        >
                            <h3 className="text-5xl font-black text-cyan-400">
                                {item.value}
                            </h3>

                            <p className="mt-4 text-slate-400">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ================= Currently Exploring ================= */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: false,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="
                        relative
                        mt-28
                        overflow-hidden
                        rounded-[36px]
                        border
                        border-cyan-400/20
                        bg-gradient-to-br
                        from-cyan-500/10
                        via-slate-900
                        to-violet-500/10
                        p-10
                        backdrop-blur-3xl
                    "
                >

                    <div className="absolute inset-0 opacity-[0.05]">

                        <div
                            className="
                                h-full
                                w-full
                                bg-[radial-gradient(circle,#38bdf8_1px,transparent_1px)]
                                bg-[length:18px_18px]
                            "
                        />

                    </div>

                    <motion.span
                        animate={{
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                        className="
                            relative
                            inline-flex
                            rounded-full
                            border
                            border-cyan-400/30
                            bg-cyan-500/10
                            px-5
                            py-2
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[3px]
                            text-cyan-300
                        "
                    >
                        Currently Exploring
                    </motion.span>

                    <h3
                        className="
                            relative
                            mt-8
                            text-4xl
                            font-black
                            text-white
                        "
                    >
                        Generative AI • Large Language Models • AI Agents
                    </h3>

                    <p
                        className="
                            relative
                            mt-6
                            max-w-4xl
                            text-lg
                            leading-8
                            text-slate-300
                        "
                    >
                        My current focus is on integrating Large Language Models,
                        Retrieval-Augmented Generation (RAG), AI Agents, modern
                        Computer Vision pipelines, and scalable Full Stack AI
                        architectures to develop intelligent software products that
                        solve real-world challenges.
                    </p>

                </motion.div>
            </div>
            {/* ================= Floating Background ================= */}

            {[...Array(15)].map((_, index) => (

                <motion.div
                    key={index}
                    animate={{
                        y: [0, -50, 0],
                        opacity: [0.15, 0.5, 0.15],
                    }}
                    transition={{
                        duration: 6 + index,
                        repeat: Infinity,
                        delay: index * 0.4,
                    }}
                    className="
                        absolute
                        rounded-full
                        bg-cyan-400/20
                        blur-sm
                    "
                    style={{
                        width: 5 + Math.random() * 10,
                        height: 5 + Math.random() * 10,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />

            ))}
        </section>
    );
};

export default AIResearch;