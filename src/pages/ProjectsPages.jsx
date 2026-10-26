import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, FolderGit2 } from "lucide-react";
import { Link } from "react-router-dom";

import { featuredProjects } from "../data/projects";
import ProjectsBackground from "../components/Projects/ProjectsBackground";
import ProjectCard from "../components/Projects/ProjectCard";

const ProjectsPage = () => {
    const reduceMotion = useReducedMotion();

    return (
        <main
            aria-labelledby="all-projects-heading"
            className="relative isolate min-h-screen overflow-hidden bg-[#050816] text-white"
        >
            <ProjectsBackground />

            <div className="relative z-10 mx-auto w-full max-w-[1450px] px-5 pb-24 pt-10 sm:px-8 sm:pb-28 lg:px-12 lg:pb-32 xl:px-16">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-2.5 text-xs font-semibold text-slate-400 transition-colors hover:border-cyan-400/30 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                    <ArrowLeft size={15} aria-hidden="true" />
                    Back to Home
                </Link>

                <motion.header
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.55 }}
                    className="mx-auto mt-16 max-w-3xl text-center sm:mt-20"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-300 sm:text-xs">
                        <FolderGit2 size={14} aria-hidden="true" />
                        Portfolio Collection
                    </span>

                    <h1
                        id="all-projects-heading"
                        className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl"
                    >
                        My{" "}
                        <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-400 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                        Explore my project collection, what each project
                        aims to do, and the technologies used to build it.
                    </p>
                </motion.header>

                {featuredProjects.length > 0 ? (
                    <>
                        <p
                            className="mt-10 text-center text-xs text-slate-500"
                            aria-live="polite"
                        >
                            {featuredProjects.length} featured{" "}
                            {featuredProjects.length === 1
                                ? "project"
                                : "projects"}
                        </p>

                        <div className="mt-8 grid grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {featuredProjects.map((project, index) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    index={index}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <p className="mt-12 text-center text-sm text-slate-500">
                        Projects will appear here soon.
                    </p>
                )}

                <div className="mt-16 flex justify-center">
                    <Link
                        to="/"
                        className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                        Return to Portfolio
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ProjectsPage;
