import {
    motion,
    useMotionValue,
    useTransform,
} from "framer-motion";
import {
    Cpu,
    Code2,
    Database,
    Brain,
    Wrench,
    BookOpen,
    ArrowUpRight,
} from "lucide-react";
import { skillCategories } from "../../data/skills";

const categoryIcons = {
    Frontend: Code2,
    Backend: Database,
    "Artificial Intelligence": Brain,
    Database: Database,
    Tools: Wrench,
    "Currently Learning": BookOpen,
};

const SkillsOverview = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const glowX = useTransform(mouseX, [0, 1500], [-250, 250]);
    const glowY = useTransform(mouseY, [0, 1000], [-180, 180]);

    const handleMouseMove = (e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };
    return (
        <section
        onMouseMove={handleMouseMove}
        id="skills-overview"
        className="
                    relative
                    overflow-hidden
                    py-28
                "
        >
        {/* Background Glow */}

        <div className="absolute inset-0 overflow-hidden">

            <motion.div
            animate={{
                scale: [1, 1.15, 1],
                opacity: [0.18, 0.35, 0.18],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="
            absolute
            -top-40
            -left-40
            h-[520px]
            w-[520px]
            rounded-full
            bg-cyan-500/20
            blur-[180px]
            "
            />

            <motion.div
            animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="
            absolute
            -bottom-40
            -right-40
            h-[520px]
            w-[520px]
            rounded-full
            bg-violet-500/20
            blur-[180px]
            "
            />

            <motion.div
            style={{
                x: glowX,
                y: glowY,
            }}
            className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-400/10
            blur-[120px]
            "
            />

            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.04]
                    bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)]
                    bg-[size:45px_45px]
                "
            />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            {/* Heading */}

            <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center"
            >
            <p
                className="
                                uppercase
                                tracking-[5px]
                                text-cyan-400
                                font-semibold
                            "
            >
                TECHNICAL EXPERTISE
            </p>

            <h2
                className="
                                mt-5
                                text-4xl
                                font-black
                                leading-tight
                                md:text-5xl
                                xl:text-6xl
                            "
            >
                Skills That Power
                <span className="text-cyan-400"> Modern AI Applications</span>
            </h2>

            <p
                className="
                                mx-auto
                                mt-8
                                max-w-3xl
                                text-lg
                                leading-8
                                text-slate-400
                            "
            >
                My expertise combines Full Stack Development, Artificial
                Intelligence, Machine Learning and scalable software engineering to
                build intelligent digital products.
            </p>
            </motion.div>

            {/* AI Core */}

            <motion.div
            initial={{
                opacity: 0,
                scale: 0.7,
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
            }}
            viewport={{
                once: false,
            }}
            transition={{
                duration: 1,
            }}
            className="
                relative
                mx-auto
                mt-24
                flex
                h-44
                w-44
                items-center
                justify-center
            "
            >
                {/* Outer Ring */}

                <motion.div
                    animate={{
                    rotate: 360,
                    }}
                    transition={{
                    repeat: Infinity,
                    duration: 18,
                    ease: "linear",
                    }}
                    className="
                                    absolute
                                    inset-0
                                    rounded-full
                                    border
                                    border-cyan-400/20
                                "
                />

                {/* Second Ring */}

                <motion.div
                    animate={{
                    rotate: -360,
                    }}
                    transition={{
                    repeat: Infinity,
                    duration: 12,
                    ease: "linear",
                    }}
                    className="
                                    absolute
                                    inset-4
                                    rounded-full
                                    border
                                    border-violet-500/20
                                "
                />

                {/* Glow */}

                <motion.div
                    animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                    duration: 3,
                    repeat: Infinity,
                    }}
                    className="
                        absolute
                        h-24
                        w-24
                        rounded-full
                        bg-cyan-500/40
                        blur-3xl
                    "
                />

                {/* Core */}

                <motion.div
                    animate={{
                    y: [-6, 6, -6],
                    }}
                    transition={{
                    repeat: Infinity,
                    duration: 4,
                    }}
                    className="
                        relative
                        flex
                        h-28
                        w-28
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-cyan-400/30
                        bg-white/[0.04]
