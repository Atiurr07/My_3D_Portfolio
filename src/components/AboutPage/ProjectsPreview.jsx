import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "../../data/projects";

const ProjectCard = ({ project, index }) => {
    return (
        <motion.article
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
                y: -10,
            }}
            className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                hover:border-cyan-400/40
                bg-white/[0.04]
                backdrop-blur-2xl
                transition-all
                duration-500
            "
        >
            {/* Animated Border */}

            <div
                className="
                    absolute
                    inset-0
                    rounded-[28px]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    bg-gradient-to-r
                    from-cyan-500/20
                    via-violet-500/20
                    to-cyan-500/20
                "
            />

            {/* Floating Glow */}

            <div
                className="
                    absolute
                    -right-24
                    -top-24
                    h-56
                    w-56
                    rounded-full
                    bg-cyan-500/10
                    blur-[110px]
                "
            />

            <div
                className="
                    absolute
                    -bottom-20
                    -left-20
                    h-44
                    w-44
                    rounded-full
                    bg-violet-500/10
                    blur-[90px]
                "
            />

            {/* Content */}

            <div className="relative z-10 p-6">

                {/* Image Placeholder */}
                {/* Image */}

                <div className="relative overflow-hidden rounded-2xl">

                    <motion.img
                        loading="lazy"
                        src={project.image}
                        alt={project.title}
                        whileHover={{
                            scale: 1.08,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="
                            h-64
                            w-full
                            object-cover
                        "
                    />

                    {/* Gradient Overlay */}

                    <div
                        className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-[#050816]
                            via-transparent
                            to-transparent
                        "
                    />

                    {/* Floating Category */}

                    <div
                        className="
                            absolute
                            left-5
                            top-5
                            rounded-full
                            border
                            border-cyan-400/30
                            bg-black/40
                            px-4
                            py-2
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[3px]
                            text-cyan-300
                            backdrop-blur-xl
                        "
                    >
                        {project.category}
                    </div>
                </div>

                <div
                    className="
                        absolute
                        inset-x-10
                        bottom-0
                        h-20
                        rounded-full
                        bg-cyan-500/15
                        blur-3xl
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                    "
                />

                {/* Title */}

                <h3 className="mt-7 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                    {project.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-7 text-slate-400">
                    {project.description}
                </p>

                {/* Technologies */}

                <div className="mt-7 flex flex-wrap gap-3">

                    {project.technologies.map((tech) => (

                        <motion.span
                            key={tech}
                            whileHover={{
                                scale: 1.08,
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
                            "
                        >
                            {tech}
                        </motion.span>

                    ))}

                </div>

                {/* Footer */}

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">

                    {/* GitHub */}

                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                            y: -3,
                        }}
                        whileTap={{
                            scale: 0.96,
                        }}
                        className="
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            px-5
                            py-3
                            text-white
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            hover:border-cyan-400
                            hover:bg-cyan-500/10
                        "
                    >
                        GitHub
                    </motion.a>

                    {/* Live Demo */}

                    <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                            x: 4,
                        }}
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-gradient-to-r
                            from-cyan-500
                            to-blue-600
                            px-6
                            py-3
                            font-semibold
                            text-white
                            shadow-[0_10px_30px_rgba(34,211,238,0.35)]
                        "
                    >
                        Live Demo

                        <ArrowUpRight size={18} />
                    </motion.a>
                </div>
            </div>

            <motion.div
                animate={{
                    x: ["-120%", "160%"],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "linear",
                    delay: index * 0.5,
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
        </motion.article>
    );
};

const ProjectsPreview = () => {
    return (
        <section
            id="featured-projects"
            className="
                relative
                overflow-hidden
                py-28
            "
        >
            {/* Background Glow */}

            <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

            <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[150px]" />

            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0.15, 0.45, 0.15],
                    }}
                    transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                    }}
                    className="absolute rounded-full bg-cyan-400/20"
                    style={{
                        width: 4 + Math.random() * 8,
                        height: 4 + Math.random() * 8,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}

            {/* Grid Pattern */}

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
                        duration: 0.7,
                    }}
                    className="text-center"
                >
                    <p className="text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
                        Featured Projects
                    </p>

                    <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
                        Turning Ideas Into Intelligent Solutions
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                        A selection of projects demonstrating my expertise in
                        Full Stack Development, Artificial Intelligence,
                        Computer Vision and scalable software engineering.
                    </p>

                </motion.div>

                <div className="mt-10 flex justify-center">
                    <div
                        className="
                            h-px
                            w-40
                            bg-gradient-to-r
                            from-transparent
                            via-cyan-400
                            to-transparent
                        "
                    />
                </div>

                {/* Project Grid */}

                {featuredProjects && featuredProjects.length > 0 ? (
                    <div
                        className="
                            mt-20
                            grid
                            gap-8
                            lg:grid-cols-2
                        "
                    >
                        {featuredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-slate-400">
                        Projects will be available soon.
                    </p>
                )}

                <div
                    className="
                        mt-20
                        grid
                        gap-8
                        lg:grid-cols-2
                    "
                >
                    {featuredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
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
                        delay: 0.2,
                    }}
                    className="mt-20 flex justify-center"
                >
                    <motion.a
                        href="/projects"
                        whileHover={{
                            scale: 1.05,
                            y: -3,
                        }}
                        whileTap={{
                            scale: 0.96,
                        }}
                        className="
                            group
                            inline-flex
                            items-center
                            gap-3
                            rounded-2xl
                            bg-gradient-to-r
                            from-cyan-500
                            via-blue-600
                            to-violet-600
                            px-8
                            py-4
                            font-semibold
                            text-white
                            shadow-[0_15px_40px_rgba(34,211,238,0.35)]
                        "
                    >
                        View All Projects

                        <motion.div
                            animate={{
                                x: [0, 4, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                            }}
                        >
                            <ArrowUpRight size={20} />
                        </motion.div>

                    </motion.a>
                </motion.div>

            </div>
        </section>
    );
};

export default ProjectsPreview;