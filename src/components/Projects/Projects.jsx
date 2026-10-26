import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FolderGit2 } from "lucide-react";
import { Link } from "react-router-dom";

import { featuredProjects } from "../../data/projects";
import ProjectsBackground from "./ProjectsBackground";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="relative isolate overflow-hidden bg-[#050816] py-24 text-white sm:py-28 lg:py-32"
        >
            <ProjectsBackground />

            <div className="relative z-10 mx-auto w-full max-w-[1450px] px-5 sm:px-8 lg:px-12 xl:px-16">
                <motion.header
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: reduceMotion ? 0 : 0.55 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-300 sm:text-xs">
                        <FolderGit2 size={14} aria-hidden="true" />
                        Selected Work
                    </span>

                    <h2
                        id="projects-heading"
                        className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                    >
                        Projects That{" "}
                        <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-400 bg-clip-text text-transparent">
                            Bring Ideas to Life
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                        A growing collection of projects exploring AI,
                        web applications, backend development, and
                        practical software solutions.
                    </p>
                </motion.header>

                {featuredProjects.length > 0 ? (
                    <div className="mt-12 grid grid-cols-1 items-stretch gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="mt-12 text-center text-sm text-slate-500">
                        Projects will appear here soon.
                    </p>
                )}

                <div className="mt-12 flex justify-center">
                    <Link
                        to="/projects"
                        className="group inline-flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-6 py-3.5 text-sm font-semibold text-cyan-300 transition-colors hover:border-cyan-400/40 hover:bg-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                        Explore All Projects
                        <ArrowRight
                            size={16}
                            aria-hidden="true"
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>

            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
            />
        </section>
    );
};

export default Projects;