shadow-[0_0_60px_rgba(34,211,238,0.08)]
                        backdrop-blur-xl
                    "
                >
                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 18,
                                ease: "linear",
                            }}
                        >

                            <Cpu
                                size={44}
                                className="text-cyan-400"
                            />
                        </motion.div>
                </motion.div>
            </motion.div>

            <div
            className="
                mt-14
                flex
                flex-wrap
                justify-center
                gap-4
            "
            >

                {[
                "Python",
                "Django",
                "React",
                "AI",
                "OpenCV",
                "TensorFlow",
                "LLMs",
                "REST API",
                "Tailwind",
                ].map((item,index)=>(

                <motion.div

                key={item}

                animate={{
                y:[0,-8,0]
                }}

                transition={{
                repeat:Infinity,
                delay:index*.15,
                duration:3
                }}

                className="
                rounded-full
                border
                border-cyan-400/20
                bg-white/[0.04]
                shadow-[0_0_60px_rgba(34,211,238,0.08)]
                px-5
                py-2
                backdrop-blur-xl
                text-sm
                text-slate-300
                "

                >

                {item}

                </motion.div>

                ))}
            </div>

            {/* Skill Cards */}

            <div
            className="
                            mt-24
                            grid
                            gap-8
                            md:grid-cols-2
                            xl:grid-cols-3
                        "
            >
            {skillCategories.map((category, index) => (
                <motion.div
                key={category.id}
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
                    delay: index * 0.1,
                    duration: 0.6,
                }}
                whileHover={{
                y:-12,
                scale:1.02,
                rotateX:4,
                rotateY:-4,
                }}
                className="
                                    relative
                                    overflow-hidden
                                    rounded-[30px]
                                    border
                                    border-white/10
                                    bg-white/[0.04]
shadow-[0_0_60px_rgba(34,211,238,0.08)]
                                    p-8
                                    backdrop-blur-2xl
                                "
                >
                {/* Accent */}

                <motion.div
                animate={{
                x:["-100%","120%"]
                }}

                transition={{
                repeat:Infinity,
                duration:4,
                ease:"linear"
                }}

                className="
                absolute
                top-0
                left-0
                h-full
                w-20
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
                skew-x-12
                "
                />

                <div
                    className="absolute left-0 top-0 h-1 w-full"
                    style={{
                    background: category.color,
                    }}
                />

                {(() => {
                    const Icon =
                        categoryIcons[category.title] || Cpu;

                    return (
                        <>
                            {/* Header */}

                            <div className="flex items-center justify-between">

                                <div
                                    className="
                                        flex
                                        h-16
                                        w-16
                                        items-center
                                        justify-center
                                        rounded-2xl
                                    "
                                    style={{
                                        background: `${category.color}20`,
                                    }}
                                >
                                    <Icon
                                        size={30}
                                        style={{
                                            color: category.color,
                                        }}
                                    />
                                </div>

                                <motion.div
                                    whileHover={{
                                        rotate: 45,
                                    }}
                                >
                                    <ArrowUpRight
                                        size={22}
                                        className="text-slate-500"
                                    />
                                </motion.div>

                            </div>

                            <h3
                                className="
                                    mt-7
                                    text-2xl
                                    font-bold
                                    text-white
                                "
                            >
                                {category.title}
                            </h3>

                            <p
                                className="
                                    mt-3
                                    text-slate-400
                                    leading-7
                                "
                            >
                                {category.description}
                            </p>

                            {/* Skill List */}

                            <div className="mt-8 space-y-6">

                                {category.skills.map((skill, i) => (

                                    <motion.div
                                        key={skill.name}
                                        initial={{
                                            opacity: 0,
                                            x: -20,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{
                                            once: false,
                                        }}
                                        transition={{
                                            delay: i * 0.08,
                                        }}
                                    >

                                        {/* Skill Header */}

                                        <div className="mb-2 flex justify-between">

                                            <span
                                                className="
                                                    text-sm
                                                    font-medium
                                                    text-slate-300
                                                "
                                            >
                                                {skill.name}
                                            </span>

                                            <span
                                                className="
                                                    text-cyan-400
                                                    text-sm
                                                    font-semibold
                                                "
                                            >
                                                {skill.level}%
                                            </span>

                                        </div>

                                        {/* Progress */}

                                        <div
                                            className="
                                                h-2
                                                overflow-hidden
                                                rounded-full
                                                bg-slate-800
                                            "
                                        >

                                            <motion.div
                                                initial={{
                                                    width: 0,
                                                }}
                                                whileInView={{
                                                    width: `${skill.level}%`,
                                                }}
                                                viewport={{
                                                    once: false,
                                                }}
                                                transition={{
                                                    duration: 1.2,
                                                    delay: i * .08,
                                                }}
                                                className="h-full rounded-full"
                                                style={{
                                                    background:
                                                        `linear-gradient(90deg, ${category.color}, #22d3ee)`,
                                                }}
                                            />

                                        </div>

                                    </motion.div>

                                ))}

                            </div>

                            {/* Footer */}

                            <div
                                className="
                                    mt-10
                                    flex
                                    items-center
                                    justify-between
                                    border-t
                                    border-white/10
                                    pt-6
                                "
                            >

                                <div>

                                    <p
                                        className="
                                            text-xs
                                            uppercase
                                            tracking-[3px]
                                            text-slate-500
                                        "
                                    >
                                        Technologies
                                    </p>

                                    <h4
                                        className="
                                            mt-1
                                            text-2xl
                                            font-bold
                                            text-white
                                        "
                                    >
                                        {category.skills.length}
                                    </h4>

                                </div>

                                <motion.div
                                    animate={{
                                        y: [-4, 4, -4],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 3,
                                    }}
                                    className="
                                        rounded-full
                                        border
                                        border-cyan-400/20
                                        bg-cyan-500/10
                                        px-4
                                        py-2
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-[2px]
                                        text-cyan-400
                                    "
                                >
                                    Active
                                </motion.div>

                            </div>

                        </>
                    );
                })()}
                </motion.div>
            ))}
            </div>
        </div>
        {Array.from({ length: 20 }).map((_, i) => (

        <motion.div

        key={i}

        animate={{
        y:[0,-30,0],
        opacity:[0.2,1,0.2]
        }}

        transition={{
        repeat:Infinity,
        duration:5+Math.random()*3,
        delay:i*.2
        }}

        className="
        absolute
        h-1.5
        w-1.5
        rounded-full
        bg-cyan-400/40
        "

        style={{
        left:`${Math.random()*100}%`,
        top:`${Math.random()*100}%`,
        }}

        />

        ))}
        </section>
    );
};

export default SkillsOverview;
