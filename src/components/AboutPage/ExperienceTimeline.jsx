import { motion } from "framer-motion";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";
import { experience } from "../../data/experience";

const typeColors = {
    Learning: "#22d3ee",
    Backend: "#3b82f6",
    Development: "#8b5cf6",
    AI: "#ec4899",
    Projects: "#14b8a6",
    Current: "#f59e0b",
};

const ExperienceTimeline = () => {
    return (
        <section
            id="experience"
            className="
                relative
                overflow-hidden
                py-28
            "
        >
            {/* Background Glow */}

            <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[130px]" />
            <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[130px]" />

            <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold">
                        Career Journey
                    </span>

                    <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-white">
                        Experience Timeline
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-slate-400 leading-8">
                        My professional journey, internships, and real-world
                        experiences that shaped my skills as a Software Engineer
                        and AI Developer.
                    </p>
                </motion.div>

                {/* Timeline */}

                <div className="relative mt-24">

                    {/* Center Line */}

                    <div
                        className="
                            absolute
                            left-4
                            md:left-1/2
                            top-0
                            h-full
                            w-[2px]
                            -translate-x-1/2
                            bg-gradient-to-b
                            from-cyan-500
                            via-blue-500
                            to-violet-500
                        "
                    />

                    {experience.map((item, index) => {

                        const left = index % 2 === 0;

                        return (

                            <motion.div
                                key={item.id}
                                initial={{
                                    opacity: 0,
                                    x: left ? -80 : 80,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: false,
                                }}
                                transition={{
                                    duration: .8,
                                    delay: index * .15,
                                }}
                                className={`
                                    relative
                                    mb-20
                                    flex
                                    flex-col
                                    pl-10
                                    md:flex-row
                                    md:pl-0
                                    ${left ? "md:flex-row" : "md:flex-row-reverse"}
                                    items-center
                                `}
                            >

                                {/* Card */}

                                <motion.div
                                    whileHover={{
                                        y: -10,
                                        scale: 1.02,
                                    }}
                                    className="
                                        relative
                                        w-full
                                        md:w-[45%]
                                        overflow-hidden
                                        rounded-3xl
                                        border
                                        border-white/10
                                        bg-white/[0.04]
                                        p-8
                                        backdrop-blur-2xl
                                        shadow-[0_20px_70px_rgba(0,0,0,0.35)]
                                        transition-all
                                    "
                                >

                                    {/* Accent */}

                                    <div
                                        className="absolute left-0 top-0 h-full w-1"
                                        style={{
                                            background: typeColors[item.type],
                                        }}
                                    />

                                    {/* Company */}

                                    <div className="flex items-center gap-4">

                                        <div
                                            className="flex h-14 w-14 items-center justify-center rounded-2xl"
                                            style={{
                                                background: `${typeColors[item.type]}20`,
                                            }}
                                        >
                                            <Briefcase
                                                size={28}
                                                style={{
                                                    color: typeColors[item.type],
                                                }}
                                            />
                                        </div>

                                        <div>

                                            <h3 className="text-2xl font-bold text-white">
                                                {item.title}
                                            </h3>

                                            <p
                                                className="font-semibold"
                                                style={{
                                                    color: typeColors[item.type],
                                                }}
                                            >
                                                {item.company}
                                            </p>

                                        </div>

                                    </div>

                                    {/* Description */}

                                    <p className="mt-7 leading-8 text-slate-400">
                                        {item.description}
                                    </p>

                                    {/* Meta */}

                                    <div className="mt-8 flex flex-wrap gap-6">

                                        <div className="flex items-center gap-2 text-slate-400">

                                            <CalendarDays size={18} />

                                            <span>{item.year}</span>

                                        </div>

                                        <div className="flex items-center gap-2 text-slate-400">

                                            <MapPin size={18} />

                                            <span>{item.location}</span>

                                        </div>

                                    </div>

                                    {/* Tech Stack */}

                                    <div className="mt-8 flex flex-wrap gap-3">

                                        {item.technologies.map((tech) => (

                                            <span
                                                key={tech}
                                                className="
                                                    rounded-full
                                                    border
                                                    border-cyan-400/20
                                                    bg-cyan-500/10
                                                    px-4
                                                    py-2
                                                    text-sm
                                                    text-cyan-300
                                                "
                                            >
                                                {tech}
                                            </span>

                                        ))}

                                    </div>

                                </motion.div>

                                {/* Timeline Dot */}

                                <div
                                    className="
                                        absolute
                                        left-5
                                        md:left-1/2
                                        -translate-x-1/2
                                        flex
                                        h-6
                                        w-6
                                        items-center
                                        justify-center
                                        rounded-full
                                        border-4
                                        border-[#050816]
                                    "
                                    style={{
                                        background: typeColors[item.type],
                                    }}
                                />

                                <div className="hidden md:block md:w-[10%]" />

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
};

export default ExperienceTimeline;